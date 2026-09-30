import { getCopy, site, type Locale } from '@/content'

// schema.org markup so search engines understand who is selling what.
export default function StructuredData({ locale }: { locale: Locale }) {
  const copy = getCopy(locale)
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: site.company,
    url: site.url,
    email: site.email,
    telephone: site.phoneHref.replace('tel:', ''),
    vatID: `DK${site.cvr}`,
    description: copy.home.meta.description,
    areaServed: ['DK', 'EU'],
    address: { '@type': 'PostalAddress', addressLocality: 'Copenhagen', addressCountry: 'DK' },
    founder: { '@type': 'Person', name: site.person, jobTitle: 'Senior Data Engineer', sameAs: [site.linkedin] },
    makesOffer: copy.home.offers.items.map((offer) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: offer.name, description: offer.body },
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
