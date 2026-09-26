import Spotlight from './components/Spotlight.jsx'
import Sidebar from './components/Sidebar.jsx'
import Section from './components/Section.jsx'
import ExperienceItem from './components/ExperienceItem.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import { ArrowIcon } from './components/Icons.jsx'
import useActiveSection from './hooks/useActiveSection.js'
import { profile, about, experience, projects } from './data.js'
import { asset } from './asset.js'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
const sectionIds = sections.map((s) => s.id)

export default function App() {
  const active = useActiveSection(sectionIds)

  return (
    <>
      <a href="#content" className="skip-link">Skip to content</a>
      <Spotlight />

      <div className="layout" id="top">
        <Sidebar profile={profile} sections={sections} active={active} />

        <main className="content" id="content">
          <Section id="about" title="About">
            <div className="about">
              {about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Section>

          <Section id="experience" title="Experience">
            <ol className="card-list">
              {experience.map((job) => (
                <ExperienceItem key={`${job.company}-${job.dates}`} {...job} />
              ))}
            </ol>
            <a className="arrow-link" href={asset(profile.resume)} target="_blank" rel="noreferrer">
              View full résumé <ArrowIcon />
            </a>
          </Section>

          <Section id="projects" title="Projects">
            <ul className="card-list">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </ul>
          </Section>

          <Section id="contact" title="Contact">
            <p>
              I’m open to new opportunities and collaborations. Whether you have a question
              or just want to say hi, my inbox is open.
            </p>
            <a className="button" href={`mailto:${profile.email}`}>Say hello</a>
          </Section>

          <footer className="footer">
            <p>
              Designed and built by {profile.name} with React and Vite. Layout inspired by{' '}
              <a className="link" href="https://brittanychiang.com" target="_blank" rel="noreferrer">Brittany Chiang</a>.
            </p>
          </footer>
        </main>
      </div>
    </>
  )
}
