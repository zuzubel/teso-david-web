import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-accent font-black text-2xl">TESO</span>
              <span className="text-white font-semibold text-lg">David</span>
            </div>
            <p className="text-sm leading-relaxed">
              Zemní práce a kontejnerová doprava ve Zlínském kraji od roku 1993.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigace</h3>
            <ul className="space-y-2 text-sm">
              {[
                ['/', 'Domů'],
                ['/sluzby', 'Služby'],
                ['/galerie', 'Galerie'],
                ['/o-nas', 'O nás'],
                ['/kontakt', 'Kontakt'],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-accent transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+420736121255" className="hover:text-accent transition-colors">
                  +420 736 121 255
                </a>
              </li>
              <li>
                <a href="mailto:kontakt@tesodavid.cz" className="hover:text-accent transition-colors">
                  kontakt@tesodavid.cz
                </a>
              </li>
              <li>Lešná 34, 756 41 Lešná</li>
              <li className="pt-2 text-xs text-gray-500">
                IČO: 45173281 | DIČ: CZ6402031592
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700 text-center text-xs text-gray-500">
          © {year} TESO – Petr David. Všechna práva vyhrazena.
        </div>
      </div>
    </footer>
  )
}
