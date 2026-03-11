import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Domů' },
  { to: '/sluzby', label: 'Služby' },
  { to: '/galerie', label: 'Galerie' },
  { to: '/o-nas', label: 'O nás' },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
            <span className="text-accent font-black text-2xl tracking-tight">TESO</span>
            <span className="text-white font-semibold text-lg">David</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-accent ${
                    isActive ? 'text-accent' : 'text-gray-300'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="tel:+420736121255"
              className="btn-primary text-sm py-2"
            >
              +420 736 121 255
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded focus:outline-none"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Přepnout menu"
          >
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-white transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700">
          <nav className="container-custom py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded text-sm font-medium transition-colors ${
                    isActive ? 'text-accent bg-gray-800' : 'text-gray-300 hover:text-accent hover:bg-gray-800'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="tel:+420736121255"
              className="mt-2 btn-primary text-center text-sm py-2"
            >
              +420 736 121 255
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
