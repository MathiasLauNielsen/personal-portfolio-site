// Layout for the link preview image (LinkedIn, Slack, etc.). Rendered by next/og, so inline styles only.
export const ogSize = { width: 1200, height: 630 }

export function OgCard({ eyebrow, line1, line2 }: { eyebrow: string; line1: string; line2: string }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 72,
        background: '#FAF9F6',
        color: '#10131A',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex', fontSize: 26, letterSpacing: 4, color: '#2B50FF' }}>{eyebrow}</div>
      <div style={{ display: 'flex', flexDirection: 'column', fontSize: 84, fontWeight: 700, lineHeight: 1.05, letterSpacing: -3 }}>
        <div style={{ display: 'flex' }}>{line1}</div>
        <div style={{ display: 'flex', color: '#2B50FF' }}>{line2}</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 30 }}>
        <div style={{ display: 'flex', fontWeight: 700 }}>Mathias Lau Nielsen</div>
        <div style={{ display: 'flex', color: '#5B6472' }}>MLN Data Consulting</div>
      </div>
    </div>
  )
}
