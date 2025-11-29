import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#12103d',
        },
        accent: {
          gold: '#d19457',
        },
        supporting: {
          darkest: '#230c33',
          'purple-dark': '#43124a',
          'purple-light': '#8550a2',
          blue: '#44618b',
          orange: '#c77e36',
        },
      },
      fontFamily: {
        display: ['Belleza', 'sans-serif'],
        sans: ['B612', 'Calibri', 'sans-serif'],
        accent: ['Gistesy', 'cursive'],
      },
      animation: {
        scroll: 'scroll 30s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
