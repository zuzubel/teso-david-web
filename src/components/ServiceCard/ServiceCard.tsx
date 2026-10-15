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
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col">
      <div className="icon-box bg-orange-50 text-accent mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed flex-grow">{description}</p>
      {linkTo && (
        <span className="mt-5 inline-flex items-center gap-1.5 text-accent text-sm font-semibold group-hover:gap-3 transition-all duration-200">
          Více informací <ArrowRight size={14} />
        </span>
      )}
    </div>
  )

  if (linkTo) {
    return <Link to={linkTo} className="block h-full">{content}</Link>
  }
  return content
}
