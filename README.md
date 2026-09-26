# Portfolio

My personal portfolio site, built with React + Vite.

## Run it locally

```bash
npm install
npm run dev      # opens http://localhost:5173
```

## Editing the content

Almost everything you'd change is in **`src/data.js`**: your name, tagline, links,
about paragraphs, experience and projects.

### Adding a demo video

1. Put the file in `public/videos/`, e.g. `public/videos/rag-chatbot.mp4`
   (keep it under ~20 MB; GitHub rejects files over 100 MB).
2. In `src/data.js`, set that project's `video: 'videos/rag-chatbot.mp4'`.
3. Optional: add a thumbnail with `poster: 'videos/rag-chatbot.jpg'`.

## Project layout

- `src/data.js`: all site content
- `src/App.jsx`: page structure (sidebar + About / Experience / Projects / Contact)
- `src/components/`: Sidebar, ProjectCard (video), ExperienceItem, Spotlight, icons
- `src/hooks/useActiveSection.js`: highlights the section you're reading in the nav
- `src/index.css`: all styles; colours are the variables at the top in `:root`
- `public/`: files served as-is (`videos/`, and `resume.pdf` once you add it)

Layout inspired by [Brittany Chiang](https://brittanychiang.com).
