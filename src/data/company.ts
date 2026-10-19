/** Company contact and billing details – the single source for the whole site */
export const company = {
  name: 'TESO – Petr David',
  owner: 'Petr David',
  foundingYear: 1993,
  phone: '+420736121255',
  phoneDisplay: '+420 736 121 255',
  email: 'kontakt@tesodavid.cz',
  address: {
    street: 'Lešná 34',
    postalCode: '756 41',
    city: 'Lešná',
    country: 'CZ',
    /** Shown under the address to help locate the village */
    note: 'u Valašského Meziříčí',
  },
  geo: { latitude: 49.4719, longitude: 17.9436 },
  ico: '45173281',
  dic: 'CZ6402031592',
  openingHours: {
    display: 'Po–Pá 7:00–17:00',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '07:00',
    closes: '17:00',
  },
  /**
   * Search query for the Google Business Profile – map links and the embedded map open the
   * profile (name, address, reviews). Searching by street address lands outside the village.
   */
  googleMapsQuery: 'Petr David - TESO - kontejnerová doprava, Lešná',
  facebook: {
    name: 'TESO – Petr David',
    /** TODO: add the Facebook page URL – the footer entry becomes a link once it's set */
    url: undefined as string | undefined,
  },
}

export const phoneHref = `tel:${company.phone}`
export const emailHref = `mailto:${company.email}`
export const fullAddress = `${company.address.street}, ${company.address.postalCode} ${company.address.city}`
export const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.googleMapsQuery)}`
/** Embeddable map (iframe src) – works without an API key; hl=cs for Czech controls */
export const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(company.googleMapsQuery)}&z=15&hl=cs&output=embed`
