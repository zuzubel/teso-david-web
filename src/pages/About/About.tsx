import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero/Hero'

const milestones = [
  { year: '1993', text: 'Petr David zakládá firmu TESO a začíná poskytovat zemní práce v regionu Valašskomeziříčska.' },
  { year: '2000s', text: 'Rozšíření vozového parku a rozšíření nabídky o kontejnerovou dopravu a dovoz materiálu.' },
  { year: '2010s', text: 'Modernizace techniky, pořízení nových bagrů a nákladních vozidel. Rozšíření spolupráce s obcemi a stavebními firmami.' },
  { year: 'Dnes', text: 'Firma s více než 30 lety zkušeností, moderním vybavením a stovkami spokojených zákazníků v celém Zlínském kraji.' },
]

const equipment = [
  { icon: '🚜', name: 'Pásový bagr', desc: 'Střední a velké zemní práce' },
  { icon: '🚜', name: 'Minibagr', desc: 'Práce v omezených prostorech' },
  { icon: '🚛', name: 'Nákladní automobil s hydraulickou rukou', desc: 'Nakládka, vykládka, manipulace s materiálem' },
  { icon: '🚚', name: 'Kontejnerový vůz', desc: 'Přistavení a odvoz kontejnerů' },
  { icon: '🚛', name: 'Sklápěč', desc: 'Dovoz sypkých materiálů' },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>O nás – TESO David od roku 1993</title>
        <meta name="description" content="Firma TESO David působí od roku 1993. Petr David s týmem poskytuje zemní práce a kontejnerovou dopravu ve Zlínském kraji s moderní technikou a osobním přístupem." />
        <meta property="og:title" content="O nás – TESO David od roku 1993" />
        <meta property="og:description" content="Více než 30 let zkušeností v zemních pracích a kontejnerové dopravě ve Zlínském kraji." />
        <meta property="og:url" content="https://tesodavid.cz/o-nas" />
        <link rel="canonical" href="https://tesodavid.cz/o-nas" />
      </Helmet>

      <Hero
        title="O nás"
        subtitle="Rodinná firma s více než 30 lety tradice v zemních pracích a dopravě."
        showCta={false}
      />

      {/* Story */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="section-title">Náš příběh</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Firma <strong>TESO – Petr David</strong> vznikla v roce 1993 s jasnou vizí – poskytovat kvalitní a spolehlivé zemní práce a dopravu zákazníkům v regionu Valašskomeziříčska.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Za více než tři dekády jsme vybudovali pověst spolehlivého partnera pro stavební firmy, obce i soukromé zákazníky. Naše práce je vidět na stovkách staveb, zahrad a upravených pozemků po celém Zlínském kraji.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Rodinný přístup, poctivá práce a moderní technika – to jsou hodnoty, na kterých stavíme každý den.
                </p>
              </div>
              <div className="bg-accent/10 rounded-2xl p-8 border-l-4 border-accent">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: '1993', label: 'Rok vzniku' },
                    { value: '30+', label: 'Let zkušeností' },
                    { value: '100s', label: 'Spokojených zákazníků' },
                    { value: '5', label: 'Kategorií služeb' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-3xl font-black text-accent">{stat.value}</div>
                      <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline */}
            <h2 className="section-title text-center mb-10">Historie firmy</h2>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 md:-translate-x-0.5" />
              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <div
                    key={m.year}
                    className={`relative flex flex-col md:flex-row gap-4 md:gap-8 items-start ${
                      i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className={`md:w-1/2 pl-12 md:pl-0 ${i % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                      <div className="inline-block bg-accent text-white font-bold px-4 py-1 rounded-full text-sm mb-2">
                        {m.year}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{m.text}</p>
                    </div>
                    <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-accent rounded-full mt-2 md:mt-1" />
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-16 bg-gray-50" aria-labelledby="equipment-heading">
        <div className="container-custom">
          <h2 id="equipment-heading" className="section-title text-center">Náš vozový park</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">
            Moderní a pravidelně servisovaná technika je zárukou efektivity a spolehlivosti.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {equipment.map((e) => (
              <div key={e.name} className="bg-white rounded-xl p-6 shadow-sm flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">{e.icon}</div>
                <div>
                  <h3 className="font-bold text-primary text-sm">{e.name}</h3>
                  <p className="text-gray-500 text-xs mt-1">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Naše hodnoty</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
              {[
                { icon: '🤝', title: 'Spolehlivost', desc: 'Dohodnuté termíny dodržujeme. Zákazník se na nás může spolehnout.' },
                { icon: '⭐', title: 'Kvalita', desc: 'Práci děláme poctivě a s důrazem na detail, od malé zahrady po velkou stavbu.' },
                { icon: '💬', title: 'Komunikace', desc: 'Jsme dostupní a vždy informujeme zákazníka o průběhu zakázky.' },
              ].map((v) => (
                <div key={v.title}>
                  <div className="text-4xl mb-3">{v.icon}</div>
                  <h3 className="font-bold text-primary mb-2">{v.title}</h3>
                  <p className="text-gray-600 text-sm">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-black text-white mb-4">Chcete s námi spolupracovat?</h2>
          <p className="text-gray-400 mb-8">Kontaktujte nás a společně najdeme nejlepší řešení pro váš projekt.</p>
          <Link to="/kontakt#formulare" className="btn-primary text-lg px-8 py-4">
            Kontaktujte nás
          </Link>
        </div>
      </section>
    </>
  )
}
