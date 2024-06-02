/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./**/*.{html,js}",
    "./src/components/**/*.{html,js,jsx}",
    "./src/scripts/**/*.{html,js,jsx}",
  ],
  safelist: ["selected"],
  theme: {
    extend: {},
  },
  plugins: [],
}
