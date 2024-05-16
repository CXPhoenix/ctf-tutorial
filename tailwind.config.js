/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./.vitepress/theme/components/**/*.{vue,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
