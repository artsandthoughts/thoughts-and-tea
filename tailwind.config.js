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
        'tea-red': '#8C271E',
        'tea-brown': '#D4AA7D',
        'tea-green': '#395144',
        'tea-black': '#1C1C1C',
        'tea-white': '#F9F9F9',
      },
    },
  },
  plugins: [],
}