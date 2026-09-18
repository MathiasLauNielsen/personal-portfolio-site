import clsx from 'clsx'
import type { ProofStatus } from '@/content'

const dot: Record<ProofStatus, string> = {
  measured: 'bg-lime-deep',
  tested: 'bg-ink',
  pending: 'border border-ink bg-transparent',
}

const dotOnDark: Record<ProofStatus, string> = {
  measured: 'bg-lime',
  tested: 'bg-paper',
  pending: 'border border-paper bg-transparent',
}

// Says how solid a number is. The dot shape differs per status so it never relies on colour alone.
export default function StatusBadge({
  status,
  label,
  dark = false,
}: {
  status: ProofStatus
  label: string
  dark?: boolean
}) {
  return (
    <span className={clsx('eyebrow inline-flex items-center gap-2 !tracking-[0.12em]', dark ? 'text-muted-dark' : 'text-muted')}>
      <span className={clsx('h-2 w-2 rounded-full', dark ? dotOnDark[status] : dot[status])} aria-hidden />
      {label}
    </span>
  )
}
