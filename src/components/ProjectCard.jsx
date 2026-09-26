import { useState } from 'react'
import { asset } from '../asset.js'
import { ArrowIcon, PlayIcon } from './Icons.jsx'
import TagList from './TagList.jsx'
import VideoModal from './VideoModal.jsx'

export default function ProjectCard({ title, description, tech, demo, video, poster }) {
  const [playing, setPlaying] = useState(false)
  const openVideo = () => setPlaying(true)

  // With only a video, clicking anywhere on the card plays it.
  // With a video and a live site, the card shows two buttons instead.
  const wholeCardPlays = video && !demo

  return (
    <li className="card project">
      {poster && (
        <img className="project-poster" src={asset(poster)} alt="" loading="lazy" />
      )}

      <div>
        <h3 className="card-title">
          {wholeCardPlays ? (
            // The button's ::after stretches over the whole card.
            <button type="button" className="card-link" onClick={openVideo}>
              {title}
            </button>
          ) : (
            title
          )}
        </h3>
        <p className="card-text">{description}</p>

        {wholeCardPlays && (
          <div className="project-links">
            <span className="watch-hint">
              <PlayIcon size={16} /> Watch demo
            </span>
          </div>
        )}

        {demo && (
          <div className="project-actions">
            {video && (
              <button type="button" className="action-button" onClick={openVideo}>
                <PlayIcon size={16} /> Watch demo
              </button>
            )}
            <a className="action-button" href={demo} target="_blank" rel="noreferrer">
              <ArrowIcon /> Live site
            </a>
          </div>
        )}

        <TagList tags={tech} />
      </div>

      {playing && <VideoModal title={title} video={video} onClose={() => setPlaying(false)} />}
    </li>
  )
}
