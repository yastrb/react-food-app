/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        libre: ["Frank Ruhl Libre", "serif"],
        inter: [ 'Inter', 'sans-serif'],
      },
    },
    plugins: [],
  },
};
