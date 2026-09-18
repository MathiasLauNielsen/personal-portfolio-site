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
        ink: {
          DEFAULT: '#0B0F14',
          soft: '#141A22',
          line: '#232B36',
        },
        paper: {
          DEFAULT: '#F7F5EF',
          card: '#FFFFFF',
          line: '#E4E0D5',
        },
        lime: {
          DEFAULT: '#C8F53C',
          deep: '#4D6B00',
        },
        muted: {
          DEFAULT: '#5C6470',
          dark: '#9AA4B2',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        grow: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        rise: 'rise 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) both',
        grow: 'grow 1.1s cubic-bezier(0.2, 0.7, 0.2, 1) both',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
