import { useState } from 'react'
import { asset } from '../asset.js'
import { getYouTubeId } from '../video.js'
import { PlayFilledIcon } from './Icons.jsx'
import NoticeModal from './NoticeModal.jsx'
import TechList from './TechList.jsx'
import VideoModal from './VideoModal.jsx'

// Your own poster image, else the YouTube video's thumbnail.
function thumbnailFor(poster, video) {
  if (poster) return asset(poster)
  const id = video && getYouTubeId(video)
  return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : null
}

export default function ProjectCard({
  number,
  title,
  tagline,
  description,
  tech,
  demo,
  demoNotice,
  video,
  moreVideos = [],
  poster,
}) {
  const [playing, setPlaying] = useState(false)
  const [showNotice, setShowNotice] = useState(false)
  const [thumbFailed, setThumbFailed] = useState(false)
  const videoCount = video ? 1 + moreVideos.length : 0
  const thumbnail = thumbFailed ? null : thumbnailFor(poster, video)
  const openVideo = () => setPlaying(true)

  return (
    <article className="project">
      {thumbnail && (
        // Clicking the thumbnail plays the demo too.
        <button
          type="button"
          className="project-thumb"
          onClick={video ? openVideo : undefined}
          disabled={!video}
          aria-label={video ? `Watch the ${title} demo` : undefined}
        >
          <img src={thumbnail} alt="" loading="lazy" onError={() => setThumbFailed(true)} />
          {video && (
            <span className="project-thumb-play" aria-hidden="true">
              <PlayFilledIcon size={22} />
            </span>
          )}
        </button>
      )}
      <p className="project-num">No. {number}</p>
      <h3 className="project-title">{title}</h3>
      {tagline && <p className="project-tagline">{tagline}</p>}
      <p className="project-text">{description}</p>
      <TechList items={tech} />

      {(video || demo) && (
        <div className="project-actions">
          {video && (
            <button type="button" className="btn btn-primary" onClick={openVideo}>
              <PlayFilledIcon />
              {videoCount > 1 ? `Watch the demos (${videoCount})` : 'Watch the demo'}
            </button>
          )}
          {demo && (
            <a
              className="btn btn-secondary"
              href={demo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => {
                // Show the notice first; its OK button opens the site.
                if (demoNotice) {
                  e.preventDefault()
                  setShowNotice(true)
                }
              }}
            >
              Visit the live site ↗
            </a>
          )}
        </div>
      )}

      {playing && (
        <VideoModal
          number={number}
          title={title}
          caption={tagline}
          videos={[{ label: 'Full demo', video }, ...moreVideos]}
          onClose={() => setPlaying(false)}
        />
      )}
      {showNotice && (
        <NoticeModal
          {...demoNotice}
          onConfirm={() => window.open(demo, '_blank', 'noopener')}
          onClose={() => setShowNotice(false)}
        />
      )}
    </article>
  )
}
