/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        libre: ["Frank Ruhl Libre", "serif"],
        inter: [ 'Inter', 'sans-serif'],
      },
    },
    plugins: [require("tailgrids/plugin")],
  },
};
