/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#F9F9F7',
          subtle: '#F3F3EF',
          muted: '#EAEAE4',
          border: '#DFDFD6',
        },
        ink: {
          DEFAULT: '#141518',
          secondary: '#4A505D',
          muted: '#767D8E',
          faint: '#A5ACB9',
        },
        cobalt: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#2563EB',
          600: '#1D4ED8',
          700: '#1E40AF',
          900: '#1E3A8A',
        },
        status: {
          mvp: '#1D4ED8',
          hackathon: '#047857',
          concept: '#B45309',
          research: '#6D28D9',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'SFMono-Regular', 'Consolas', 'monospace'],
        display: ['Plus Jakarta Sans', 'Cabinet Grotesk', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.03)',
        'card': '0 4px 20px -2px rgba(16, 24, 40, 0.04), 0 2px 6px -2px rgba(16, 24, 40, 0.02)',
        'card-hover': '0 12px 30px -4px rgba(16, 24, 40, 0.08), 0 4px 10px -2px rgba(16, 24, 40, 0.03)',
      }
    },
  },
  plugins: [],
}
