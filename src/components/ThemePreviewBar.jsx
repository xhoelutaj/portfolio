import { useState } from 'react'
import { THEMES, applyTheme, themeFromUrl } from '../theme.js'

// Only shown when the URL has ?theme=…, so you can flip between looks.
export default function ThemePreviewBar() {
  const [current, setCurrent] = useState(themeFromUrl)
  if (!current) return null

  const choose = (id) => {
    applyTheme(id)
    setCurrent(id)
    const url = new URL(window.location.href)
    url.searchParams.set('theme', id)
    window.history.replaceState(null, '', url)
  }

  return (
    <div className="theme-bar" role="group" aria-label="Preview a theme">
      <span className="theme-bar-label">Preview:</span>
      {THEMES.map((theme) => (
        <button
          key={theme.id}
          type="button"
          aria-pressed={theme.id === current}
          onClick={() => choose(theme.id)}
        >
          {theme.label}
        </button>
      ))}
    </div>
  )
}
