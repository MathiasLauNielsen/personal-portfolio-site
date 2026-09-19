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

// English is the default language at the root; Danish lives under /da.
// The blog and privacy policy exist in Danish only.
export const routes = {
  en: { home: '/', cases: '/cases', services: '/services', about: '/about', contact: '/contact', blog: '/blog', privacy: '/privatlivspolitik' },
  da: { home: '/da', cases: '/da/cases', services: '/da/ydelser', about: '/da/om-mig', contact: '/da/kontakt', blog: '/blog', privacy: '/privatlivspolitik' },
} as const

export type RouteKey = keyof (typeof routes)['en']

const danishOnly = ['/blog', '/privatlivspolitik']

export function localeOfPath(pathname: string): Locale {
  if (pathname === '/da' || pathname.startsWith('/da/')) return 'da'
  return danishOnly.some((p) => pathname === p || pathname.startsWith(p + '/')) ? 'da' : 'en'
}

// Maps the current path to the same page in the other language.
export function switchLocalePath(pathname: string): { locale: Locale; href: string } {
  const from = localeOfPath(pathname)
  const to: Locale = from === 'da' ? 'en' : 'da'
  const key = (['home', 'cases', 'services', 'about', 'contact'] as RouteKey[]).find((k) => routes[from][k] === pathname)
  return { locale: to, href: key ? routes[to][key] : routes[to].home }
}
