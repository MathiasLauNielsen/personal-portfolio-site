import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { createSupabaseServerClient } from '@/lib/supabase-server'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const revalidate = 60

const kategoriColors: Record<string, string> = {
  'Data Engineering': 'bg-blue-100 text-ink',
  'Data Science': 'bg-violet-100 text-violet-700',
  'Analytics & BI': 'bg-emerald-100 text-emerald-700',
  'AI & Machine Learning': 'bg-orange-100 text-orange-700',
  'Karriere & Freelance': 'bg-cyan-100 text-accent',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('da-DK', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const supabase = createSupabaseServerClient()
  const { data: post } = await supabase
    .from('blog_posts')
    .select('titel, ingress')
    .eq('slug', params.slug)
    .eq('publiceret', true)
    .single()

  if (!post) return {}

  return {
    title: post.titel,
    description: post.ingress ?? undefined,
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const supabase = createSupabaseServerClient()

  const { data: post } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', params.slug)
    .eq('publiceret', true)
    .single()

  if (!post) notFound()

  return (
    <div className="bg-paper-card min-h-screen">
      {/* Top bar */}
      <div className="border-b border-paper-line bg-paper">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink transition-colors"
          >
            <ArrowLeft size={14} />
            Alle indlæg
          </Link>
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {post.kategori && (
            <span
              className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
                kategoriColors[post.kategori] ?? 'bg-slate-100 text-muted'
              }`}
            >
              <Tag size={10} />
              {post.kategori}
            </span>
          )}
          {post.publiceret_at && (
            <span className="flex items-center gap-1 text-xs text-muted">
              <Calendar size={11} />
              {formatDate(post.publiceret_at)}
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-ink leading-tight mb-4">
          {post.titel}
        </h1>

        {/* Ingress */}
        {post.ingress && (
          <p className="text-lg text-muted leading-relaxed mb-8 pb-8 border-b border-paper-line">
            {post.ingress}
          </p>
        )}

        {/* Content */}
        <div className="prose prose-neutral prose-lg max-w-none
          prose-headings:font-bold prose-headings:text-ink
          prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-ink prose-p:leading-relaxed
          prose-a:text-ink prose-a:no-underline hover:prose-a:underline
          prose-strong:text-ink
          prose-code:text-ink prose-code:bg-paper prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
          prose-pre:bg-slate-900 prose-pre:rounded-xl
          prose-blockquote:border-l-blue-500 prose-blockquote:bg-paper prose-blockquote:py-1 prose-blockquote:not-italic
          prose-ul:text-ink prose-ol:text-ink
          prose-li:my-1
          prose-img:rounded-xl prose-img:shadow-md">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.indhold}</ReactMarkdown>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-10 pt-6 border-t border-paper-line">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-3 py-1 text-sm text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Author bio */}
        <div className="mt-10 rounded-2xl bg-paper border border-paper-line p-6 flex items-start gap-4">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
            MN
          </div>
          <div>
            <div className="font-semibold text-ink text-sm">Mathias Nielsen</div>
            <div className="text-xs text-muted mb-2">Freelance Data Konsulent</div>
            <p className="text-sm text-muted leading-relaxed">
              Specialist i Data Engineering, Data Science og AI. Hjælper virksomheder med at bygge
              dataplatforme og omsætte data til forretningsværdi.
            </p>
            <Link
              href="/kontakt"
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-ink hover:text-ink transition-colors"
            >
              Kontakt mig
              <ArrowLeft size={12} className="rotate-180" />
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
