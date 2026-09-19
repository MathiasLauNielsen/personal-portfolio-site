import PageHero from './PageHero'

// Used by the blog and privacy pages.
interface HeroProps {
  title: string
  subtitle: string
  cta1?: { label: string; href: string }
  cta2?: { label: string; href: string }
  centered?: boolean
}

export default function Hero({ title, subtitle }: HeroProps) {
  return <PageHero eyebrow="MLN Data Consulting" title={title} lead={subtitle} />
}
