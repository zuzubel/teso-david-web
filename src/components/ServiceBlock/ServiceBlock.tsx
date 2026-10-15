import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import type { Service } from '../../data/services'

interface ServiceBlockProps {
  service: Service
  /** Puts the items column on the left (used for alternating rows on /sluzby) */
  reverse?: boolean
  id?: string
}

export default function ServiceBlock({ service, reverse = false, id }: ServiceBlockProps) {
  const Icon = service.icon

  return (
    <article
      id={id}
      className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch gap-8`}
    >
      {/* Info column */}
      <div className="flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm lg:w-2/5">
        <div className="mb-6 flex h-12 items-center text-accent">
          <Icon size={48} />
        </div>
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-primary md:text-3xl">
          {service.title}
        </h2>
        <p className="mb-8 flex-grow leading-relaxed text-gray-500">{service.description}</p>
        <Link
          to="/kontakt#formulare"
          className="btn-primary inline-flex items-center gap-2 self-start"
        >
          Poptávka zdarma <ArrowRight size={15} />
        </Link>
      </div>

      {/* Items column */}
      <div className="flex flex-col rounded-2xl bg-gray-50 p-8 lg:w-3/5">
        <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-gray-400">
          Co zahrnujeme
        </h3>
        <ul className="space-y-4">
          {service.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-accent" />
              <span className="text-sm leading-relaxed text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
