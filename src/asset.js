// Builds the URL for a file in public/. Using BASE_URL keeps links working
// when the site is hosted in a sub-folder (e.g. GitHub Pages /portfolio/).
export const asset = (path) => import.meta.env.BASE_URL + path
