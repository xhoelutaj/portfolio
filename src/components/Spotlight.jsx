import { useEffect, useRef } from 'react'

// A soft glow that follows the mouse. The position is stored in CSS
// variables (--x, --y) that the .spotlight gradient in index.css reads.
export default function Spotlight() {
  const ref = useRef(null)

  useEffect(() => {
    // Touch screens have no cursor to follow.
    if (!window.matchMedia('(pointer: fine)').matches) return

    const move = (e) => {
      ref.current.style.setProperty('--x', `${e.clientX}px`)
      ref.current.style.setProperty('--y', `${e.clientY}px`)
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return <div ref={ref} className="spotlight" aria-hidden="true" />
}
