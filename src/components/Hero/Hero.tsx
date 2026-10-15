import { Link } from 'react-router-dom'
import { Phone, ArrowRight } from 'lucide-react'

interface HeroProps {
  title: string
  subtitle: string
  showCta?: boolean
}

export default function Hero({ title, subtitle, showCta = true }: HeroProps) {
  return (
    <section
      className="relative bg-primary text-white py-24 md:py-40 overflow-hidden"
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
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-primary to-transparent" />

      {/* Orange accent bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-accent" />

      <div className="container-custom relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-accent text-sm font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Zlínský kraj · od roku 1993
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tighter">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {subtitle}
        </p>

        {showCta && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt#formulare" className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2">
              Nezávazná poptávka <ArrowRight size={18} />
            </Link>
            <a href="tel:+420736121255" className="btn-secondary text-lg px-8 py-4 inline-flex items-center gap-2">
              <Phone size={18} /> +420 736 121 255
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
