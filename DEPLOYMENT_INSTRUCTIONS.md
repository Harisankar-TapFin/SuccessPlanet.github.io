# GitHub Pages Deployment Instructions

## Your Live Website URL
Once deployed, your website will be available at:
**https://successplanet.github.io/**

## Steps to Deploy:

### Step 1: Push Code to GitHub
Open terminal in your project folder and run:

```bash
cd /home/tapsys/Documents/SuccessPlanet.github.io
git push origin main
```

**Note:** If it asks for authentication:
- You can use GitHub Personal Access Token (recommended)
- Or use GitHub CLI: `gh auth login`

### Step 2: Enable GitHub Pages

1. Go to your GitHub repository: https://github.com/SuccessPlanet/SuccessPlanet.github.io
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**

### Step 3: Wait for Deployment
- GitHub will take 1-2 minutes to build and deploy your site
- You'll see a green checkmark when it's ready
- Your site will be live at: **https://successplanet.github.io/**

### Step 4: Share with Your Teacher
Share this link: **https://successplanet.github.io/**

## Troubleshooting:

If the site doesn't load:
1. Check the Actions tab in GitHub to see if deployment succeeded
2. Make sure `index.html` is in the root folder
3. Wait a few minutes and refresh

## Quick Push Command (if authenticated):
```bash
git push origin main
```

