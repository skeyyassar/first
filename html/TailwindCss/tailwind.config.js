/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      keyframes:{
        yasar:{
          '0%': {transform: 'translateX(0)'},
          '50%': {transform: 'translateX(-100%)'},
          '75%':{transform: 'translateX(-200%)'},
          '100%':{transform: 'translateX(-300%)'}
        },
      },
      animation:{
        'slider-animation':'yasar 10s infinite'
      },
    
    },
  },
  plugins: [],

}