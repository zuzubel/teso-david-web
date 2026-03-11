import { Link } from 'react-router-dom'

interface HeroProps {
  title: string
  subtitle: string
  showCta?: boolean
}

export default function Hero({ title, subtitle, showCta = true }: HeroProps) {
  return (
    <section
      className="relative bg-primary text-white py-24 md:py-36 overflow-hidden"
      aria-label="Úvodní banner"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #f97316 0, #f97316 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Orange accent bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-accent" />

      <div className="container-custom relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          {subtitle}
        </p>
        {showCta && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt#formulare" className="btn-primary text-lg px-8 py-4">
              Nezávazná poptávka
            </Link>
            <a href="tel:+420736121255" className="btn-secondary text-lg px-8 py-4">
              +420 736 121 255
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
