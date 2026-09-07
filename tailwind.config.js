/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#141210',
          surface: '#1E1A16',
          card: '#27221E',
          border: '#3D352E',
          ivory: '#FAF7F2',
          cream: '#F3EDE2',
          muted: '#8C827A',
          gold: {
            DEFAULT: '#C59B27',
            hover: '#D6AB36',
            light: '#E5C568',
            dark: '#9E7818',
            muted: '#8A6E24',
          },
          veg: '#16A34A',
          nonveg: '#DC2626',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 4px 20px -2px rgba(197, 155, 39, 0.25)',
        'gold-glow-lg': '0 8px 30px -4px rgba(197, 155, 39, 0.35)',
        'premium': '0 10px 30px -10px rgba(0, 0, 0, 0.12)',
        'premium-dark': '0 12px 40px -10px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
