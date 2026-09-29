import { asset } from '../asset.js'
import { GitHubIcon, InstagramIcon, LinkedInIcon, MailIcon } from './Icons.jsx'

export default function Sidebar({ profile, sections, active }) {
  const socials = [
    { href: profile.github, label: 'GitHub', Icon: GitHubIcon },
    { href: profile.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
    { href: profile.instagram, label: 'Instagram', Icon: InstagramIcon },
    { href: profile.email && `mailto:${profile.email}`, label: 'Email', Icon: MailIcon },
  ].filter((social) => social.href)

  // First name on one line, the rest on the next.
  const [firstName, ...otherNames] = profile.name.split(' ')

  return (
    <header className="sidebar">
      <div>
        <p className="eyebrow">Portfolio · {profile.location}</p>
        <h1 className="name">
          <a href="#top">
            {firstName}
            {otherNames.length > 0 && (
              <>
                <br />
                {otherNames.join(' ')}
              </>
            )}
          </a>
        </h1>
        <p className="role">{profile.role}</p>
        <p className="tagline">{profile.tagline}</p>

        <nav className="section-nav" aria-label="Sections">
          <ol>
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={active === section.id ? 'active' : undefined}
                  aria-current={active === section.id ? 'location' : undefined}
                >
                  <span className="nav-num">{section.number}</span>
                  <span className="nav-line" />
                  {section.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>

      <div className="sidebar-links">
        <ul className="socials">
          {socials.map(({ href, label, Icon }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
                <Icon size={22} />
              </a>
            </li>
          ))}
        </ul>
        {profile.resume && (
          <a className="underline-link resume-link" href={asset(profile.resume)} target="_blank" rel="noreferrer">
            Résumé (PDF) ↗
          </a>
        )}
      </div>
    </header>
  )
}
