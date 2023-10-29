/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: true,
  theme: {
    colors: {
      red: '#E56353',
      redDark: '#cd5040',
      green: '#17C294',
      greenDark: '#04a87c',
      orange: '#DC820D',
      dark: '#333',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      graylight: "#d7d7d7e6"
    },
    fontFamily: {
      openSans: ['Open Sans', 'sans-serif'],
      indie: ['Indie Flower', 'cursive'],
    },
    fontSize: {
      sm: '0.875rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.375rem',
      '3xl': '1.5rem',
      '4xl': '1.875rem'
    },
    extend: {},
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}

