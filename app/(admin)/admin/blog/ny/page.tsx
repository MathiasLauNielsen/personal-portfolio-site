import { createSupabaseServerClient } from '@/lib/supabase-server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import AdminNav from '../../components/AdminNav'
import BlogForm from '../BlogForm'
import { ArrowLeft } from 'lucide-react'

export default async function NytBlogIndlaeg() {
  const supabase = createSupabaseServerClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect('/admin/login')

  return (
    <div className="flex min-h-screen bg-slate-50">
      <AdminNav />
      <div className="flex-1 overflow-auto">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="mb-8">
            <Link
              href="/admin/blog"
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700 transition-colors mb-4"
            >
              <ArrowLeft size={14} />
              Tilbage til blog
            </Link>
            <h1 className="text-2xl font-bold text-slate-900">Nyt indlæg</h1>
          </div>
          <BlogForm />
        </div>
      </div>
    </div>
  )
}
