import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import { createSupabaseServerClient } from '@/lib/supabase-server'
import { ArrowRight, Calendar, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Indsigter og viden om Data Engineering, Data Science, Analytics og AI/ML — skrevet af Mathias Nielsen.',
}

export const revalidate = 60

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('da-DK', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

const kategoriColors: Record<string, string> = {
  'Data Engineering': 'bg-blue-100 text-blue-700',
  'Data Science': 'bg-violet-100 text-violet-700',
  'Analytics & BI': 'bg-emerald-100 text-emerald-700',
  'AI & Machine Learning': 'bg-orange-100 text-orange-700',
  'Karriere & Freelance': 'bg-cyan-100 text-cyan-700',
}

export default async function BlogListing() {
  const supabase = createSupabaseServerClient()

  const { data: posts } = await supabase
    .from('blog_posts')
    .select('id, titel, slug, ingress, kategori, tags, publiceret_at')
    .eq('publiceret', true)
    .order('publiceret_at', { ascending: false })

  return (
    <>
      <Hero
        title="Blog"
        subtitle="Viden og indsigter om Data Engineering, Data Science, Analytics og AI — til dem der arbejder seriøst med data."
        centered
      />

      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {!posts || posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-500">Ingen indlæg publiceret endnu. Kom snart igen!</p>
            </div>
          ) : (
            <div className="flex flex-col gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 hover:border-blue-200 hover:shadow-md transition-all"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    {post.kategori && (
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
                          kategoriColors[post.kategori] ?? 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        <Tag size={10} />
                        {post.kategori}
                      </span>
                    )}
                    {post.publiceret_at && (
                      <span className="flex items-center gap-1 text-xs text-slate-400">
                        <Calendar size={11} />
                        {formatDate(post.publiceret_at)}
                      </span>
                    )}
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-800 transition-colors mb-2">
                    <Link href={`/blog/${post.slug}`}>{post.titel}</Link>
                  </h2>

                  {post.ingress && (
                    <p className="text-slate-600 leading-relaxed text-sm">{post.ingress}</p>
                  )}

                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-800 hover:text-blue-600 transition-colors"
                  >
                    Læs mere
                    <ArrowRight size={14} />
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
