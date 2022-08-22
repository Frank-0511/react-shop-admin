/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{jsx,js,html}'],
  theme: {
    colors: {
      ...colors,
    },
    extend: {},
  },
  plugins: [],
}
