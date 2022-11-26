/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'morado': '#ac76b8',
        'gris': '#edf4ee',
        'celeste': '#54cbf5',
        'azul': '#393185'
      }
    },
    fontFamily: {
      primario: ['Source Serif Pro', 'serif'],
      secundario: ['Source Sans Pro', 'sans-serif']
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
