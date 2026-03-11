import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero/Hero'
import ServiceCard from '../../components/ServiceCard/ServiceCard'

const services = [
  {
    icon: '🚜',
    title: 'Zemní práce',
    description: 'Výkopy základů, bazénů, jímek a terénní úpravy. Disponujeme i minibagrem pro práce v omezených prostorech.',
    linkTo: '/sluzby',
  },
  {
    icon: '🗑️',
    title: 'Kontejnerová doprava',
    description: 'Přistavení kontejnerů a odvoz suti, odpadu a stavebního materiálu. Rychle a spolehlivě.',
    linkTo: '/sluzby',
  },
  {
    icon: '🚛',
    title: 'Dovoz materiálu',
    description: 'Dovoz písku, štěrku a dalšího stavebního materiálu přímo na stavbu.',
    linkTo: '/sluzby',
  },
  {
    icon: '🦾',
    title: 'Hydraulická ruka',
    description: 'Manipulace s těžkým materiálem, nakládka a vykládka pomocí hydraulické ruky.',
    linkTo: '/sluzby',
  },
  {
    icon: '🌿',
    title: 'Údržba zeleně',
    description: 'Sekání trávy, údržba pozemků a terénní úpravy pro soukromníky i firmy.',
    linkTo: '/sluzby',
  },
  {
    icon: '📞',
    title: 'Individuální přístup',
    description: 'Každou zakázku řešíme na míru. Kontaktujte nás a domluvíme se na nejlepším řešení.',
    linkTo: '/kontakt',
  },
]

const whyUs = [
  { icon: '🏆', title: 'Od roku 1993', desc: 'Přes 30 let zkušeností v oboru zemních prací a dopravy.' },
  { icon: '⚡', title: 'Spolehlivost', desc: 'Termíny dodržujeme a zákazníci se na nás mohou spolehnout.' },
  { icon: '🔧', title: 'Moderní stroje', desc: 'Disponujeme moderním vybavením pro všechny typy zakázek.' },
  { icon: '📍', title: 'Regionální pokrytí', desc: 'Působíme v celém Zlínském kraji a okolí.' },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Zemní práce a kontejnerová doprava | TESO David</title>
        <meta name="description" content="TESO David – zemní práce, kontejnerová doprava a dovoz materiálu ve Zlínském kraji od roku 1993. Spolehlivé služby pro stavební firmy i soukromé zákazníky." />
        <meta property="og:title" content="Zemní práce a kontejnerová doprava | TESO David" />
        <meta property="og:description" content="Spolehlivé zemní práce, kontejnerová doprava a dovoz materiálu ve Zlínském kraji od roku 1993." />
        <meta property="og:url" content="https://tesodavid.cz/" />
        <link rel="canonical" href="https://tesodavid.cz/" />
      </Helmet>

      <Hero
        title="Zemní práce a kontejnerová doprava"
        subtitle="Spolehlivé služby pro stavební firmy i soukromé zákazníky ve Zlínském kraji od roku 1993."
      />

      {/* Services overview */}
      <section className="py-20 bg-gray-50" aria-labelledby="services-heading">
        <div className="container-custom">
          <h2 id="services-heading" className="section-title text-center">Naše služby</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">
            Nabízíme komplexní řešení zemních prací a dopravy pro každého zákazníka.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/sluzby" className="btn-primary text-lg px-8 py-4">
              Zobrazit všechny služby
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20" aria-labelledby="why-heading">
        <div className="container-custom">
          <h2 id="why-heading" className="section-title text-center">Proč si vybrat TESO David?</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">
            Jsme rodinná firma s dlouholetou tradicí a silným zázemím v regionu.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16 bg-gray-50" aria-labelledby="area-heading">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="area-heading" className="section-title">Oblast působení</h2>
            <p className="text-gray-600 leading-relaxed">
              Naše firma sídlí v Lešné u Valašského Meziříčí a primárně sloužíme
              zákazníkům v okolí <strong>Valašského Meziříčí, Rožnova pod Radhoštěm, Vsetína, Zlína</strong> a celého Zlínského kraje.
              V případě větších zakázek jsme schopni operovat i mimo tento region.
            </p>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-accent py-16" aria-label="Výzva k akci">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Potřebujete zemní práce nebo kontejner?
          </h2>
          <p className="text-orange-100 text-lg mb-8">
            Zavolejte nám nebo vyplňte poptávkový formulář – odpovíme obratem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+420736121255" className="bg-white text-accent font-bold px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors text-lg">
              +420 736 121 255
            </a>
            <Link to="/kontakt#formulare" className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors text-lg">
              Nezávazná poptávka
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
