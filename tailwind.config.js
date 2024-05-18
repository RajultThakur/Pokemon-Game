/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'funky': ['"Permanent Marker"', 'cursive'],
        'funky-2' : ['"Comic Sans MS"', 'cursive']
      },
    },
  },
  plugins: [],
}

