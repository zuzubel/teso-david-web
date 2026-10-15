import { Helmet } from 'react-helmet-async'
import { Phone, Mail, MapPin, Building2, Map } from 'lucide-react'
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
        compact
      />

      <section id="kontakt-sekce" className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-8 tracking-tight">Kontaktní údaje</h2>

              <div className="space-y-5">
                <a
                  href="tel:+420736121255"
                  className="flex items-center gap-4 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-accent hover:shadow-md transition-all duration-200 group"
                >
                  <div className="icon-box bg-orange-50 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-200">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">Telefon</p>
                    <p className="text-accent font-bold text-lg">+420 736 121 255</p>
                    <p className="text-gray-400 text-xs">Po–Pá 7:00–17:00</p>
                  </div>
                </a>

                <a
                  href="mailto:kontakt@tesodavid.cz"
                  className="flex items-center gap-4 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-accent hover:shadow-md transition-all duration-200 group"
                >
                  <div className="icon-box bg-orange-50 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-200">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">E-mail</p>
                    <p className="text-primary font-medium">kontakt@tesodavid.cz</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm">
                  <div className="icon-box bg-orange-50 text-accent">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">Adresa</p>
                    <address className="not-italic text-primary font-medium text-sm">
                      Lešná 34, 756 41 Lešná
                    </address>
                    <p className="text-gray-400 text-xs mt-0.5">u Valašského Meziříčí</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm">
                  <div className="icon-box bg-orange-50 text-accent">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">Fakturační údaje</p>
                    <p className="text-primary font-medium text-sm">TESO – Petr David</p>
                    <p className="text-gray-500 text-xs mt-0.5">IČO: 45173281 · DIČ: CZ6402031592</p>
                  </div>
                </div>
              </div>

              {/* Service area */}
              <div className="mt-6 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-semibold text-primary mb-2 text-sm">Oblast působení</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Primárně působíme v okolí <strong className="text-primary">Valašského Meziříčí</strong>, Rožnova pod Radhoštěm, Vsetína, Zlína a v celém <strong className="text-primary">Zlínském kraji</strong>. Pro větší zakázky jsme schopni operovat i ve vzdálenějších lokalitách.
                </p>
              </div>
            </div>

            {/* Form */}
            <div id="formulare">
              <h2 className="text-2xl font-bold text-primary mb-8 tracking-tight">Napište nám</h2>
              <ContactForm />
            </div>
          </div>

          {/* Map placeholder */}
          <div className="mt-16">
            <h2 className="text-xl font-bold text-primary mb-6 tracking-tight">Kde nás najdete</h2>
            <div className="rounded-2xl overflow-hidden border border-gray-100 h-64 bg-gray-50 flex items-center justify-center shadow-sm">
              <div className="text-center text-gray-400">
                <div className="icon-box bg-white text-accent mx-auto mb-4 shadow-sm">
                  <Map size={22} />
                </div>
                <p className="font-medium text-primary text-sm">Lešná 34, 756 41 Lešná</p>
                <a
                  href="https://maps.google.com/?q=Lešná+34,+756+41+Lešná"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-accent text-sm hover:underline font-medium"
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
