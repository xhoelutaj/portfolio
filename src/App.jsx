import Sidebar from './components/Sidebar.jsx'
import Section from './components/Section.jsx'
import ExperienceItem from './components/ExperienceItem.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import useActiveSection from './hooks/useActiveSection.js'
import { profile, about, highlights, experience, projects } from './data.js'
import { asset } from './asset.js'

const pad = (n) => String(n).padStart(2, '0')

// Sections with no content yet are left out (and so is their nav link).
const sections = [
  { id: 'about', label: 'About' },
  experience.length > 0 && { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Selected work' },
  { id: 'contact', label: 'Contact' },
]
  .filter(Boolean)
  .map((section, i) => ({ ...section, number: pad(i + 1) }))
const sectionIds = sections.map((s) => s.id)
const sectionFor = Object.fromEntries(sections.map((s) => [s.id, s]))

export default function App() {
  const active = useActiveSection(sectionIds)

  const socialLinks = [
    { href: profile.github, label: 'GitHub' },
    { href: profile.linkedin, label: 'LinkedIn' },
    { href: profile.instagram, label: 'Instagram' },
  ].filter((link) => link.href)

  return (
    <>
      <a href="#content" className="skip-link">Skip to content</a>

      <div className="layout" id="top">
        <Sidebar profile={profile} sections={sections} active={active} />

        <main className="content" id="content">
          <Section id="about" number={sectionFor.about.number} title="About">
            <p className="lead">{about.lead}</p>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {highlights.length > 0 && (
              <aside className="highlights" aria-label="At a glance">
                {highlights.map((item) => (
                  <div key={item.label} className="highlight">
                    <span className="highlight-value">{item.value}</span>
                    <span className="highlight-label">{item.label}</span>
                  </div>
                ))}
              </aside>
            )}
          </Section>

          {experience.length > 0 && (
            <Section id="experience" number={sectionFor.experience.number} title="Experience">
              <ol className="jobs">
                {experience.map((job) => (
                  <ExperienceItem key={`${job.company}-${job.dates}`} {...job} />
                ))}
              </ol>
              {profile.resume && (
                <a className="underline-link" href={asset(profile.resume)} target="_blank" rel="noreferrer">
                  Read the full résumé ↗
                </a>
              )}
            </Section>
          )}

          <Section id="work" number={sectionFor.work.number} title="Selected work">
            <div className="projects">
              {projects.map((project, i) => (
                <ProjectCard key={project.title} number={pad(i + 1)} {...project} />
              ))}
            </div>
          </Section>

          <Section id="contact" number={sectionFor.contact.number} title="Contact">
            <p className="contact-headline">Have a role, a project, or a question?</p>
            <p>
              I’m open to new opportunities and collaborations. Whether you have a question
              or just want to say hi, I’d love to hear from you.
            </p>
            {profile.email && (
              <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
            )}
            {socialLinks.length > 0 && (
              <ul className="contact-links">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>
                  </li>
                ))}
              </ul>
            )}
          </Section>
        </main>
      </div>
    </>
  )
}
