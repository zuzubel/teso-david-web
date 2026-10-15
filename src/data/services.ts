import type { ComponentType } from 'react'
import type { IconProps } from '../components/icons/LineIcon'
import ContainerIcon from '../components/icons/ContainerIcon'
import ExcavatorIcon from '../components/icons/ExcavatorIcon'
import TruckIcon from '../components/icons/TruckIcon'

export interface Service {
  /** URL segment: /sluzby/<slug> */
  slug: string
  /** Anchor id on the /sluzby overview page */
  id: string
  icon: ComponentType<IconProps>
  title: string
  /** Short label used in the header navigation */
  navLabel: string
  /** Title and short description for the service card on the home page */
  cardTitle: string
  cardDescription: string
  description: string
  /** <meta name="description"> for the service's own page */
  metaDescription: string
  items: string[]
}

const earthworks: Service = {
  slug: 'zemni-prace',
  id: 'earthworks',
  icon: ExcavatorIcon,
  title: 'Zemní práce',
  navLabel: 'Zemní práce',
  cardTitle: 'Zemní a výkopové práce',
  cardDescription:
    'Výkopy základů, jímek a bazénů, Výkopy pro inženýrské sítě (voda, plyn, elektřina, kanalizace), Hrubé i jemné terénní úpravy',
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
}

const containerTransport: Service = {
  slug: 'kontejnerova-doprava',
  id: 'container-transport',
  icon: ContainerIcon,
  title: 'Kontejnerová doprava',
  navLabel: 'Kontejnery',
  cardTitle: 'Kontejnery',
  cardDescription:
    'Přistavení a pronájem kontejnerů, Odvoz suti, stavebního materiálu a zeminy, Profesionální a ekologická likvidace odpadu',
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
}

const truckTransport: Service = {
  slug: 'nakladni-autodoprava',
  id: 'material-delivery',
  icon: TruckIcon,
  title: 'Nákladní autodoprava',
  navLabel: 'Autodoprava',
  cardTitle: 'Nákladní autodoprava',
  cardDescription:
    'Dovoz sypkých stavebních materiálů, Přeprava stavebního materiálu, Převoz stavební techniky',
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
}

/** Order used on the /sluzby overview page */
export const services: Service[] = [earthworks, containerTransport, truckTransport]

/** Order used in the header navigation and on the home page */
export const featuredServices: Service[] = [containerTransport, truckTransport, earthworks]

export const servicePath = (service: Service) => `/sluzby/${service.slug}`

export const getService = (slug: string) => services.find((s) => s.slug === slug)
