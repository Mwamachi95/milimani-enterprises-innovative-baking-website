/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'luscious-lime': '#7CBF00',
        'bright-white': '#F6F2F1',
        'whisper-white': '#EAE2D3',
        'wet-sand': '#AE8F60',
        'bokara-grey': '#2A2725',
        'dark-hunter-green': '#153033'
      }
    },
  },
  plugins: [],
}