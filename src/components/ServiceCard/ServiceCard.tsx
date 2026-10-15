import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  linkTo?: string
}

export default function ServiceCard({ icon, title, description, linkTo }: ServiceCardProps) {
  const content = (
    <div className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-5 flex h-12 items-center text-accent transition-colors duration-300 group-hover:text-accent-700">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-bold text-primary transition-colors group-hover:text-accent">
        {title}
      </h3>
      <p className="flex-grow text-sm leading-relaxed text-gray-500">{description}</p>
      {linkTo && (
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all duration-200 group-hover:gap-3">
          Více informací <ArrowRight size={14} />
        </span>
      )}
    </div>
  )

  if (linkTo) {
    return (
      <Link to={linkTo} className="block h-full">
        {content}
      </Link>
    )
  }
  return content
}
