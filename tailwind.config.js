/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'biru':  '#387fc8',
        'kuning': '#f3b552',
        'tam': '#393943',
      },
    },
  },
  plugins: [],
}