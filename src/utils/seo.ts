const SITE_NAME = 'TESO David'
const SITE_URL = 'https://tesodavid.cz'
const DEFAULT_IMAGE = `${SITE_URL}/images/og-image.jpg`

export interface SeoMeta {
  title: string
  description: string
  canonicalPath: string
  ogImage?: string
}

export function buildSeoProps(meta: SeoMeta) {
  const fullTitle = `${meta.title} | ${SITE_NAME}`
  const canonical = `${SITE_URL}${meta.canonicalPath}`
  const image = meta.ogImage ?? DEFAULT_IMAGE

  return {
    title: fullTitle,
    description: meta.description,
    canonical,
    ogTitle: fullTitle,
    ogDescription: meta.description,
    ogUrl: canonical,
    ogImage: image,
  }
}
