import { createSupabaseServerClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import AdminNav from '../components/AdminNav'
import { Plus, FileText, Eye, EyeOff, Pencil } from 'lucide-react'
import type { BlogPost } from '@/types'

export const revalidate = 0

function formatDate(iso?: string) {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('da-DK', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export default async function AdminBlog() {
  const supabase = createSupabaseServerClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect('/admin/login')

  const { data: posts } = await supabase
    .from('blog_posts')
    .select('id, titel, slug, kategori, publiceret, publiceret_at, oprettet_at')
    .order('oprettet_at', { ascending: false })

  return (
    <div className="flex min-h-screen bg-slate-50">
      <AdminNav />
      <div className="flex-1 overflow-auto">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Blog</h1>
              <p className="mt-1 text-sm text-slate-500">
                {posts?.length ?? 0} indlæg ·{' '}
                {posts?.filter((p) => p.publiceret).length ?? 0} publicerede
              </p>
            </div>
            <Link
              href="/admin/blog/ny"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              <Plus size={16} />
              Nyt indlæg
            </Link>
          </div>

          {!posts || posts.length === 0 ? (
            <div className="rounded-xl border border-slate-200 bg-white px-6 py-16 text-center">
              <FileText size={32} className="mx-auto text-slate-300 mb-3" />
              <p className="text-slate-500 text-sm mb-4">Ingen blogindlæg endnu.</p>
              <Link
                href="/admin/blog/ny"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-800 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                <Plus size={14} />
                Skriv dit første indlæg
              </Link>
            </div>
          ) : (
            <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <th className="px-5 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      Titel
                    </th>
                    <th className="px-5 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide hidden sm:table-cell">
                      Kategori
                    </th>
                    <th className="px-5 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide hidden md:table-cell">
                      Dato
                    </th>
                    <th className="px-5 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      Status
                    </th>
                    <th className="px-5 py-3 w-12" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {posts.map((post) => (
                    <tr key={post.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-4">
                        <span className="font-medium text-slate-900">{post.titel}</span>
                        <div className="text-xs text-slate-400 mt-0.5">/blog/{post.slug}</div>
                      </td>
                      <td className="px-5 py-4 hidden sm:table-cell">
                        {post.kategori ? (
                          <span className="text-slate-600">{post.kategori}</span>
                        ) : (
                          <span className="text-slate-400">—</span>
                        )}
                      </td>
                      <td className="px-5 py-4 hidden md:table-cell text-slate-500">
                        {formatDate(post.publiceret_at ?? post.oprettet_at)}
                      </td>
                      <td className="px-5 py-4">
                        {post.publiceret ? (
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">
                            <Eye size={11} />
                            Publiceret
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-500">
                            <EyeOff size={11} />
                            Kladde
                          </span>
                        )}
                      </td>
                      <td className="px-5 py-4">
                        <Link
                          href={`/admin/blog/${post.id}`}
                          className="inline-flex items-center gap-1 text-slate-400 hover:text-blue-700 transition-colors"
                        >
                          <Pencil size={15} />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
