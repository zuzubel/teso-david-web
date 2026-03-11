import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Hero from '../../components/Hero/Hero'

interface GalleryImage {
  id: number
  src: string
  alt: string
  category: string
  width: number
  height: number
}

// Placeholder gallery items – replace src with real images
const images: GalleryImage[] = [
  { id: 1, src: '/images/gallery/bagr-1.jpg', alt: 'Pásový bagr při výkopu základů', category: 'stroje', width: 800, height: 600 },
  { id: 2, src: '/images/gallery/bagr-2.jpg', alt: 'Minibagr v zahradě', category: 'stroje', width: 800, height: 600 },
  { id: 3, src: '/images/gallery/vykop-1.jpg', alt: 'Výkop základové desky', category: 'výkopy', width: 800, height: 600 },
  { id: 4, src: '/images/gallery/vykop-2.jpg', alt: 'Výkop pro bazén', category: 'výkopy', width: 800, height: 600 },
  { id: 5, src: '/images/gallery/vykop-3.jpg', alt: 'Terénní úpravy pozemku', category: 'výkopy', width: 800, height: 600 },
  { id: 6, src: '/images/gallery/kontejner-1.jpg', alt: 'Přistavení kontejneru na stavbu', category: 'kontejnery', width: 800, height: 600 },
  { id: 7, src: '/images/gallery/kontejner-2.jpg', alt: 'Odvoz stavební suti', category: 'kontejnery', width: 800, height: 600 },
  { id: 8, src: '/images/gallery/projekt-1.jpg', alt: 'Dokončený výkop základů', category: 'projekty', width: 800, height: 600 },
  { id: 9, src: '/images/gallery/projekt-2.jpg', alt: 'Upravený terén před výstavbou', category: 'projekty', width: 800, height: 600 },
  { id: 10, src: '/images/gallery/projekt-3.jpg', alt: 'Dokončená terénní úprava zahrady', category: 'projekty', width: 800, height: 600 },
  { id: 11, src: '/images/gallery/bagr-3.jpg', alt: 'Nákladní auto s hydraulickou rukou', category: 'stroje', width: 800, height: 600 },
  { id: 12, src: '/images/gallery/vykop-4.jpg', alt: 'Výkop pro inženýrské sítě', category: 'výkopy', width: 800, height: 600 },
]

const categories = ['všechny', 'stroje', 'výkopy', 'kontejnery', 'projekty']


export default function Gallery() {
  const [active, setActive] = useState('všechny')

  const filtered = active === 'všechny' ? images : images.filter((img) => img.category === active)

  return (
    <>
      <Helmet>
        <title>Galerie prací | TESO David</title>
        <meta name="description" content="Podívejte se na naše dokončené zakázky – výkopy, zemní práce, kontejnerová doprava a terénní úpravy ve Zlínském kraji." />
        <meta property="og:title" content="Galerie prací | TESO David" />
        <meta property="og:description" content="Fotogalerie dokončených zakázek – zemní práce, kontejnery a terénní úpravy." />
        <meta property="og:url" content="https://tesodavid.cz/galerie" />
        <link rel="canonical" href="https://tesodavid.cz/galerie" />
      </Helmet>

      <Hero
        title="Galerie prací"
        subtitle="Ukázky našich dokončených zakázek – od výkopů základů po terénní úpravy."
        showCta={false}
      />

      <section className="py-16">
        <div className="container-custom">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors capitalize ${
                  active === cat
                    ? 'bg-accent text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((img) => (
              <figure key={img.id} className="overflow-hidden rounded-xl bg-gray-100 group">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={img.width}
                  height={img.height}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Replace broken images with placeholder div
                    const target = e.currentTarget
                    const parent = target.parentElement
                    if (parent) {
                      target.style.display = 'none'
                      const placeholder = document.createElement('div')
                      placeholder.innerHTML = `<div style="background:${img.category === 'stroje' ? '#1a1a1a' : img.category === 'výkopy' ? '#4b3d28' : '#2d4a2d'}" class="w-full h-48 flex items-center justify-center text-center rounded-lg p-4"><div><div style="font-size:2rem">📷</div><p style="color:#9ca3af;font-size:0.75rem;margin-top:0.5rem">${img.alt}</p></div></div>`
                      parent.appendChild(placeholder.firstChild as Node)
                    }
                  }}
                />
                <figcaption className="p-3 text-xs text-gray-500">{img.alt}</figcaption>
              </figure>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-500 py-10">Žádné fotografie v této kategorii.</p>
          )}

          <p className="text-center text-gray-500 text-sm mt-10">
            Galerie bude průběžně doplňována. Pro aktuální reference nás kontaktujte.
          </p>
        </div>
      </section>
    </>
  )
}
