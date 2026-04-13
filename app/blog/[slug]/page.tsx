import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { createSupabaseServerClient } from '@/lib/supabase-server'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const revalidate = 60

const kategoriColors: Record<string, string> = {
  'Data Engineering': 'bg-blue-100 text-blue-700',
  'Data Science': 'bg-violet-100 text-violet-700',
  'Analytics & BI': 'bg-emerald-100 text-emerald-700',
  'AI & Machine Learning': 'bg-orange-100 text-orange-700',
  'Karriere & Freelance': 'bg-cyan-100 text-cyan-700',
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
    <div className="bg-white min-h-screen">
      {/* Top bar */}
      <div className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700 transition-colors"
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

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
          {post.titel}
        </h1>

        {/* Ingress */}
        {post.ingress && (
          <p className="text-lg text-slate-600 leading-relaxed mb-8 pb-8 border-b border-slate-200">
            {post.ingress}
          </p>
        )}

        {/* Content */}
        <div className="prose prose-slate prose-lg max-w-none
          prose-headings:font-bold prose-headings:text-slate-900
          prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-slate-700 prose-p:leading-relaxed
          prose-a:text-blue-700 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-slate-900
          prose-code:text-blue-800 prose-code:bg-blue-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
          prose-pre:bg-slate-900 prose-pre:rounded-xl
          prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:py-1 prose-blockquote:not-italic
          prose-ul:text-slate-700 prose-ol:text-slate-700
          prose-li:my-1
          prose-img:rounded-xl prose-img:shadow-md">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.indhold}</ReactMarkdown>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-10 pt-6 border-t border-slate-200">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Author bio */}
        <div className="mt-10 rounded-2xl bg-slate-50 border border-slate-200 p-6 flex items-start gap-4">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
            MN
          </div>
          <div>
            <div className="font-semibold text-slate-900 text-sm">Mathias Nielsen</div>
            <div className="text-xs text-slate-500 mb-2">Freelance Data Konsulent</div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Specialist i Data Engineering, Data Science og AI. Hjælper virksomheder med at bygge
              dataplatforme og omsætte data til forretningsværdi.
            </p>
            <Link
              href="/kontakt"
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-700 hover:text-blue-900 transition-colors"
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
