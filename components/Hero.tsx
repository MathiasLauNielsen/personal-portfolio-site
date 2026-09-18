import Link from 'next/link'
import PageHero from './PageHero'

// Used by the blog and privacy pages.
interface HeroProps {
  title: string
  subtitle: string
  cta1?: { label: string; href: string }
  cta2?: { label: string; href: string }
  centered?: boolean
}

export default function Hero({ title, subtitle, cta1, cta2 }: HeroProps) {
  return (
    <>
      <PageHero eyebrow="MLN Data Consulting" title={title} lead={subtitle} />
      {(cta1 || cta2) && (
        <div className="bg-ink">
          <div className="container-page -mt-12 flex flex-wrap gap-3 pb-16">
            {cta1 && <Link href={cta1.href} className="btn-lime">{cta1.label}</Link>}
            {cta2 && <Link href={cta2.href} className="btn-ghost-dark">{cta2.label}</Link>}
          </div>
        </div>
      )}
    </>
  )
}
