export interface KontaktHenvendelse {
  id?: string
  navn: string
  email: string
  virksomhed?: string
  telefon?: string
  besked: string
  laest?: boolean
  oprettet_at?: string
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
  publiceret: boolean
  publiceret_at?: string
  oprettet_at?: string
  opdateret_at?: string
}
