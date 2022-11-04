/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'fundo': "#121214",
        'text1': '#E1E1E6',
        'text2': '#7C7C8A',
        'backgroundtextarea': '#202024',
      },
    },
  },
  plugins: [],
}