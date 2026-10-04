import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getCopy, routes, site, type Locale } from '@/content'
import { formatPostDate, getPublishedPost } from '@/lib/blog'
import ContactSection from '@/components/ContactSection'
import PostBody, { postBodyClass } from '@/components/blog/PostBody'

// One post, rendered from Markdown. The author block at the end leads to the enquiry form.
export default async function BlogPostPage({ locale, slug }: { locale: Locale; slug: string }) {
  const t = getCopy(locale).blog
  const post = await getPublishedPost(locale, slug)
  if (!post) notFound()

  return (
    <>
      <section className="border-b border-paper-line">
        <div className="container-page pb-14 pt-10 sm:pb-20 sm:pt-14">
          <Link href={routes[locale].blog} className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink">
            <ArrowLeft size={14} aria-hidden />
            {t.back}
          </Link>
          <p className="eyebrow mt-10 animate-rise text-accent">
            {post.kategori ?? t.hero.eyebrow}
            {post.publiceret_at && <span className="text-muted"> · {formatPostDate(post.publiceret_at, locale)}</span>}
          </p>
          <h1 className="display mt-5 max-w-4xl animate-rise text-4xl sm:text-5xl" style={{ animationDelay: '80ms' }}>
            {post.titel}
          </h1>
          {post.ingress && (
            <p className="mt-6 max-w-2xl animate-rise text-lg leading-relaxed text-muted sm:text-xl" style={{ animationDelay: '160ms' }}>
              {post.ingress}
            </p>
          )}
        </div>
      </section>

      <article className="py-16 sm:py-20">
        <div className={`container-page prose-lg ${postBodyClass}`}>
          <PostBody markdown={post.indhold} />
        </div>

        <div className="container-page mt-16">
          <div className="grid gap-6 rounded-2xl border border-paper-line bg-paper-card p-7 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
            <div>
              <p className="display text-xl">{site.person}</p>
              <p className="mt-1 font-mono text-sm text-muted">{t.author.role}</p>
              <p className="mt-4 max-w-xl leading-relaxed text-muted">{t.author.body}</p>
            </div>
            <Link href={`${routes[locale].contact}`} className="btn-ink">
              {t.author.cta}
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </article>

      <ContactSection locale={locale} />
    </>
  )
}
