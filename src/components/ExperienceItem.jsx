import TechList from './TechList.jsx'

export default function ExperienceItem({ dates, title, company, detail, url, description, tech }) {
  return (
    <li className="job">
      <p className="job-dates">{dates}</p>
      <div className="job-body">
        <h3 className="job-title">{title}</h3>
        <p className="job-company">
          {url ? (
            <a href={url} target="_blank" rel="noreferrer">{company}</a>
          ) : (
            company
          )}
          {detail && ` · ${detail}`}
        </p>
        <p className="job-text">{description}</p>
        {tech && <TechList items={tech} />}
      </div>
    </li>
  )
}
