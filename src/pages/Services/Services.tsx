import { Helmet } from 'react-helmet-async'
import Hero from '../../components/Hero/Hero'
import ServiceBlock from '../../components/ServiceBlock/ServiceBlock'
import CtaBanner from '../../components/CtaBanner/CtaBanner'
import { services } from '../../data/services'

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Naše služby – zemní práce, kontejnery, doprava | TESO David</title>
        <meta
          name="description"
          content="Kompletní přehled služeb TESO David: zemní práce, kontejnerová doprava, dovoz materiálu, hydraulická ruka a údržba zeleně ve Zlínském kraji."
        />
        <meta property="og:title" content="Naše služby | TESO David" />
        <meta
          property="og:description"
          content="Kompletní přehled služeb: zemní práce, kontejnerová doprava, dovoz materiálu a údržba zeleně."
        />
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
            {services.map((service, index) => (
              <ServiceBlock
                key={service.slug}
                id={service.id}
                service={service}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Máte zájem o naše služby?"
        subtitle="Kontaktujte nás pro nezávaznou cenovou nabídku."
        formLinkLabel="Napsat zprávu"
      />
    </>
  )
}
