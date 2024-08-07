/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {backgroundImage: {
        'custom-img': "url('../Assets/HomePage.png')",
      }},
  },
  plugins: [],
}

