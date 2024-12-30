/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        rich: '#0D1323ff',
        blue: '#5746EAff',
        cadet: '#1D204Bff',
        bue: '#34397Bff',
        coral: '#FF8B64ff',
        aero: '#56C2E4ff',
        crayola: '#FF5E7Dff',
        emerald: '#4BCF82ff',
        violet: '#7235D1',
        saffron: '#F1C75B'
      },
      fontFamily:{
        body: ["Rubik"]
      }

    },
  },
  safelist: [ 
    'bg-rich', 
    'bg-blue', 
    'bg-cadet', 
    'bg-bue', 
    'bg-coral', 
    'bg-aero', 
    'bg-crayola', 
    'bg-emerald', 
    'bg-violet', 
    'bg-saffron', ],
  plugins: [],
}

