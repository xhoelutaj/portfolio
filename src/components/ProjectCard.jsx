import { asset } from '../asset.js'
import { ArrowIcon, GitHubIcon } from './Icons.jsx'
import TagList from './TagList.jsx'

export default function ProjectCard({ title, description, tech, repo, demo, video, poster }) {
  // The title links to the code, or to the live site when the code is private.
  const titleHref = repo || demo

  return (
    <li className="card project">
      {video && (
        // preload="metadata" loads only the first frame and length until play is pressed.
        <video
          className="project-video"
          src={asset(video)}
          poster={poster ? asset(poster) : undefined}
          controls
          playsInline
          preload="metadata"
        >
          Your browser can’t play this video.
        </video>
      )}

      <div>
        <h3 className="card-title">
          {titleHref ? (
            <a href={titleHref} target="_blank" rel="noreferrer" className="card-link">
              {title} <ArrowIcon />
            </a>
          ) : (
            title
          )}
        </h3>
        <p className="card-text">{description}</p>

        {(repo || demo) && (
          <div className="project-links">
            {repo && (
              <a href={repo} target="_blank" rel="noreferrer">
                <GitHubIcon size={16} /> Code
              </a>
            )}
            {demo && (
              <a href={demo} target="_blank" rel="noreferrer">
                <ArrowIcon /> Live site
              </a>
            )}
          </div>
        )}

        <TagList tags={tech} />
      </div>
    </li>
  )
}
