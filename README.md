# Portfolio Website — Tanyaradzwa Hweru

This is a small static portfolio website built with plain HTML, CSS and a tiny amount of JavaScript.

It includes:
- Home page with hero (profile photo, name, tagline, CTAs)
- About page with biography, skills (visual bars) and a timeline
- Projects page with project cards, thumbnails, descriptions and demo/GitHub links
- Contact page with an HTML5-validated contact form and social links
- Light / Dark theme toggle (persists preference in localStorage)

Colors: girly purple palette with light (blush-lavender) and fully-black dark mode.

Files of interest
- `index.html` — Home / hero
- `about.html` — About / skills / timeline
- `projects.html` — Projects list (cards) — uses `asset/` images
- `contact.html` — Contact form and social links
- `css/style.css` — All styling and theme variables
- `js/theme.js` — Theme toggle logic (persists in localStorage)
- `vercel.json` — Vercel deployment configuration (serves static files)
- `asset/` — local images (profile, project thumbnails)

Quick local preview (Windows PowerShell)
1. Open PowerShell in the project folder (or run these commands):

```powershell
cd "C:\Users\DELL 5480 i5\portfolio-website"
py -3 -m http.server 8000
Start-Process "http://localhost:8000"
```

2. The site will be served at http://localhost:8000 — open the URL in your browser.

Notes about images
- Thumbnails and the profile image are stored in the `asset/` folder and are tracked by Git. If you add new images, make sure to `git add asset/<filename>` and push so your deployment includes them.

Vercel deployment (recommended)
- The project contains a minimal `vercel.json` configured for static deployments. To deploy:
  1. Go to https://vercel.com and sign in with GitHub.
  2. Import the repository `hwerutanyaradzwa-hub/web-project`.
  3. Vercel should detect a static site and deploy automatically. If not, leave the build command empty.

Troubleshooting
- Broken/missing images on Vercel? Ensure files in `asset/` are committed and pushed. `vercel.json` includes `asset/**` so Vercel will serve the folder.
- Push failures (network/DNS): verify internet connectivity and DNS resolution for `github.com`.
- Form handling: the contact form uses `mailto:` to open the user's email client. For server-side handling, consider Formspree, Netlify Forms, or a serverless function.

Developer notes / customization
- Change theme colors in `css/style.css` (look for `:root` variables). `data-theme="dark"` overrides the values.
- Add or replace project thumbnails in `asset/` and update `projects.html` to point to the new files.
- To change the GitHub links for the projects, edit `projects.html` and update the `<a>` hrefs.

Commit & push checklist
- After making edits, run these commands in PowerShell:

```powershell
git add .
git commit -m "Describe your change"
git push origin main
```

Contact / Support
- Email: hwerutanyaradzwa@gmail.com
- GitHub: https://github.com/hwerutanyaradzwa

---

If you'd like, I can also:
- Add a live-demo build step (CI) or a GitHub Actions workflow for preview builds.
- Hook the contact form to Formspree or a Netlify form for serverless form handling.
- Add social icons, favicon, or open-graph meta tags for sharing.

Tell me what you'd like next and I’ll implement it.