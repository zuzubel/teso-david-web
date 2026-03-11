import { Helmet } from 'react-helmet-async'

export default function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'TESO – Petr David',
    description: 'Zemní práce, kontejnerová doprava a dovoz materiálu ve Zlínském kraji od roku 1993.',
    url: 'https://tesodavid.cz',
    telephone: '+420736121255',
    email: 'kontakt@tesodavid.cz',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lešná 34',
      addressLocality: 'Lešná',
      postalCode: '756 41',
      addressCountry: 'CZ',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 49.4719,
      longitude: 17.9436,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '17:00',
    },
    foundingDate: '1993',
    areaServed: 'Zlínský kraj',
    vatID: 'CZ6402031592',
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  )
}
