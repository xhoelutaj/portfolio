import { ArrowIcon } from './Icons.jsx'
import TagList from './TagList.jsx'

export default function ExperienceItem({ dates, title, company, url, description, tech }) {
  const heading = (
    <>
      {title} · <span className="card-sub">{company}</span>
    </>
  )

  return (
    <li className="card">
      <p className="card-meta">{dates}</p>
      <div>
        <h3 className="card-title">
          {url ? (
            // The link's ::after stretches over the whole card, so the card is clickable.
            <a href={url} target="_blank" rel="noreferrer" className="card-link">
              {heading} <ArrowIcon />
            </a>
          ) : (
            heading
          )}
        </h3>
        <p className="card-text">{description}</p>
        <TagList tags={tech} />
      </div>
    </li>
  )
}
