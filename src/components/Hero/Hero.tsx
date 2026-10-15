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
      className={`relative overflow-hidden bg-primary text-white ${
        compact ? 'py-16 md:py-24' : 'py-24 md:py-40'
      }`}
      aria-label="Úvodní banner"
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(circle, #f97316 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-primary to-transparent" />

      {/* Orange accent bar */}
      <div className="absolute left-0 top-0 h-1 w-full bg-accent" />

      <div className="container-custom relative z-10 text-center">
        <h1
          className={`text-4xl font-black leading-tight tracking-tighter md:text-5xl lg:text-6xl ${
            subtitle || showCta ? 'mb-6' : ''
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
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
