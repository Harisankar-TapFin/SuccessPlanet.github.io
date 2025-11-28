# Success Planet - Online Learning Platform

**Success Planet** is a comprehensive online learning platform designed specifically for 10th-standard students. It provides a user-friendly interface for students to access courses, track their progress, and manage their profiles. The platform also includes a robust Admin Panel for user management.

## 🚀 Project Overview

This project demonstrates a complete frontend-based web application with simulated backend functionality using the browser's `localStorage`. It showcases modern web design principles, responsive layouts, and interactive user experiences.

### Key Features

#### 👤 User Features
- **User Registration**: Secure sign-up form with validation (email check, password strength).
- **User Login**: Authentication system with "Remember Me" functionality.
- **User Profile**: Personalized dashboard showing registration details, class, account status, and **Enrolled Courses with Automatic Progress Tracking**.
- **Interactive Learning**: Progress is automatically tracked as you answer questions in the courses.
- **Course Browsing**: Interactive course listings (HTML, CSS, Science, etc.).
- **Responsive Design**: Fully optimized for Desktop, Tablet, and Mobile devices.

#### 🛡️ Admin Features
- **Admin Dashboard**: Real-time statistics (Total Users, Verified vs. Pending).
- **User Management**:
  - **View**: List all registered users with search functionality.
  - **Verify**: Approve new user registrations.
  - **Edit**: Update user details (Name, Email, Class).
  - **Progress Tracking**: View and update user progress for enrolled courses.
  - **Delete**: Remove users from the system.
  - **Export**: Export user data to Excel (simulated).
- **Admin Management** (Superadmin Only): Create and manage other admin accounts.

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Libraries/Frameworks**:
  - Bootstrap (Grid & Components)
  - jQuery (DOM Manipulation)
  - FontAwesome (Icons)
- **Data Storage**: `localStorage` (Simulating a NoSQL Database)
- **Styling**: Custom CSS with CSS Variables for theming.

## 🏁 How to Start

1. **Clone or Download** the repository.
2. **Open the Project**:
   - Navigate to the project folder.
   - Open `index.html` in any modern web browser (Chrome, Firefox, Edge).
3. **Explore**:
   - **Home**: `index.html`
   - **Register**: `register.html`
   - **Login**: `login_new.html`
   - **Admin Panel**: `Admin.html`

## 🔐 Default Credentials

To access the Admin Panel (`Admin.html`), use the following superadmin credentials:

- **Email**: `superadmin@successplanet.com`
- **Password**: `admin@123`

> **Note**: You can create new users via the Registration page (`register.html`) and new Admins via the Admin Dashboard (if logged in as Superadmin).

## 📂 Project Structure

- `index.html`: Main landing page.
- `register.html`: User registration page.
- `login_new.html`: User login page.
- `profile.html`: User profile page (requires login).
- `Admin.html`: Administrative dashboard.
- `css/`: Stylesheets (`main.css`, `bootstrap.min.css`).
- `js/`: JavaScript files for logic and interactivity.
- `images/`: Assets and graphics.

## 🔮 Future Improvements

- **Backend Integration**: Connect to a real server (Node.js, Python, or PHP) and Database (MySQL, MongoDB).
- **Security**: Implement server-side authentication (JWT/Sessions) and data validation.
- **Course Content**: Add a CMS (Content Management System) to dynamically add/edit courses.
- **Payment Gateway**: Integrate payment processing for premium courses.

---
*© 2024 Success Planet. All Rights Reserved.*
