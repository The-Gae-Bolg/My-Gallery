/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Montserrat': ['Montserrat', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        'image-gallery': '0px 4px 6px 0px #00000026',
      },
    },
  },
  plugins: [],
}

