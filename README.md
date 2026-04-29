# Portfolio Structure Guide

Your portfolio has been organized into separate folders for better maintainability.

## 📁 Folder Structure

```
portfolio/
├── index.html              # Main HTML file (entry point)
├── iam.html                # Original file (can be deleted)
├── css/
│   └── styles.css         # All CSS styles
├── js/
│   └── script.js          # All JavaScript functionality
├── images/
│   └── profile.jpg        # Your profile photo (add here)
├── assets/
│   └── resume.pdf         # Your resume (add here)
└── README.md              # This file
```

## 🚀 Setup Instructions

### 1. Add Your Profile Photo
- Place your profile photo in the `images/` folder
- Name it as `profile.jpg` (or update the src path in index.html if using a different name)
- **Location in layout**: Hero section on the right side

### 2. Add Your Resume
- Place your resume PDF in the `assets/` folder
- Name it as `resume.pdf` (or update the download function in js/script.js if using a different name)
- The resume will download when users click the "Resume" button in the navbar

### 3. Using the Portfolio
- Open `index.html` in your browser to view the portfolio
- You can delete the old `iam.html` file as it's no longer needed

## 📝 Making Changes

### To modify styles:
- Edit `css/styles.css`
- All styles are organized with clear section comments

### To modify content:
- Edit `index.html`
- All sections are clearly labeled (HERO, SKILLS, EXPERIENCE, PROJECTS, etc.)

### To add functionality:
- Edit `js/script.js`
- Key functions: `toggleProj()`, `downloadResume()`, scroll effects

### To change resume filename:
In `js/script.js`, find the `downloadResume()` function and update:
```javascript
const resumeUrl = 'assets/your-resume-filename.pdf';
```

## 🎨 Features Included

✅ **Download Resume Button** - Click the "Resume" button in navbar to download  
✅ **Responsive Design** - Works perfectly on mobile and desktop  
✅ **Smooth Animations** - Professional fade-in and scroll effects  
✅ **Dark Theme** - Modern dark interface with accent colors  
✅ **Project Expandable Cards** - Click projects to see more details  
✅ **Organized File Structure** - Easy to maintain and update

## 📧 Contact Information

Keep your contact details updated in the Contact section of index.html.

---

**Happy building! 🚀**
