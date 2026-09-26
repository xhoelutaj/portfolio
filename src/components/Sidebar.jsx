import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons.jsx'

export default function Sidebar({ profile, sections, active }) {
  const socials = [
    { href: profile.github, label: 'GitHub', Icon: GitHubIcon },
    { href: profile.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
    { href: profile.email && `mailto:${profile.email}`, label: 'Email', Icon: MailIcon },
  ].filter((social) => social.href)

  return (
    <header className="sidebar">
      <div>
        <h1 className="name">
          <a href="#top">{profile.name}</a>
        </h1>
        <h2 className="role">{profile.role}</h2>
        <p className="tagline">{profile.tagline}</p>

        <nav className="section-nav" aria-label="In-page jump links">
          <ul>
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={active === section.id ? 'active' : undefined}
                  aria-current={active === section.id ? 'location' : undefined}
                >
                  <span className="nav-line" />
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className="socials">
        {socials.map(({ href, label, Icon }) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
              <Icon />
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}
