import { useEffect, useRef, useState } from 'react'
import { getYouTubeId, videoSrc } from '../video.js'
import { CloseIcon } from './Icons.jsx'

// Plays a project's demo in a popup over the page. <dialog> gives us the
// dark backdrop, Esc-to-close and keyboard focus handling for free.
// `videos` is a list of { label, video }; with more than one, tabs switch between them.
export default function VideoModal({ title, videos, onClose }) {
  const ref = useRef(null)
  const [current, setCurrent] = useState(0)
  const { video } = videos[current]
  const youtubeId = getYouTubeId(video)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog.open) dialog.showModal()
  }, [])

  const close = () => ref.current.close()

  return (
    <dialog
      ref={ref}
      className="video-modal"
      aria-label={`${title} demo`}
      onClose={onClose}
      // A click on the dialog itself (not its contents) is a click on the backdrop.
      onClick={(e) => e.target === ref.current && close()}
    >
      <div className="video-modal-header">
        <h3>{title}</h3>
        <button type="button" className="icon-button" onClick={close} aria-label="Close video">
          <CloseIcon />
        </button>
      </div>

      {videos.length > 1 && (
        <div className="video-tabs" role="group" aria-label="Choose a video">
          {videos.map((v, i) => (
            <button
              key={v.video}
              type="button"
              className="video-tab"
              aria-pressed={i === current}
              onClick={() => setCurrent(i)}
            >
              {v.label}
            </button>
          ))}
        </div>
      )}

      {/* key makes React swap in a fresh player when the tab changes. */}
      {youtubeId ? (
        <iframe
          key={video}
          className="video-modal-player"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={`${title}: ${videos[current].label}`}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <video key={video} className="video-modal-player" src={videoSrc(video)} controls autoPlay playsInline>
          Your browser can’t play this video.
        </video>
      )}
    </dialog>
  )
}
