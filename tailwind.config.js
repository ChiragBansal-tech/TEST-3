/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'red1': '#ff1010',
        'green2': '#59de00'
      },
      fontFamily: {
        custom: ['"Roboto_Slab"', 'Montserrat'], 
      },
    }, 
  },
  plugins: [],
};
