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
        serif: ['Noto Serif', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        // Modern Tea Ceremony Palette
        'arts-dark': '#2C3639',    // Deep charcoal for text
        'arts-medium': '#3F4E4F',  // Forest green-gray for secondary text
        'arts-accent': '#8A6552',  // Refined brown - elegant and understated
        'arts-light': '#E9E2D8',   // Light cream for subtle backgrounds
        'arts-white': '#F8F4EA',   // Soft ivory for main background
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'elevate': '0 4px 16px rgba(0, 0, 0, 0.06)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            h2: {
              fontWeight: '700',
            },
            h3: {
              fontWeight: '600',
            },
            strong: {
              fontWeight: '600',
            },
          },
        },
      },
    },
  },
  plugins: [],
}