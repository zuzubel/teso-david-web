import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary text-gray-400 border-t border-white/5">
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1.5 mb-4">
              <span className="text-accent font-black text-xl tracking-tight">TESO</span>
              <span className="text-white/70 font-medium text-sm tracking-widest uppercase">David</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500">
              Zemní práce a kontejnerová doprava<br />ve Zlínském kraji od roku 1993.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+420736121255" className="inline-flex items-center gap-2.5 hover:text-accent transition-colors">
                  <Phone size={14} className="text-accent flex-shrink-0" /> +420 736 121 255
                </a>
              </li>
              <li>
                <a href="mailto:kontakt@tesodavid.cz" className="inline-flex items-center gap-2.5 hover:text-accent transition-colors">
                  <Mail size={14} className="text-accent flex-shrink-0" /> kontakt@tesodavid.cz
                </a>
              </li>
              <li className="inline-flex items-start gap-2.5">
                <MapPin size={14} className="text-accent flex-shrink-0 mt-0.5" />
                <span>Lešná 34, 756 41 Lešná</span>
              </li>
              <li className="pt-1 text-xs text-gray-600">
                IČO: 45173281 | DIČ: CZ6402031592
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 text-center text-xs text-gray-600">
          © {year} TESO – Petr David. Všechna práva vyhrazena.
        </div>
      </div>
    </footer>
  )
}
