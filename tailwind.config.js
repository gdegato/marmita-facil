/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      red: '#E56353',
      green: '#17C294',
      greenDark: '#04a87c',
      orange: '#DC820D',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    fontFamily: {
      openSans: ['Open Sans', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

