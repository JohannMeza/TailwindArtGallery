module.exports = {
  purge: ['./public/**/*.html'],
  content: [],
  theme: {
    screens: {
      'xl': {'min': '1280px'},
      'lg': {'min': '1024px'},
      'md': {'min': '768px'},
      'sm': {'min': '640px'},
      'xsm': {'max': '640px'},
    },
    fontFamily: {
      'oswald': 'Oswald',
      'ruluko': 'Ruluko'
    },
    container: {
      center: true
    },
    colors: {
      'primary': '#151515',
      'secundary': '#D5966B',
      'third': '#fff',
      'none': 'transparent'
    },
    extend: {
      backgroundImage: theme => ({
        'gradient-text-header': 'linear-gradient(90deg,#fff 24.5%, #151515 10%)'
      })
    },
  },
  plugins: [],
}
