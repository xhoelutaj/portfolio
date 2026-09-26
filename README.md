# Portfolio

My personal portfolio site, built with React + Vite.

## Run it locally

```bash
npm install
npm run dev      # opens http://localhost:5173
```

## Project layout

- `src/App.jsx`: routes (which page shows for which URL)
- `src/components/`: reusable pieces (Navbar, and later ProjectCard)
- `src/pages/`: one file per page (Home, Projects, Resume, Contact)
- `src/index.css`: global styles; colours live in `:root`
- `public/videos/`: MP4 demo videos, served at `/videos/<name>.mp4`
