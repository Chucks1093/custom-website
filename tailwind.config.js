/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./home/index.html",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({addVariant}) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}
