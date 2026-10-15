import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Shovel, Trash2, Truck, Forklift, Leaf, MessageSquare, Trophy, ShieldCheck, Wrench, MapPin, ArrowRight, Phone } from 'lucide-react'
import Hero from '../../components/Hero/Hero'
import ServiceCard from '../../components/ServiceCard/ServiceCard'

const services = [
  {
    icon: <Shovel size={22} />,
    title: 'Zemní práce',
    description: 'Výkopy základů, bazénů, jímek a terénní úpravy. Disponujeme i minibagrem pro práce v omezených prostorech.',
    linkTo: '/sluzby#earthworks',
  },
  {
    icon: <Trash2 size={22} />,
    title: 'Kontejnerová doprava',
    description: 'Přistavení kontejnerů a odvoz suti, odpadu a stavebního materiálu. Rychle a spolehlivě.',
    linkTo: '/sluzby#container-transport',
  },
  {
    icon: <Truck size={22} />,
    title: 'Dovoz materiálu',
    description: 'Dovoz písku, štěrku a dalšího stavebního materiálu přímo na stavbu.',
    linkTo: '/sluzby#material-delivery',
  },
  {
    icon: <Forklift size={22} />,
    title: 'Hydraulická ruka',
    description: 'Manipulace s těžkým materiálem, nakládka a vykládka pomocí hydraulické ruky.',
    linkTo: '/sluzby#hydraulic-arm',
  },
  {
    icon: <Leaf size={22} />,
    title: 'Údržba zeleně',
    description: 'Sekání trávy, údržba pozemků a terénní úpravy pro soukromníky i firmy.',
    linkTo: '/sluzby#green-maintenance',
  },
  {
    icon: <MessageSquare size={22} />,
    title: 'Individuální přístup',
    description: 'Každou zakázku řešíme na míru. Kontaktujte nás a domluvíme se na nejlepším řešení.',
    linkTo: '/kontakt#formulare',
  },
]

const whyUs = [
  { icon: <Trophy size={24} />, title: 'Od roku 1993', desc: 'Přes 30 let zkušeností v oboru zemních prací a dopravy.' },
  { icon: <ShieldCheck size={24} />, title: 'Spolehlivost', desc: 'Termíny dodržujeme a zákazníci se na nás mohou spolehnout.' },
  { icon: <Wrench size={24} />, title: 'Moderní stroje', desc: 'Disponujeme moderním vybavením pro všechny typy zakázek.' },
  { icon: <MapPin size={24} />, title: 'Regionální pokrytí', desc: 'Působíme v celém Zlínském kraji a okolí.' },
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
      <section className="py-24 bg-gray-50" aria-labelledby="services-heading">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 id="services-heading" className="section-title">Naše služby</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Komplexní řešení zemních prací a dopravy pro každého zákazníka.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/sluzby" className="btn-primary text-base px-8 py-3.5 inline-flex items-center gap-2">
              Zobrazit všechny služby <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24" aria-labelledby="why-heading">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 id="why-heading" className="section-title">Proč si vybrat TESO David?</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Rodinná firma s dlouholetou tradicí a silným zázemím v regionu.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-7 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="icon-box bg-orange-50 text-accent mx-auto mb-5">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
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
            <p className="text-gray-500 leading-relaxed">
              Naše firma sídlí v Lešné u Valašského Meziříčí a primárně sloužíme
              zákazníkům v okolí <strong className="text-primary">Valašského Meziříčí, Rožnova pod Radhoštěm, Vsetína, Zlína</strong> a celého Zlínského kraje.
              V případě větších zakázek jsme schopni operovat i mimo tento region.
            </p>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-accent py-20" aria-label="Výzva k akci">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
            Potřebujete zemní práce nebo kontejner?
          </h2>
          <p className="text-orange-100 text-lg mb-10 max-w-xl mx-auto">
            Zavolejte nám nebo vyplňte poptávkový formulář – odpovíme obratem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+420736121255" className="bg-white text-accent font-bold px-8 py-4 rounded-xl hover:bg-orange-50 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 inline-flex items-center justify-center gap-2 text-lg">
              <Phone size={20} /> +420 736 121 255
            </a>
            <Link to="/kontakt#formulare" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-accent hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 inline-flex items-center justify-center gap-2 text-lg">
              Nezávazná poptávka <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
