import type { ReactNode } from 'react'
import { Phone, Mail, MapPin, User, FileText } from 'lucide-react'
import FacebookIcon from '../icons/FacebookIcon'

function FooterItem({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      {/* h-5 matches leading-5, so the icon is centred on the first line of text */}
      <span className="flex h-5 flex-shrink-0 items-center text-accent">{icon}</span>
      <div className="leading-5">{children}</div>
    </div>
  )
}

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
      {children}
    </h3>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t-2 border-accent bg-sage text-sm text-gray-700">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-black tracking-tight text-accent">TESO</span>
              <span className="text-xl font-bold text-primary">David</span>
            </div>
          </div>

          {/* Company details */}
          <div>
            <FooterHeading>Provozovatel</FooterHeading>
            <div className="space-y-2.5">
              <FooterItem icon={<User size={15} />}>
                <span className="font-semibold text-primary">Petr David</span>
              </FooterItem>
              <FooterItem icon={<MapPin size={15} />}>
                Lešná 34
                <br />
                756 41 Lešná
              </FooterItem>
              <FooterItem icon={<FileText size={15} />}>
                <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1">
                  <dt className="text-gray-700">IČO</dt>
                  <dd className="text-primary">45173281</dd>
                  <dt className="text-gray-700">DIČ</dt>
                  <dd className="text-primary">CZ6402031592</dd>
                </dl>
              </FooterItem>
            </div>
          </div>

          {/* Contact */}
          <div>
            <FooterHeading>Kontakt</FooterHeading>
            <div className="space-y-2.5">
              <a href="tel:+420736121255" className="block transition-colors hover:text-accent">
                <FooterItem icon={<Phone size={15} />}>+420 736 121 255</FooterItem>
              </a>
              <a
                href="mailto:kontakt@tesodavid.cz"
                className="block transition-colors hover:text-accent"
              >
                <FooterItem icon={<Mail size={15} />}>kontakt@tesodavid.cz</FooterItem>
              </a>
              {/* TODO: change to <a href="..."> once the Facebook page URL is known */}
              <FooterItem icon={<FacebookIcon size={15} />}>TESO – Petr David</FooterItem>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-sage-200 pt-4 text-xs text-gray-700">
          © {year} TESO – Petr David. Všechna práva vyhrazena.
        </div>
      </div>
    </footer>
  )
}
