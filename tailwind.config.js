/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inknut: ['Inknut Antiqua', 'serif'],  // Menambahkan font Inknut Antiqua
        instrument: ['Instrument Sans', 'sans-serif'],  // Menambahkan font Instrument Sans
      },
      colors: {
        darkblue: '#020B26',
        gold: '#FFAE00',
        grey: '#C2C2C2',
      },
    },
  },
  plugins: [],
};
