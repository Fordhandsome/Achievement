/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Outfit', 'Prompt', 'sans-serif'],
        sans: ['Inter', 'Prompt', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        aurora: {
          bg: '#060A14',
          surface: '#0D1425',
          elevated: '#15203B',
          cyan: '#00F2FE',
          blue: '#38BDF8',
          indigo: '#6366F1',
          violet: '#A855F7',
        }
      },
      boxShadow: {
        'glow-cyan': '0 0 32px -4px rgba(0, 242, 254, 0.25)',
        'glow-indigo': '0 0 32px -4px rgba(99, 102, 241, 0.28)',
      }
    },
  },
  plugins: [],
}

