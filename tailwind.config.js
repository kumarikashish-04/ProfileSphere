/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  // use system preference for dark mode (no toggle needed)
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#f0f9ff',
          300: '#7dd3fc',
          500: '#0ea5ff',
          700: '#0369a1'
        }
      },
      boxShadow: {
        'soft-lg': '0 12px 30px rgba(2,6,23,0.08)',
        'glass': '0 6px 18px rgba(2,6,23,0.06)'
      },
      borderRadius: {
        'xl-2': '1rem'
      }
    }
  },
  plugins: [],
}
