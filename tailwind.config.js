/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Clash Display"', 'sans-serif'],
        sans: ['Satoshi', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink: {
          950: '#060912',
          900: '#0a0e1a',
          800: '#0f1626',
          700: '#162038',
          600: '#1e2d4d', // brand navy
        },
        ice: {
          DEFAULT: '#4f8bff',
          bright: '#6ea8ff',
          soft: '#a9c8ff',
        },
        mint: '#5eead4',
      },
      boxShadow: {
        glow: '0 0 80px -20px rgba(79,139,255,0.45)',
        card: '0 24px 60px -28px rgba(0,0,0,0.7)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseLine: {
          '0%,100%': { opacity: '0.15' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        pulseLine: 'pulseLine 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
