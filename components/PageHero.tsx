export default function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: string; lead: string }) {
  return (
    <section className="bg-ink text-paper">
      <div className="container-page pb-20 pt-16 sm:pb-28 sm:pt-24">
        <p className="eyebrow animate-rise text-lime">{eyebrow}</p>
        <h1 className="display mt-5 max-w-4xl animate-rise text-5xl sm:text-7xl" style={{ animationDelay: '80ms' }}>
          {title}
        </h1>
        <p className="mt-7 max-w-2xl animate-rise text-lg leading-relaxed text-muted-dark" style={{ animationDelay: '160ms' }}>
          {lead}
        </p>
      </div>
    </section>
  )
}
