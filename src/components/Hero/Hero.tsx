import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Phone, ArrowRight } from 'lucide-react'

interface HeroProps {
  title: string
  subtitle?: ReactNode
  showCta?: boolean
  /** Smaller banner with less vertical padding (e.g. service detail pages) */
  compact?: boolean
}

export default function Hero({ title, subtitle, showCta = true, compact = false }: HeroProps) {
  return (
    <section
      className={`border-b border-gray-100 bg-white text-primary ${
        compact ? 'py-16 md:py-24' : 'py-24 md:py-40'
      }`}
      aria-label="Úvodní banner"
    >
      <div className="container-custom text-center">
        <h1
          className={`text-4xl font-black leading-tight tracking-tighter md:text-5xl lg:text-6xl ${
            subtitle || showCta ? 'mb-6' : ''
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
            {subtitle}
          </p>
        )}

        {showCta && (
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/kontakt#formulare"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg"
            >
              Nezávazná poptávka <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+420736121255"
              className="btn-secondary inline-flex items-center gap-2 px-8 py-4 text-lg"
            >
              <Phone size={18} /> +420 736 121 255
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
