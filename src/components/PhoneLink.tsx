import { Phone } from 'lucide-react'
import { company, phoneHref } from '../data/company'

interface PhoneLinkProps {
  className?: string
  iconSize?: number
}

/** Clickable company phone number with a phone icon; styling comes from the caller */
export default function PhoneLink({ className, iconSize = 16 }: PhoneLinkProps) {
  return (
    <a href={phoneHref} className={className}>
      <Phone size={iconSize} /> {company.phoneDisplay}
    </a>
  )
}
