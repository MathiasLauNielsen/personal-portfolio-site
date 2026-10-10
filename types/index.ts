export interface KontaktHenvendelse {
  id?: string
  navn: string
  email: string
  virksomhed?: string
  telefon?: string
  besked: string
  laest?: boolean
  oprettet_at?: string
  // Daily visitor key from the visit log (see lib/besoeg-noegle.ts).
  besoegende?: string | null
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  deliverables: string[]
  technologies: string[]
}

export interface Case {
  id: string
  title: string
  industry: string
  challenge: string
  solution: string
  result: string
  metric: string
  technologies: string[]
}

export interface NavLink {
  label: string
  href: string
}

export interface HeroProps {
  title: string
  subtitle: string
  cta1?: {
    label: string
    href: string
  }
  cta2?: {
    label: string
    href: string
  }
  centered?: boolean
}

export interface BlogPost {
  id?: string
  titel: string
  slug: string
  ingress?: string
  indhold: string
  kategori?: string
  tags?: string[]
  // 'en' posts live at /blog, 'da' posts at /da/blog.
  sprog: 'da' | 'en'
  publiceret: boolean
  publiceret_at?: string
  oprettet_at?: string
  opdateret_at?: string
}
