import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'

export default function ServicesCta() {
  return (
    <section className="bg-accent py-20">
      <div className="container-custom text-center">
        <h2 className="mb-4 text-3xl font-black tracking-tight text-white">
          Máte zájem o naše služby?
        </h2>
        <p className="mb-10 text-lg text-orange-100">
          Kontaktujte nás pro nezávaznou cenovou nabídku.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="tel:+420736121255"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-accent transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-50 hover:shadow-lg"
          >
            <Phone size={18} /> +420 736 121 255
          </a>
          <Link
            to="/kontakt#formulare"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white px-8 py-4 font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-accent hover:shadow-lg"
          >
            Napsat zprávu <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
