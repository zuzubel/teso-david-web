import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Phone, Menu, X } from 'lucide-react'
import { featuredServices, servicePath } from '../../data/services'

// Home is reachable via the logo. The /sluzby overview, /galerie and /o-nas pages exist
// (see App.tsx) but are intentionally left out of the menu for now.
const navLinks = [
  ...featuredServices.map((s) => ({ to: servicePath(s), label: s.navLabel })),
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b-2 border-accent bg-sage text-primary">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5" onClick={() => setMenuOpen(false)}>
            <span className="text-xl font-black tracking-tight text-accent">TESO</span>
            <span className="text-lg font-bold text-primary">David</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-white/70 text-accent'
                      : 'text-gray-700 hover:bg-white/50 hover:text-accent'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="tel:+420736121255"
              className="btn-primary ml-4 inline-flex items-center gap-2 py-2 text-sm"
            >
              <Phone size={14} /> +420 736 121 255
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="rounded-lg p-2 text-olive-700 transition-colors hover:bg-white/50 hover:text-accent lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Přepnout menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-sage-200 bg-sage lg:hidden">
          <nav className="container-custom flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-white/70 text-accent'
                      : 'text-gray-700 hover:bg-white/50 hover:text-accent'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="tel:+420736121255"
              className="btn-primary mt-3 inline-flex items-center justify-center gap-2 py-3 text-center text-sm"
            >
              <Phone size={15} /> +420 736 121 255
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
