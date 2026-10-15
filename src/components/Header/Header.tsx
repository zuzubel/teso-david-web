import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Phone, Menu, X } from 'lucide-react'

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
    <header className="bg-primary/95 backdrop-blur-sm text-white sticky top-0 z-50 border-b border-white/5">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5" onClick={() => setMenuOpen(false)}>
            <span className="text-accent font-black text-xl tracking-tight">TESO</span>
            <span className="text-white/80 font-medium text-sm tracking-widest uppercase">David</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                    isActive ? 'text-accent bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="tel:+420736121255"
              className="ml-4 btn-primary text-sm py-2 inline-flex items-center gap-2"
            >
              <Phone size={14} /> +420 736 121 255
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Přepnout menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-primary border-t border-white/10">
          <nav className="container-custom py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive ? 'text-accent bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="tel:+420736121255"
              className="mt-3 btn-primary text-center text-sm py-3 inline-flex items-center justify-center gap-2"
            >
              <Phone size={15} /> +420 736 121 255
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
