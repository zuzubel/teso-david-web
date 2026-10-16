import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PhoneLink from '../PhoneLink'

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
        compact ? 'py-12 md:py-24' : 'py-24 md:py-40'
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
          <p
            className={`mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl ${
              showCta ? 'mb-10' : ''
            }`}
          >
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
            <PhoneLink
              iconSize={18}
              className="btn-secondary inline-flex items-center gap-2 px-8 py-4 text-lg"
            />
          </div>
        )}
      </div>
    </section>
  )
}
