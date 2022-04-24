module.exports = {
  mode: "jit",
  content: [
    "./src/*.{html,js,jsx}",
    "./src/components/layout/*.{html,js,jsx}",
    "./src/components/users/*.{html,js,jsx}",
    "./src/pages/*.{html,js,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
