import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getCopy, routes, type Locale } from '@/content'
import { formatPostDate, getPublishedPosts } from '@/lib/blog'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import ContactSection from '@/components/ContactSection'

// Published posts in one language, newest first. Posts are not translated, so each list stands alone.
export default async function BlogListPage({ locale }: { locale: Locale }) {
  const t = getCopy(locale).blog
  const posts = await getPublishedPosts(locale)

  return (
    <>
      <PageHero {...t.hero} />

      <section className="py-20 sm:py-24">
        <div className="container-page">
          {posts.length === 0 ? (
            <p className="text-lg text-muted">{t.empty}</p>
          ) : (
            <div className="flex flex-col">
              {posts.map((post, i) => (
                <Reveal key={post.id} delay={i * 40}>
                  <Link
                    href={`${routes[locale].blog}/${post.slug}`}
                    className="group grid gap-4 border-t border-paper-line py-10 lg:grid-cols-[12rem_1fr] lg:gap-10"
                  >
                    <div className="font-mono text-sm text-muted">
                      {post.publiceret_at && <p>{formatPostDate(post.publiceret_at, locale)}</p>}
                      {post.kategori && <p className="mt-1 text-accent">{post.kategori}</p>}
                    </div>
                    <div>
                      <h2 className="display text-2xl group-hover:text-accent sm:text-3xl">{post.titel}</h2>
                      {post.ingress && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{post.ingress}</p>}
                      <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold underline decoration-ink/25 underline-offset-4 group-hover:text-accent group-hover:decoration-accent">
                        {t.readMore}
                        <ArrowRight size={14} />
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <ContactSection locale={locale} />
    </>
  )
}
