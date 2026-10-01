// Company facts shared by both languages.
export const site = {
  person: 'Mathias Lau Nielsen',
  company: 'MLN Data Consulting',
  cvr: '45700577',
  email: 'mathias@mlnanalytics.com',
  phone: '+45 24 83 79 90',
  phoneHref: 'tel:+4524837990',
  linkedin: 'https://www.linkedin.com/in/mathlau',
  // Public source of this site and the company wiki; the AI coding case links into it.
  repo: 'https://github.com/MathiasLauNielsen/personal-portfolio-site',
  location: { da: 'København', en: 'Copenhagen' },
  // Canonical URLs, sitemap and link previews. NEXT_PUBLIC_SITE_URL overrides it (set in Vercel production).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mlnanalytics.com',
}

export type Locale = 'da' | 'en'

// English is the default language at the root; Danish lives under /da.
// The blog and privacy policy exist in Danish only.
export const routes = {
  en: { home: '/', data: '/data-platform', ai: '/ai-coding', cases: '/cases', about: '/about', contact: '/contact', blog: '/blog', privacy: '/privatlivspolitik' },
  da: { home: '/da', data: '/da/dataplatform', ai: '/da/ai-kodning', cases: '/da/cases', about: '/da/om-mig', contact: '/da/kontakt', blog: '/blog', privacy: '/privatlivspolitik' },
} as const

export type RouteKey = keyof (typeof routes)['en']

// One entry per written case. Its copy lives under cases.studies in en.ts and da.ts, with the same key.
export const caseSlugs = {
  agent: { en: 'company-it-run-by-a-coding-agent', da: 'firmaets-it-drevet-af-en-kodeagent' },
} as const

export type CaseKey = keyof typeof caseSlugs

export const caseKeys = Object.keys(caseSlugs) as CaseKey[]

export function casePath(locale: Locale, key: CaseKey): string {
  return `${routes[locale].cases}/${caseSlugs[key][locale]}`
}

export function caseKeyOfSlug(locale: Locale, slug: string): CaseKey | undefined {
  return caseKeys.find((key) => caseSlugs[key][locale] === slug)
}

const danishOnly = ['/blog', '/privatlivspolitik']

export function localeOfPath(pathname: string): Locale {
  if (pathname === '/da' || pathname.startsWith('/da/')) return 'da'
  return danishOnly.some((p) => pathname === p || pathname.startsWith(p + '/')) ? 'da' : 'en'
}

// Maps the current path to the same page in the other language.
export function switchLocalePath(pathname: string): { locale: Locale; href: string } {
  const from = localeOfPath(pathname)
  const to: Locale = from === 'da' ? 'en' : 'da'
  const key = (['home', 'data', 'ai', 'cases', 'about', 'contact'] as RouteKey[]).find((k) => routes[from][k] === pathname)
  if (key) return { locale: to, href: routes[to][key] }
  const study = caseKeys.find((k) => casePath(from, k) === pathname)
  return { locale: to, href: study ? casePath(to, study) : routes[to].home }
}
