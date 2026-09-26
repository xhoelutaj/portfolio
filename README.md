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

Clicking a project opens its demo in a popup player on the site. Projects with a
live site too (like Gaffr) show two buttons instead: **Watch demo** and **Live site**.

Either way, set the project's `video` in `src/data.js` to one of:

- **An unlisted YouTube video** (keeps video files out of this repo):
  upload to YouTube with visibility **Unlisted**, copy the link, and use
  `video: 'https://youtu.be/…'`.
- **A file in this repo:** open [`public/videos`](public/videos), then
  **Add file → Upload files** (under ~20 MB; GitHub's web upload limit is 25 MB),
  and use `video: 'videos/gaffr-demo.mp4'`.

Optional: add a thumbnail image with `poster: 'videos/gaffr-demo.jpg'`.

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
