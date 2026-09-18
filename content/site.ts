// Company facts shared by both languages.
export const site = {
  person: 'Mathias Lau Nielsen',
  company: 'MLN Data Consulting',
  cvr: '45700577',
  email: 'mathias@mlnanalytics.com',
  phone: '+45 24 83 79 90',
  phoneHref: 'tel:+4524837990',
  linkedin: 'https://www.linkedin.com/in/mathlau',
  location: { da: 'København', en: 'Copenhagen' },
  // Replace with the real domain once it exists (also used for canonical URLs).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://personal-portfolio-site-tau.vercel.app',
}

export type Locale = 'da' | 'en'

// Danish paths are the canonical ones; English lives under /en.
export const routes = {
  da: { home: '/', cases: '/cases', services: '/services', about: '/om-mig', contact: '/kontakt', blog: '/blog', privacy: '/privatlivspolitik' },
  en: { home: '/en', cases: '/en/cases', services: '/en/services', about: '/en/about', contact: '/en/contact', blog: '/blog', privacy: '/privatlivspolitik' },
} as const

export type RouteKey = keyof (typeof routes)['da']

// Maps the current path to the same page in the other language.
export function switchLocalePath(pathname: string): { locale: Locale; href: string } {
  const from: Locale = pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'da'
  const to: Locale = from === 'da' ? 'en' : 'da'
  const key = (Object.keys(routes[from]) as RouteKey[]).find((k) => routes[from][k] === pathname)
  return { locale: to, href: key ? routes[to][key] : routes[to].home }
}
