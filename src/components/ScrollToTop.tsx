import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        // On desktop (lg breakpoint = 1024px), CTA links scroll to the full
        // contact+form grid so both columns are visible from the top.
        // On mobile/tablet the grid stacks, so scroll to the form column
        // directly so "Napište nám" is the first thing visible.
        let id = hash.slice(1)
        if (id === 'formulare' && window.innerWidth >= 1024) {
          id = 'kontakt-sekce'
        }
        const el = document.getElementById(id)
        if (el) {
          const HEADER_HEIGHT = 64 // h-16
          const PADDING = 24
          const top = el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT - PADDING
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }, 0)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}
