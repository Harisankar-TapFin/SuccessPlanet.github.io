# Fix GitHub Deployment - Permission Issue

## Problem:
You're trying to push to `SuccessPlanet/SuccessPlanet.github.io` but you're logged in as `Harisankar-TapFin`, so you don't have permission.

## Solution: Create Your Own Repository

### Option 1: Create Repository on GitHub (Recommended)

1. **Go to GitHub and create a new repository:**
   - Visit: https://github.com/new
   - Repository name: `SuccessPlanet.github.io` (or any name you like)
   - Make it **Public** (required for free GitHub Pages)
   - **DO NOT** initialize with README, .gitignore, or license
   - Click **Create repository**

2. **Update your local repository to point to your new repo:**

```bash
cd /home/tapsys/Documents/SuccessPlanet.github.io

# Remove old remote
git remote remove origin

# Add your new repository (replace YOUR_USERNAME with Harisankar-TapFin)
git remote add origin https://github.com/Harisankar-TapFin/SuccessPlanet.github.io.git

# Push to your repository
git push -u origin main
```

### Option 2: Use GitHub CLI (if installed)

```bash
gh repo create SuccessPlanet.github.io --public --source=. --remote=origin --push
```

### After Pushing:

1. Go to: https://github.com/Harisankar-TapFin/SuccessPlanet.github.io/settings/pages
2. Under **Source**, select:
   - Branch: **main**
   - Folder: **/ (root)**
3. Click **Save**

### Your Live URL Will Be:
**https://harisankar-tapfin.github.io/SuccessPlanet.github.io/**

OR if you name it exactly `SuccessPlanet.github.io`:
**https://harisankar-tapfin.github.io/SuccessPlanet.github.io/**

---

## Quick Commands:

```bash
# 1. Remove old remote
git remote remove origin

# 2. Add your repository (replace with your actual repo URL)
git remote add origin https://github.com/Harisankar-TapFin/YOUR-REPO-NAME.git

# 3. Push
git push -u origin main
```

