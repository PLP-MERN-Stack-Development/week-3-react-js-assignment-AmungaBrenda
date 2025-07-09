/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'weather-blue': '#87CEEB',
        'weather-dark': '#2C3E50',
        'weather-light': '#F8F9FA',
      }
    },
  },
  plugins: [],
}