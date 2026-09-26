import Spotlight from './components/Spotlight.jsx'
import Sidebar from './components/Sidebar.jsx'
import Section from './components/Section.jsx'
import ExperienceItem from './components/ExperienceItem.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import { ArrowIcon, GitHubIcon } from './components/Icons.jsx'
import useActiveSection from './hooks/useActiveSection.js'
import { profile, about, experience, projects } from './data.js'
import { asset } from './asset.js'

// Sections with no content yet are left out (and so is their nav link).
const sections = [
  { id: 'about', label: 'About' },
  experience.length > 0 && { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
].filter(Boolean)
const sectionIds = sections.map((s) => s.id)

export default function App() {
  const active = useActiveSection(sectionIds)

  const resumeLink = profile.resume && (
    <a className="arrow-link" href={asset(profile.resume)} target="_blank" rel="noreferrer">
      View full résumé <ArrowIcon />
    </a>
  )

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

          {experience.length > 0 && (
            <Section id="experience" title="Experience">
              <ol className="card-list">
                {experience.map((job) => (
                  <ExperienceItem key={`${job.company}-${job.dates}`} {...job} />
                ))}
              </ol>
              {resumeLink}
            </Section>
          )}

          <Section id="projects" title="Projects">
            <ul className="card-list">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </ul>
            {experience.length === 0 && resumeLink}
          </Section>

          <Section id="contact" title="Contact">
            <p>
              I’m open to new opportunities and collaborations. Whether you have a question
              or just want to say hi, I’d love to hear from you.
            </p>
            {profile.email && (
              <a className="button" href={`mailto:${profile.email}`}>Say hello</a>
            )}
          </Section>

          <footer className="footer">
            <a className="footer-github" href={profile.github} target="_blank" rel="noreferrer">
              <GitHubIcon size={18} /> See my code on GitHub
            </a>
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
