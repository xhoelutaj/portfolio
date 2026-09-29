import { useState } from 'react'
import { asset } from '../asset.js'
import { PlayFilledIcon } from './Icons.jsx'
import NoticeModal from './NoticeModal.jsx'
import TechList from './TechList.jsx'
import VideoModal from './VideoModal.jsx'

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
  quote,
}) {
  const [playing, setPlaying] = useState(false)
  const [showNotice, setShowNotice] = useState(false)
  const videoCount = video ? 1 + moreVideos.length : 0

  return (
    <>
      <article className="project">
        {poster && <img className="project-poster" src={asset(poster)} alt="" loading="lazy" />}
        <p className="project-num">No. {number}</p>
        <h3 className="project-title">{title}</h3>
        {tagline && <p className="project-tagline">{tagline}</p>}
        <p className="project-text">{description}</p>
        <TechList items={tech} />

        {(video || demo) && (
          <div className="project-actions">
            {video && (
              <button type="button" className="btn btn-primary" onClick={() => setPlaying(true)}>
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

      {quote && (
        <figure className="pull-quote">
          <blockquote>
            <span className="quote-mark">“</span>
            {quote.text}
            <span className="quote-mark">”</span>
          </blockquote>
          {quote.caption && <figcaption>{quote.caption}</figcaption>}
        </figure>
      )}
    </>
  )
}
