/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,png}",
  ],
  theme: {
    extend: {backgroundImage:{'HomePage':'url(src/assets/imgeB.png)'}},
  },
  plugins: [],
}