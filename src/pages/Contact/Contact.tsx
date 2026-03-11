import { Helmet } from 'react-helmet-async'
import Hero from '../../components/Hero/Hero'
import ContactForm from '../../components/ContactForm/ContactForm'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Kontakt | TESO David – Lešná u Valašského Meziříčí</title>
        <meta name="description" content="Kontaktujte TESO David – zemní práce a kontejnerová doprava. Telefon: +420 736 121 255, e-mail: kontakt@tesodavid.cz. Sídlíme v Lešné u Valašského Meziříčí." />
        <meta property="og:title" content="Kontakt | TESO David" />
        <meta property="og:description" content="Kontaktujte nás pro nezávaznou poptávku. Telefon: +420 736 121 255" />
        <meta property="og:url" content="https://tesodavid.cz/kontakt" />
        <link rel="canonical" href="https://tesodavid.cz/kontakt" />
      </Helmet>

      <Hero
        title="Kontakt"
        subtitle="Jsme tu pro vás. Zavolejte nebo napište – rádi vám pomůžeme."
        showCta={false}
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-8">Kontaktní údaje</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-2xl flex-shrink-0 mt-1">📞</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Telefon</h3>
                    <a
                      href="tel:+420736121255"
                      className="text-accent font-bold text-xl hover:underline"
                    >
                      +420 736 121 255
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Po–Pá 7:00–17:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl flex-shrink-0 mt-1">✉️</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">E-mail</h3>
                    <a
                      href="mailto:kontakt@tesodavid.cz"
                      className="text-accent font-medium hover:underline"
                    >
                      kontakt@tesodavid.cz
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl flex-shrink-0 mt-1">📍</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Adresa</h3>
                    <address className="not-italic text-gray-600">
                      Lešná 34<br />
                      756 41 Lešná<br />
                      <span className="text-sm text-gray-500">(u Valašského Meziříčí)</span>
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl flex-shrink-0 mt-1">🏢</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Fakturační údaje</h3>
                    <p className="text-gray-600 text-sm">
                      TESO – Petr David<br />
                      IČO: 45173281<br />
                      DIČ: CZ6402031592
                    </p>
                  </div>
                </div>
              </div>

              {/* Service area */}
              <div className="mt-10 bg-gray-50 rounded-2xl p-6">
                <h3 className="font-semibold text-primary mb-3">Oblast působení</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Primárně působíme v okolí <strong>Valašského Meziříčí</strong>, Rožnova pod Radhoštěm, Vsetína, Zlína a v celém <strong>Zlínském kraji</strong>. Pro větší zakázky jsme schopni operovat i ve vzdálenějších lokalitách.
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-8">Napište nám</h2>
              <ContactForm />
            </div>
          </div>

          {/* Map placeholder */}
          <div className="mt-16">
            <h2 className="text-xl font-bold text-primary mb-6">Kde nás najdete</h2>
            <div className="rounded-2xl overflow-hidden border border-gray-200 h-64 bg-gray-100 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-3">🗺️</div>
                <p className="font-medium">Lešná 34, 756 41 Lešná</p>
                <a
                  href="https://maps.google.com/?q=Lešná+34,+756+41+Lešná"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-accent text-sm hover:underline"
                >
                  Zobrazit na Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
