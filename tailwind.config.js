/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'primary-color': "#3E45EB",
        'primary-text-900': "#141645",
        'secondary-color': "#E7E8FF",
        'primary-text-400': "#686868"
      },
    },
  },
  plugins: [],
}