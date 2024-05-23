/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./.vitepress/theme/components/**/*.{vue,js,jsx}",
    "**/*.{md, html}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
