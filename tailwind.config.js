/** @type {import('tailwindcss').Config} */
export default {
  content: [
   "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#0a1d37',
        secondary: '#d6e5fb',
        paragraph:"#999"
      },
      fontFamily: {
        montserrat: 'Montserrat', // Replace 'Custom Font' with your font name
      },
    },
  },
  plugins: [],
}

