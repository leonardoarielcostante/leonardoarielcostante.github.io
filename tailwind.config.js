/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        cream: "#FCEFE6",
        light: "#00A492",
        dark: "#29487B"
      },
      fontFamily: {
        "dm": ["dm_sans", 'sans-serif'], 
      }
    },
  },
  plugins: [],
}