const HEADER_HEIGHT = 64 // sticky header, h-16
const PADDING = 24

/** Smoothly scrolls to an element by id, leaving room for the sticky header */
export function scrollToElement(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT - PADDING
  window.scrollTo({ top, behavior: 'smooth' })
}
