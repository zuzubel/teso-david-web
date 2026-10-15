import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Shovel, Trash2, Truck, Forklift, Leaf, ArrowRight, Phone, CheckCircle } from 'lucide-react'
import Hero from '../../components/Hero/Hero'

const categories = [
  {
    id: 'earthworks',
    icon: <Shovel size={28} />,
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
    icon: <Trash2 size={28} />,
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
    icon: <Truck size={28} />,
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
    icon: <Forklift size={28} />,
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
    icon: <Leaf size={28} />,
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
          <div className="space-y-12">
            {categories.map((cat, index) => (
              <article
                key={cat.title}
                id={cat.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-stretch`}
              >
                {/* Info column */}
                <div className="lg:w-2/5 bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col">
                  <div className="icon-box bg-orange-50 text-accent mb-6">
                    {cat.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 tracking-tight">{cat.title}</h2>
                  <p className="text-gray-500 leading-relaxed mb-8 flex-grow">{cat.description}</p>
                  <Link to="/kontakt#formulare" className="btn-primary self-start inline-flex items-center gap-2">
                    Poptávka zdarma <ArrowRight size={15} />
                  </Link>
                </div>

                {/* Items column */}
                <div className="lg:w-3/5 bg-gray-50 rounded-2xl p-8 flex flex-col">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">Co zahrnujeme</h3>
                  <ul className="space-y-4">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
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
      <section className="bg-accent py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-black text-white mb-4 tracking-tight">Máte zájem o naše služby?</h2>
          <p className="text-orange-100 mb-10 text-lg">Kontaktujte nás pro nezávaznou cenovou nabídku.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+420736121255" className="bg-white text-accent font-bold px-8 py-4 rounded-xl hover:bg-orange-50 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 inline-flex items-center justify-center gap-2">
              <Phone size={18} /> +420 736 121 255
            </a>
            <Link to="/kontakt#formulare" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-accent hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 inline-flex items-center justify-center gap-2">
              Napsat zprávu <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
