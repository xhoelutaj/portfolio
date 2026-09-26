import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
]

// NavLink works like <a>, but switches pages without reloading and
// adds the "active" class to the link for the current page.
export default function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="brand">Xhoel Lutaj</NavLink>
      <nav>
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} end>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
