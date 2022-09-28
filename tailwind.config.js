/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1.25rem',
      xl: '2.25rem',
},
fontFamily: {
  'impact': "Impact"
},

extend: {},
},
plugins: [require("daisyui")],
}