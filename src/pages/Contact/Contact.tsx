import { Helmet } from 'react-helmet-async'
import { Phone, Mail, MapPin, Building2 } from 'lucide-react'
import Hero from '../../components/Hero/Hero'
import ContactForm from '../../components/ContactForm/ContactForm'
import {
  company,
  emailHref,
  fullAddress,
  googleMapsEmbedUrl,
  googleMapsUrl,
  phoneHref,
} from '../../data/company'
import { scrollToElement } from '../../utils/scroll'

const MAP_ID = 'mapa'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Kontakt | TESO David – Lešná u Valašského Meziříčí</title>
        <meta
          name="description"
          content={`Kontaktujte TESO David – zemní práce a kontejnerová doprava. Telefon: ${company.phoneDisplay}, e-mail: ${company.email}. Sídlíme v Lešné u Valašského Meziříčí.`}
        />
        <meta property="og:title" content="Kontakt | TESO David" />
        <meta
          property="og:description"
          content={`Kontaktujte nás pro nezávaznou poptávku. Telefon: ${company.phoneDisplay}`}
        />
        <meta property="og:url" content="https://tesodavid.cz/kontakt" />
        <link rel="canonical" href="https://tesodavid.cz/kontakt" />
      </Helmet>

      <Hero
        title="Kontakt"
        subtitle="Jsme tu pro vás. Zavolejte nebo napište – rádi vám pomůžeme."
        showCta={false}
        compact
      />

      <section id="kontakt-sekce" className="py-12 lg:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
            {/* Contact info */}
            <div>
              <h2 className="mb-8 text-2xl font-bold tracking-tight text-primary">
                Kontaktní údaje
              </h2>

              <div className="space-y-5">
                <a
                  href={phoneHref}
                  className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-200 hover:border-accent hover:shadow-md"
                >
                  <div className="icon-box bg-accent-50 text-accent transition-all duration-200 group-hover:bg-accent group-hover:text-white">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-medium uppercase tracking-wider text-gray-400">
                      Telefon
                    </p>
                    <p className="text-lg font-bold text-accent">{company.phoneDisplay}</p>
                    <p className="text-xs text-gray-400">{company.openingHours.display}</p>
                  </div>
                </a>

                <a
                  href={emailHref}
                  className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-200 hover:border-accent hover:shadow-md"
                >
                  <div className="icon-box bg-accent-50 text-accent transition-all duration-200 group-hover:bg-accent group-hover:text-white">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-medium uppercase tracking-wider text-gray-400">
                      E-mail
                    </p>
                    <p className="font-medium text-primary">{company.email}</p>
                  </div>
                </a>

                <a
                  href={`#${MAP_ID}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToElement(MAP_ID)
                  }}
                  className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-200 hover:border-accent hover:shadow-md"
                >
                  <div className="icon-box bg-accent-50 text-accent transition-all duration-200 group-hover:bg-accent group-hover:text-white">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-medium uppercase tracking-wider text-gray-400">
                      Adresa
                    </p>
                    <address className="text-sm font-medium not-italic text-primary">
                      {fullAddress}
                    </address>
                    <p className="mt-0.5 text-xs text-gray-400">
                      {company.address.note} · zobrazit na mapě
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <div className="icon-box bg-accent-50 text-accent">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-medium uppercase tracking-wider text-gray-400">
                      Fakturační údaje
                    </p>
                    <p className="text-sm font-medium text-primary">{company.name}</p>
                    <p className="mt-0.5 text-xs text-gray-500">
                      IČO: {company.ico} · DIČ: {company.dic}
                    </p>
                  </div>
                </div>
              </div>

              {/* Service area */}
              <div className="mt-6 rounded-2xl border border-gray-100 bg-gray-50 p-6">
                <h3 className="mb-2 text-sm font-semibold text-primary">Oblast působení</h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  Primárně působíme v okolí{' '}
                  <strong className="text-primary">Valašského Meziříčí</strong>, Rožnova pod
                  Radhoštěm, Vsetína, Zlína a v celém{' '}
                  <strong className="text-primary">Zlínském kraji</strong>. Pro větší zakázky jsme
                  schopni operovat i ve vzdálenějších lokalitách.
                </p>
              </div>
            </div>

            {/* Form */}
            {/* Form first on phone/tablet (stacked layout), right column on desktop */}
            <div id="formulare" className="order-first lg:order-none">
              <h2 className="mb-8 text-2xl font-bold tracking-tight text-primary">Napište nám</h2>
              <ContactForm />
            </div>
          </div>

          {/* Map */}
          <div id={MAP_ID} className="mt-16">
            <h2 className="mb-6 text-xl font-bold tracking-tight text-primary">Kde nás najdete</h2>
            <div className="h-72 overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-sm md:h-96">
              <iframe
                src={googleMapsEmbedUrl}
                title={`Mapa – ${fullAddress}`}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm">
              <span className="font-medium text-primary">{fullAddress}</span>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent hover:underline"
              >
                Otevřít v Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
