// Looks the site can be previewed in. Add ?theme=<id> to the URL to try one;
// without it the site uses the default look.
export const THEMES = [
  { id: 'original', label: 'Original' },
  { id: 'night', label: 'Night match' },
  { id: 'editorial', label: 'Clean editorial' },
  { id: 'terminal', label: 'Developer terminal' },
  { id: 'albanian', label: 'Albanian red' },
]

export function themeFromUrl() {
  const id = new URLSearchParams(window.location.search).get('theme')
  return THEMES.some((t) => t.id === id) ? id : null
}

export function applyTheme(id) {
  if (id && id !== 'original') document.documentElement.dataset.theme = id
  else delete document.documentElement.dataset.theme
}
