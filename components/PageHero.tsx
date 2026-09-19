export default function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: string; lead: string }) {
  return (
    <section className="border-b border-paper-line">
      <div className="container-page pb-16 pt-14 sm:pb-24 sm:pt-20">
        <p className="eyebrow animate-rise text-accent">{eyebrow}</p>
        <h1 className="display mt-5 max-w-4xl animate-rise text-4xl sm:text-6xl" style={{ animationDelay: '80ms' }}>
          {title}
        </h1>
        <p className="mt-6 max-w-2xl animate-rise text-lg leading-relaxed text-muted sm:text-xl" style={{ animationDelay: '160ms' }}>
          {lead}
        </p>
      </div>
    </section>
  )
}
