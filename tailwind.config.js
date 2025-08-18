/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'charcoal': '#212529',
        'warm-white': '#F8F9FA',
        'chontaduro-gold': '#FFB600',
        'salsa-red': '#D62828',
        'cana-green': '#5FAD56',
        'pacifico-blue': '#003049',
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'cursive'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
