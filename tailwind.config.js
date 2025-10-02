/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enables manual dark mode toggling
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#139679',
        secondary: '#061A1A',
        background: '#1F2933',
        overlay: '#3E4C59',
        overlay_rr: '#343b45',
        text: '#E4E7EB',
        secondaryText: '#E4E7EB',
        border: '#232E38',
        shadow: '#353D45',
        red: '#F61818',
        disabled: '#24292E',
        unselected: '#383F45',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // example, can use custom font
      },
    },
  },
  plugins: [],
}
