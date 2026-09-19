import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light, warm base with a single cobalt accent. Dark is used sparingly for contrast.
        paper: { DEFAULT: '#FAF9F6', card: '#FFFFFF', line: '#E6E3DC' },
        ink: { DEFAULT: '#10131A', soft: '#1A1F2B', line: '#2A3140' },
        accent: { DEFAULT: '#2B50FF', light: '#9DB0FF', tint: '#EEF1FF' },
        muted: { DEFAULT: '#5B6472', dark: '#A3ACBB' },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        rise: 'rise 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) both',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
