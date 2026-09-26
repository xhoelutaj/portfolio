import { useEffect, useRef } from 'react'
import { getYouTubeId, videoSrc } from '../video.js'
import { CloseIcon } from './Icons.jsx'

// Plays a project's demo in a popup over the page. <dialog> gives us the
// dark backdrop, Esc-to-close and keyboard focus handling for free.
export default function VideoModal({ title, video, onClose }) {
  const ref = useRef(null)
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

      {youtubeId ? (
        <iframe
          className="video-modal-player"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={`${title} demo`}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <video className="video-modal-player" src={videoSrc(video)} controls autoPlay playsInline>
          Your browser can’t play this video.
        </video>
      )}
    </dialog>
  )
}
