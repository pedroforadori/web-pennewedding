/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poiret One, cursive',
        aerotis: ['Aerotis, cursive']
      },
      backgroundImage: {
        "app": "url('/../public/assets/palmeiras.jpg')"
        //app: 'url(/assets/aerea.jpeg)'
      },
      backgroundSize: {
        '50%': '50%',
        '16': '4rem',
      },
      backgroundOpacity: {
        app: '20'
      },
      colors: {
        wedding: {
          100: "#b2b89a",
          500: "#717d57"
        },
      }
    },
  },
  plugins: [],
}
