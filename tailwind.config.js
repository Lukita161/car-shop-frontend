/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#839788",
        "cream": "#eee0cb",
        "black": "#161616"
      },
      backgroundImage: {
        "publicImageBackground": "url(/foto-homePage.jpg)"
      },
      backgroundPosition: {
        "centerTop": "center 20px"
      },
      spacing: {
        "20": "50px"
      }
    },
  },
  plugins: [],
}

