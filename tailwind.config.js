module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        povo: '#FFFA00'
      }
    }
  },
  variants: {
    stroke: ['hover', 'focus'],
    extend: {}
  },
  plugins: []
}
