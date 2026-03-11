import { Link } from 'react-router-dom'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  linkTo?: string
}

export default function ServiceCard({ icon, title, description, linkTo }: ServiceCardProps) {
  const content = (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-accent transition-all duration-200 group h-full">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      {linkTo && (
        <span className="mt-4 inline-block text-accent text-sm font-medium">
          Více informací →
        </span>
      )}
    </div>
  )

  if (linkTo) {
    return <Link to={linkTo} className="block h-full">{content}</Link>
  }
  return content
}
