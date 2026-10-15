import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Shovel, Trash2, Truck, ArrowRight, Phone } from 'lucide-react'
import Hero from '../../components/Hero/Hero'
import ServiceCard from '../../components/ServiceCard/ServiceCard'

const services = [
  {
    icon: <Trash2 size={22} />,
    title: 'Kontejnery',
    description:
      'Přistavení a pronájem kontejnerů, Odvoz suti, stavebního materiálu a zeminy, Profesionální a ekologická likvidace odpadu',
    linkTo: '/sluzby/kontejnerova-doprava',
  },
  {
    icon: <Truck size={22} />,
    title: 'Nákladní autodoprava',
    description:
      'Dovoz sypkých stavebních materiálů, Přeprava stavebního materiálu, Převoz stavební techniky',
    linkTo: '/sluzby/nakladni-autodoprava',
  },
  {
    icon: <Shovel size={22} />,
    title: 'Zemní a výkopové práce',
    description:
      ' Výkopy základů, jímek a bazénů, Výkopy pro inženýrské sítě (voda, plyn, elektřina, kanalizace), Hrubé i jemné terénní úpravy',
    linkTo: '/sluzby/zemni-prace',
  },
]

// const whyUs = [
//   {
//     icon: <Trophy size={24} />,
//     title: 'Od roku 1993',
//     desc: 'Přes 30 let zkušeností v oboru zemních prací a dopravy.',
//   },
//   {
//     icon: <ShieldCheck size={24} />,
//     title: 'Spolehlivost',
//     desc: 'Termíny dodržujeme a zákazníci se na nás mohou spolehnout.',
//   },
//   {
//     icon: <Wrench size={24} />,
//     title: 'Moderní stroje',
//     desc: 'Disponujeme moderním vybavením pro všechny typy zakázek.',
//   },
//   {
//     icon: <MapPin size={24} />,
//     title: 'Regionální pokrytí',
//     desc: 'Působíme v celém Zlínském kraji a okolí.',
//   },
// ]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Zemní práce a kontejnerová doprava | TESO David</title>
        <meta
          name="description"
          content="TESO David – zemní práce, kontejnerová doprava a dovoz materiálu ve Zlínském kraji od roku 1993. Spolehlivé služby pro stavební firmy i soukromé zákazníky."
        />
        <meta property="og:title" content="Zemní práce a kontejnerová doprava | TESO David" />
        <meta
          property="og:description"
          content="Spolehlivé zemní práce, kontejnerová doprava a dovoz materiálu ve Zlínském kraji od roku 1993."
        />
        <meta property="og:url" content="https://tesodavid.cz/" />
        <link rel="canonical" href="https://tesodavid.cz/" />
      </Helmet>

      <Hero
        title="Zemní práce a kontejnerová doprava"
        subtitle={
          <>
            Již více než 30 let se zaměřujeme na kontejnerovou dopravu pro odvoz suti, odpadu a
            zeminy. Zajišťujeme rovněž spolehlivou nákladní autodopravu a kompletní zemní práce.
            Působíme především v okolí{' '}
            <strong className="font-semibold text-white">Valašského Meziříčí</strong>,{' '}
            <strong className="font-semibold text-white">Nového Jičína</strong>,{' '}
            <strong className="font-semibold text-white">Rožnova pod Radhoštěm</strong> a{' '}
            <strong className="font-semibold text-white">Vsetína</strong>.
          </>
        }
      />

      {/* Services overview */}
      <section className="bg-gray-50 py-24" aria-labelledby="services-heading">
        <div className="container-custom">
          <div className="mb-14 text-center">
            <h2 id="services-heading" className="section-title">
              Naše služby
            </h2>
            <p className="section-subtitle mx-auto max-w-xl">S čím Vám můžeme pomoci?</p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Why us
      <section className="py-24" aria-labelledby="why-heading">
        <div className="container-custom">
          <div className="mb-14 text-center">
            <h2 id="why-heading" className="section-title">
              Proč si vybrat TESO David?
            </h2>
            <p className="section-subtitle mx-auto max-w-xl">
              Rodinná firma s dlouholetou tradicí a silným zázemím v regionu.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-white p-7 text-center shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <div className="icon-box mx-auto mb-5 bg-orange-50 text-accent">{item.icon}</div>
                <h3 className="mb-2 text-base font-bold text-primary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA banner */}
      <section className="bg-accent py-20" aria-label="Výzva k akci">
        <div className="container-custom text-center">
          <h2 className="mb-4 text-3xl font-black tracking-tight text-white md:text-4xl">
            Potřebujete kontejner nebo zemní práce?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-orange-100">
            Zavolejte nám nebo vyplňte poptávkový formulář – odpovíme obratem.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:+420736121255"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-bold text-accent transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-50 hover:shadow-lg"
            >
              <Phone size={20} /> +420 736 121 255
            </a>
            <Link
              to="/kontakt#formulare"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-accent hover:shadow-lg"
            >
              Nezávazná poptávka <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="bg-gray-50 py-16" aria-labelledby="area-heading">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="area-heading" className="section-title">
              Oblast působení
            </h2>
            <p className="leading-relaxed text-gray-500">
              Naše firma sídlí v Lešné u Valašského Meziříčí a primárně sloužíme zákazníkům v okolí{' '}
              <strong className="text-primary">
                Valašského Meziříčí, Rožnova pod Radhoštěm, Vsetína, Zlína
              </strong>{' '}
              a celého Zlínského kraje. V případě větších zakázek jsme schopni operovat i mimo tento
              region.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
