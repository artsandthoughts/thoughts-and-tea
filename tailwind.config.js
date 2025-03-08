// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
        serif: ['Noto Serif SC', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        'arts-purple': '#6A0DAD',
        'arts-gold': '#FFD700',
        'arts-blue': '#1E3A8C',
        'arts-black': '#1C1C1C',
        'arts-white': '#F9F9F9',
      },
    },
  },
  plugins: [],
}