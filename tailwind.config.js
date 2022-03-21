module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins' : 'Poppins',
        'secular': 'Secular One',
      },
      colors: {
        'customGray': '#2D4263',
        'customGray2': '#4f7492'

      },
      backgroundImage: {
        'cover': "url('/images/cover2.jpg')",
      },
    },
  },
  plugins: [],
}
