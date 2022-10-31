module.exports = {
  content: ["public/**/*.{html,js}"],
  theme: {
    fontFamily : {
      poppins : ["Poppins", 'sans-serif']
    },
    extend: {
      keyframes : {
          moveY : {
            '0%, 100%' : {transform: 'translateY(0px)' },
            '50%' : {transform: 'translateY(25px)' },
          },
          rotateZ : {
            '0%' : {transform: 'rotate(0deg)' },
            '100%' : {transform: 'rotate(360deg)' },
          }
      },
      animation : {
          moveY: 'moveY 2s infinite',
          rotateZ : 'rotateZ 20s infinite'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
