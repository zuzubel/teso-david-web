import { Helmet } from 'react-helmet-async'
import CtaBanner from '../../components/CtaBanner/CtaBanner'
import Hero from '../../components/Hero/Hero'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import { featuredServices, servicePath } from '../../data/services'

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
        compact
        title="Zemní práce a kontejnerová doprava"
        subtitle={
          <>
            Již více než 30 let se zaměřujeme na kontejnerovou dopravu pro odvoz suti, odpadu a
            zeminy. Zajišťujeme rovněž spolehlivou nákladní autodopravu a kompletní zemní práce.
            Působíme především v okolí{' '}
            <strong className="font-semibold text-primary">Valašského Meziříčí</strong>,{' '}
            <strong className="font-semibold text-primary">Nového Jičína</strong>,{' '}
            <strong className="font-semibold text-primary">Rožnova pod Radhoštěm</strong> a{' '}
            <strong className="font-semibold text-primary">Vsetína</strong>.
          </>
        }
      />

      {/* Services overview */}
      <section className="bg-gray-100 py-24" aria-labelledby="services-heading">
        <div className="container-custom">
          <div className="mb-14 text-center">
            <h2 id="services-heading" className="section-title">
              Naše služby
            </h2>
            <p className="section-subtitle mx-auto max-w-xl">S čím Vám můžeme pomoci?</p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.slug}
                icon={<service.icon size={48} />}
                title={service.cardTitle}
                description={service.cardDescription}
                linkTo={servicePath(service)}
              />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Potřebujete kontejner nebo zemní práce?"
        subtitle="Zavolejte nám nebo vyplňte poptávkový formulář – odpovíme obratem."
        formLinkLabel="Nezávazná poptávka"
      />

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
