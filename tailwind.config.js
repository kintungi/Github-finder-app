/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}", "./public"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
