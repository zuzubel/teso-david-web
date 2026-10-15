import { Shovel, Trash2, Truck, type LucideIcon } from 'lucide-react'

export interface Service {
  /** URL segment: /sluzby/<slug> */
  slug: string
  /** Anchor id on the /sluzby overview page */
  id: string
  icon: LucideIcon
  title: string
  /** Short label used in the header navigation */
  navLabel: string
  description: string
  /** <meta name="description"> for the service's own page */
  metaDescription: string
  items: string[]
}

export const services: Service[] = [
  {
    slug: 'zemni-prace',
    id: 'earthworks',
    icon: Shovel,
    title: 'Zemní práce',
    navLabel: 'Zemní práce',
    description:
      'Profesionální zemní práce s moderní technikou. Disponujeme bagry různých velikostí, včetně minibagrů pro práci v omezených prostorech.',
    metaDescription:
      'Zemní a výkopové práce ve Zlínském kraji: výkopy základů, bazénů a jímek, inženýrské sítě, terénní úpravy a práce s minibagrem.',
    items: [
      'Výkopy základů rodinných domů a průmyslových objektů',
      'Výkopy bazénů, jímek a studní',
      'Výkopy pro inženýrské sítě (voda, kanalizace, plyn)',
      'Terénní úpravy a srovnání pozemků',
      'Práce s minibagrem – přístup do úzkých prostorů',
      'Přemístění zeminy a výkopového materiálu',
    ],
  },
  {
    slug: 'kontejnerova-doprava',
    id: 'container-transport',
    icon: Trash2,
    title: 'Kontejnerová doprava',
    navLabel: 'Kontejnery',
    description:
      'Zajišťujeme přistavení kontejnerů a odvoz odpadu, suti a dalšího materiálu. Flexibilní termíny a rychlá reakce.',
    metaDescription:
      'Přistavení kontejnerů a odvoz suti, zeminy a odpadu ve Zlínském kraji. Jednorázová i pravidelná obsluha, ekologická likvidace.',
    items: [
      'Přistavení kontejnerů různých velikostí',
      'Odvoz stavební suti a demoličního odpadu',
      'Odvoz zeminy a výkopového materiálu',
      'Odvoz komunálního a smíšeného odpadu',
      'Pravidelná i jednorázová obsluha kontejnerů',
      'Ekologická likvidace odpadu v souladu s předpisy',
    ],
  },
  {
    slug: 'nakladni-autodoprava',
    id: 'material-delivery',
    icon: Truck,
    title: 'Nákladní autodoprava',
    navLabel: 'Autodoprava',
    // TODO: placeholder text – replace with the real description
    description:
      'Fusce consectetur luctus est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sed ultrices ipsum. Donec malesuada nisl arcu. Donec.',
    metaDescription:
      'Nákladní autodoprava ve Zlínském kraji: dovoz sypkých stavebních materiálů, přeprava stavebního materiálu a převoz stavební techniky.',
    items: [
      'Dovoz sypkých stavebních materiálů',
      'Přeprava stavebního materiálu',
      'Převoz stavební techniky',
    ],
  },
]

export const servicePath = (service: Service) => `/sluzby/${service.slug}`

export const getService = (slug: string) => services.find((s) => s.slug === slug)
