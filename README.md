# Portfolio

My personal portfolio site, built with React + Vite.

**Live site:** https://xhoelutaj.github.io/portofolio/

Every change to `main` is rebuilt and published automatically by
`.github/workflows/deploy.yml` (about 1–2 minutes). You can see progress in the **Actions** tab.

## Editing on github.com (no setup needed)

### Change text, links, projects

1. Open [`src/data.js`](src/data.js) and click the **pencil icon** (Edit).
2. Change the text between the quotes. Empty values (`''` or `[]`) are hidden on the site.
3. Click **Commit changes**. The live site updates a minute or two later.

### Add a demo video

1. Open the [`public/videos`](public/videos) folder, then **Add file → Upload files**, and upload
   your `.mp4` (keep it under ~20 MB; GitHub's web upload limit is 25 MB).
   Use a simple file name like `gaffr-demo.mp4`, without spaces.
2. Edit `src/data.js` and change that project's `video: null` to `video: 'videos/gaffr-demo.mp4'`.

### Add your resume

Upload `resume.pdf` into [`public`](public), then set `resume: 'resume.pdf'` in `src/data.js`.

## Running it on your own computer (optional)

Needs [Node.js](https://nodejs.org) and [Git](https://git-scm.com).

```bash
git clone https://github.com/xhoelutaj/portofolio
cd portofolio
npm install
npm run dev      # opens http://localhost:5173
```

## Project layout

- `src/data.js`: all site content
- `src/App.jsx`: page structure (sidebar + About / Experience / Projects / Contact)
- `src/components/`: Sidebar, ProjectCard (video), ExperienceItem, Spotlight, icons
- `src/hooks/useActiveSection.js`: highlights the section you're reading in the nav
- `src/index.css`: all styles; colours are the variables at the top in `:root`
- `public/`: files served as-is (`videos/`, `resume.pdf`)

Layout inspired by [Brittany Chiang](https://brittanychiang.com).
