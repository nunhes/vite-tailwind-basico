/** @type {import('tailwindcss').Config} */
// import '@fontsource-variable/open-sans';

export default {

  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      fontFamily: {
        customFont: ['Montserrat', 'sans-serif'],
        // Add more custom font families as needed
      },

      colors: {
        "primeiro": "hsl(50, 100%, 50%)",
        "segundo": "hsl(228, 39%, 23%)",
        "terceiro": "hsl(227, 12%, 61%)",
      },

    },
  },
  plugins: [],
}

