import { NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'
import { createSupabaseServerClient } from '@/lib/supabase-server'

// Called by the admin blog editor after a post is saved, published or deleted, so the public blog shows
// the change at once instead of after the cache runs out. Signed-in admins only.
export async function POST() {
  const supabase = createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Ikke logget ind.' }, { status: 401 })

  revalidateTag('blog')
  for (const path of ['/blog', '/da/blog', '/sitemap.xml']) revalidatePath(path)
  revalidatePath('/blog/[slug]', 'page')
  revalidatePath('/da/blog/[slug]', 'page')
  return NextResponse.json({ ok: true })
}
