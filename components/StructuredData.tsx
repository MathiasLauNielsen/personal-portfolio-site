import { casePath, getCopy, routes, site, type CaseKey, type Locale } from '@/content'

// One schema.org block on a page.
export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

const absolute = (path: string) => `${site.url}${path === '/' ? '' : path}`

// Home › … › the page itself, so search results can show the path instead of the URL.
export function breadcrumbJsonLd(locale: Locale, trail: { name: string; path: string }[]) {
  const items = [{ name: getCopy(locale).nav.home, path: routes[locale].home }, ...trail]
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.name, item: absolute(item.path) })),
  }
}

// A written case as an article by Mathias, published by the company.
export function caseJsonLd(locale: Locale, key: CaseKey) {
  const study = getCopy(locale).cases.studies.find((s) => s.key === key)
  if (!study) return undefined
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: study.meta.title,
    description: study.meta.description,
    inLanguage: locale,
    datePublished: study.published,
    url: absolute(casePath(locale, key)),
    mainEntityOfPage: absolute(casePath(locale, key)),
    image: `${site.url}/api/og?locale=${locale}&case=${key}`,
    author: { '@type': 'Person', name: site.person, url: absolute(routes[locale].about) },
    publisher: { '@type': 'Organization', name: site.company, logo: { '@type': 'ImageObject', url: `${site.url}/brand/logo.png` } },
  }
}

// One offer page as a service, with the ways to buy it (the engagements tagged with an enquiry topic).
export function serviceJsonLd(locale: Locale, offer: 'data' | 'ai') {
  const copy = getCopy(locale)
  const t = copy[offer]
  const name = copy.home.offers.items.find((o) => o.key === offer)?.name ?? t.hero.eyebrow
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    serviceType: name,
    description: t.meta.description,
    url: absolute(routes[locale][offer]),
    areaServed: ['DK', 'EU'],
    availableLanguage: ['en', 'da'],
    provider: { '@type': 'ProfessionalService', name: site.company, url: site.url },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: t.engagementsTitle,
      itemListElement: t.engagements.map((e) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: e.title, description: e.body } })),
    },
  }
}

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
  return <JsonLd data={data} />
}
