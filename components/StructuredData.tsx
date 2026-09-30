import { getCopy, routes, site, type Locale } from '@/content'

// schema.org markup so search engines understand who is selling what.
export default function StructuredData({ locale }: { locale: Locale }) {
  const copy = getCopy(locale)
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: site.company,
    url: site.url,
    logo: `${site.url}/brand/logo.png`,
    image: `${site.url}/brand/logo.png`,
    email: site.email,
    telephone: site.phoneHref.replace('tel:', ''),
    vatID: `DK${site.cvr}`,
    description: copy.home.meta.description,
    areaServed: ['DK', 'EU'],
    address: { '@type': 'PostalAddress', addressLocality: 'Copenhagen', addressCountry: 'DK' },
    sameAs: [site.linkedin],
    founder: {
      '@type': 'Person',
      name: site.person,
      jobTitle: 'Data and AI Engineer',
      url: `${site.url}${routes[locale].about}`,
      sameAs: [site.linkedin],
      // The technologies named on the two offer pages, so the person is tied to the same terms search engines see in the text.
      knowsAbout: Array.from(new Set([...copy.data.stack, ...copy.ai.stack])),
    },
    // The two areas of expertise, then the ways to buy them (hours and the fixed-scope products).
    makesOffer: [
      ...copy.home.offers.items.map((offer) => ({ name: offer.name, description: offer.body })),
      { name: copy.home.buy.hours.name, description: copy.home.buy.hours.body },
      ...copy.home.buy.products.map((product) => ({ name: product.name, description: product.body })),
    ].map((service) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', provider: { '@type': 'Organization', name: site.company }, ...service } })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
