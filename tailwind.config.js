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
      boxShadow:{
        g1: '0 4px 6px -1px rgba(209,213,219,0.1), 0 2px 4px -1px rgba(209,213,219,0.06)',
      }
    },
  },
  variants: {
    extend: {
      zIndex: ['hover']
    },
  },
  plugins: [],
}
