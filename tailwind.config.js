/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50:  '#fff0f6',
          100: '#ffe4f1',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
      },

      // Add gradient color stops if you want to use custom names in `from-`, `via-`, and `to-` classes
      gradientColorStops: theme => ({
        ...theme('colors'),
        'primary-start': '#3b82f6',
        'primary-end': '#1e40af',
        'secondary-start': '#fda4af',
        'secondary-end': '#be123c',
      }),
    },
  },
  plugins: [],
}

