/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'xp-bg': '#08090D',
        'xp-red': '#F12B25',
        'xp-blue': '#1554D1',
        'xp-cream': '#F4EBDD',
        'xp-panel': '#11141C',
        'xp-panel-alt': '#171B25',
        'xp-border': 'rgba(244, 235, 221, 0.16)',
        'xp-muted': 'rgba(244, 235, 221, 0.72)',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'Oswald', 'sans-serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'card': '14px',
        'control': '8px',
      },
      maxWidth: {
        'content': '1200px',
      },
      boxShadow: {
        'glow-red': '0 0 25px -5px rgba(241, 43, 37, 0.4)',
        'glow-blue': '0 0 25px -5px rgba(21, 84, 209, 0.4)',
      }
    },
  },
  plugins: [],
}

