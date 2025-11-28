/**
 * Course Progress Tracking Logic
 * Automatically tracks progress based on "View Answer" clicks.
 */

(function () {
    // 1. Identify User
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const userDataStr = localStorage.getItem("userData");

    if (!isLoggedIn || !userDataStr) {
        console.log("User not logged in. Progress tracking disabled.");
        return;
    }

    let userData;
    try {
        userData = JSON.parse(userDataStr);
    } catch (e) {
        console.error("Invalid user data", e);
        return;
    }

    // 2. Identify Course
    // We expect a data-course-name attribute on the body or a specific container
    const courseName = document.body.getAttribute("data-course-name");
    if (!courseName) {
        console.warn("No data-course-name attribute found. Progress tracking disabled.");
        return;
    }

    // 3. Setup Tracking
    const questions = document.querySelectorAll(".mcq-question");
    const totalQuestions = questions.length;

    if (totalQuestions === 0) {
        console.warn("No questions found to track.");
        return;
    }

    // Load existing progress for this course
    let enrolledCourses = userData.enrolledCourses || [];
    // Handle legacy string format if present (convert to object)
    enrolledCourses = enrolledCourses.map(c => typeof c === 'string' ? {
        id: c.toLowerCase().replace(/\s+/g, '-'),
        name: c,
        progress: 0,
        status: 'In Progress',
        enrolledDate: new Date().toISOString()
    } : c);

    let currentCourse = enrolledCourses.find(c => c.name === courseName);

    // If not enrolled, maybe auto-enroll? For now, we assume they are enrolled.
    if (!currentCourse) {
        console.log(`User not enrolled in ${courseName}. Auto-enrolling...`);
        currentCourse = {
            id: courseName.toLowerCase().replace(/\s+/g, '-'),
            name: courseName,
            progress: 0,
            status: "In Progress",
            enrolledDate: new Date().toISOString()
        };
        enrolledCourses.push(currentCourse);
        saveUserData(userData, enrolledCourses);
    }

    // Track answered questions in session storage to avoid re-counting on refresh
    // Key: progress_userEmail_courseName
    const storageKey = `progress_${userData.email}_${courseName}`;
    let answeredQuestions = JSON.parse(localStorage.getItem(storageKey) || "[]");

    // Initialize UI based on previously answered questions
    questions.forEach((q, index) => {
        const btn = q.querySelector(".view-answer-btn");
        if (answeredQuestions.includes(index)) {
            // Mark as visually answered if you want, or just rely on the logic
            // For now, we just ensure the button click doesn't double count if we re-click
            btn.setAttribute("data-answered", "true");
        }

        btn.addEventListener("click", function () {
            if (this.getAttribute("data-answered") === "true") return;

            this.setAttribute("data-answered", "true");
            answeredQuestions.push(index);
            localStorage.setItem(storageKey, JSON.stringify(answeredQuestions));

            updateProgress();
        });
    });

    function updateProgress() {
        const answeredCount = answeredQuestions.length;
        const newProgress = Math.min(100, Math.round((answeredCount / totalQuestions) * 100));

        if (newProgress > currentCourse.progress) {
            currentCourse.progress = newProgress;
            if (newProgress === 100) {
                currentCourse.status = "Completed";
                showToast(`🎉 Course Completed!`);
            } else {
                showToast(`Progress Saved: ${newProgress}%`);
            }

            saveUserData(userData, enrolledCourses);
        }
    }

    function saveUserData(user, courses) {
        user.enrolledCourses = courses;

        // 1. Update Session
        localStorage.setItem("userData", JSON.stringify(user));

        // 2. Sync with Master List
        const allUsers = JSON.parse(localStorage.getItem("ls_users") || "[]");
        const userIndex = allUsers.findIndex(u => u.email === user.email);
        if (userIndex !== -1) {
            allUsers[userIndex].enrolledCourses = courses;
            localStorage.setItem("ls_users", JSON.stringify(allUsers));
        }
    }

    // Simple Toast Notification
    function showToast(message) {
        let toast = document.getElementById("progress-toast");
        if (!toast) {
            toast = document.createElement("div");
            toast.id = "progress-toast";
            toast.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: #333;
                color: white;
                padding: 12px 24px;
                border-radius: 4px;
                z-index: 9999;
                display: none;
                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                animation: slideIn 0.3s ease;
            `;
            document.body.appendChild(toast);

            // Add animation keyframes
            const style = document.createElement('style');
            style.innerHTML = `
                @keyframes slideIn {
                    from { transform: translateY(100%); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
            `;
            document.head.appendChild(style);
        }

        toast.textContent = message;
        toast.style.display = "block";

        setTimeout(() => {
            toast.style.display = "none";
        }, 3000);
    }

})();
