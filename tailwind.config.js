module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height:{
        '120': '32rem',
      },
      zIndex: {
        '-10': '-10',
      },
      fontFamily:{
        sb : ['Oswald'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
