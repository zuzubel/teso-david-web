import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'

interface CtaBannerProps {
  title: string
  subtitle: string
  /** Label of the button linking to the contact form */
  formLinkLabel: string
}

/** Burgundy call-to-action banner with phone and contact form buttons */
export default function CtaBanner({ title, subtitle, formLinkLabel }: CtaBannerProps) {
  return (
    <section className="bg-accent py-20" aria-label="Výzva k akci">
      <div className="container-custom text-center">
        <h2 className="mb-4 text-3xl font-black tracking-tight text-white md:text-4xl">{title}</h2>
        <p className="mx-auto mb-10 max-w-xl text-lg text-accent-100">{subtitle}</p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="tel:+420736121255"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-bold text-accent transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-50 hover:shadow-lg"
          >
            <Phone size={20} /> +420 736 121 255
          </a>
          <Link
            to="/kontakt#formulare"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-accent hover:shadow-lg"
          >
            {formLinkLabel} <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
