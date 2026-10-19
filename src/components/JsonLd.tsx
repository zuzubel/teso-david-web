import { Helmet } from 'react-helmet-async'
import { company } from '../data/company'

export default function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.name,
    description: `Zemní práce, kontejnerová doprava a dovoz materiálu ve Zlínském kraji od roku ${company.foundingYear}.`,
    url: 'https://tesodavid.cz',
    telephone: company.phone,
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      postalCode: company.address.postalCode,
      addressCountry: company.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      ...company.geo,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: company.openingHours.days,
      opens: company.openingHours.opens,
      closes: company.openingHours.closes,
    },
    foundingDate: String(company.foundingYear),
    areaServed: 'Zlínský kraj',
    vatID: company.dic,
    ...(company.facebook.url && { sameAs: [company.facebook.url] }),
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  )
}
