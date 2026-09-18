'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Database, Mail, FileText, LogOut, LayoutDashboard } from 'lucide-react'
import clsx from 'clsx'

const navItems = [
  { label: 'Henvendelser', href: '/admin/henvendelser', icon: Mail },
  { label: 'Blog', href: '/admin/blog', icon: FileText },
]

export default function AdminNav() {
  const pathname = usePathname()
  const router = useRouter()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <aside className="w-56 shrink-0 bg-blue-900 min-h-screen flex flex-col">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-blue-800">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500 text-white">
            <Database size={16} />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xs font-bold text-white tracking-tight">Mathias Nielsen</span>
            <span className="text-xs text-blue-300">Admin</span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
        {navItems.map(({ label, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              'flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
              pathname?.startsWith(href)
                ? 'bg-blue-800 text-white'
                : 'text-blue-200 hover:bg-blue-800 hover:text-white'
            )}
          >
            <Icon size={16} />
            {label}
          </Link>
        ))}
      </nav>

      {/* Sign out */}
      <div className="px-3 py-4 border-t border-blue-800">
        <Link
          href="/"
          className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-blue-300 hover:text-white transition-colors mb-1"
        >
          <LayoutDashboard size={16} />
          Vis hjemmeside
        </Link>
        <button
          onClick={handleSignOut}
          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-blue-300 hover:text-white hover:bg-blue-800 transition-colors"
        >
          <LogOut size={16} />
          Log ud
        </button>
      </div>
    </aside>
  )
}
