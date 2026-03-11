import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero/Hero'

const categories = [
  {
    id: 'earthworks',
    icon: '🚜',
    title: 'Zemní práce',
    description: 'Profesionální zemní práce s moderní technikou. Disponujeme bagry různých velikostí, včetně minibagrů pro práci v omezených prostorech.',
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
    id: 'container-transport',
    icon: '🗑️',
    title: 'Kontejnerová doprava',
    description: 'Zajišťujeme přistavení kontejnerů a odvoz odpadu, suti a dalšího materiálu. Flexibilní termíny a rychlá reakce.',
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
    id: 'material-delivery',
    icon: '🚛',
    title: 'Dovoz materiálu',
    description: 'Doručíme stavební materiál přímo tam, kde ho potřebujete. Pracujeme s lokálními dodavateli pro zajištění nejlepší ceny.',
    items: [
      'Dovoz písku – říčního, praného, plaveného',
      'Dovoz štěrku a drceného kameniva',
      'Dovoz zeminy a ornice',
      'Dovoz betonových a stavebních prefabrikátů',
      'Dovoz zemědělských a zahradnických materiálů',
      'Speciální přeprava nadrozměrných materiálů',
    ],
  },
  {
    id: 'hydraulic-arm',
    icon: '🦾',
    title: 'Práce hydraulickou rukou',
    description: 'Hydraulická ruka umožňuje manipulaci s těžkým a objemným materiálem bez nutnosti těžké nakladačové techniky.',
    items: [
      'Nakládka a vykládka těžkého materiálu',
      'Manipulace s betonovými prefabrikáty',
      'Přesun stavebního materiálu na staveništi',
      'Nakládka kontejnerů a odpadů',
      'Práce v místech s omezeným přístupem',
      'Spolupráce se stavebními firmami při montáži',
    ],
  },
  {
    id: 'green-maintenance',
    icon: '🌿',
    title: 'Údržba zeleně a pozemků',
    description: 'Staráme se o pozemky soukromníků, firem i obcí. Od pravidelného sekání trávy po komplexní terénní úpravy.',
    items: [
      'Sekání trávy a kosení ploch',
      'Údržba a sečení svahů a těžko přístupných míst',
      'Kácení a odstraňování náletové vegetace',
      'Úklid a odstraňování biologického odpadu',
      'Příprava pozemků pro výstavbu',
      'Terénní úpravy zahrad a okolí domů',
    ],
  },
]

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Naše služby – zemní práce, kontejnery, doprava | TESO David</title>
        <meta name="description" content="Kompletní přehled služeb TESO David: zemní práce, kontejnerová doprava, dovoz materiálu, hydraulická ruka a údržba zeleně ve Zlínském kraji." />
        <meta property="og:title" content="Naše služby | TESO David" />
        <meta property="og:description" content="Kompletní přehled služeb: zemní práce, kontejnerová doprava, dovoz materiálu a údržba zeleně." />
        <meta property="og:url" content="https://tesodavid.cz/sluzby" />
        <link rel="canonical" href="https://tesodavid.cz/sluzby" />
      </Helmet>

      <Hero
        title="Naše služby"
        subtitle="Komplexní zemní práce, doprava a údržba pro stavební firmy i soukromé zákazníky."
        showCta={false}
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="space-y-16">
            {categories.map((cat, index) => (
              <article
                key={cat.title}
                id={cat.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-start`}
              >
                <div className="lg:w-2/5">
                  <div className="text-6xl mb-4">{cat.icon}</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">{cat.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{cat.description}</p>
                  <Link to="/kontakt#formulare" className="btn-primary">
                    Poptávka zdarma
                  </Link>
                </div>
                <div className="lg:w-3/5 bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-lg font-semibold text-primary mb-4">Co zahrnujeme:</h3>
                  <ul className="space-y-3">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-accent font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-black text-white mb-4">Máte zájem o naše služby?</h2>
          <p className="text-orange-100 mb-8">Kontaktujte nás pro nezávaznou cenovou nabídku.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+420736121255" className="bg-white text-accent font-bold px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors">
              +420 736 121 255
            </a>
            <Link to="/kontakt#formulare" className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
              Napsat zprávu
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
