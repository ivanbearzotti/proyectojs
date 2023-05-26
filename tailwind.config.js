/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
      colors: {
        gris: '#343434',
        grisosc: '#1B1B1B',
        bandit1: '#FF4100',
        bandit2: '#9FF9E4',
        bullit: '#313C46',
        breeze: '#E4551D',
        border: '#E1E3E6',
      },
    },
  },
  plugins: [],
}

