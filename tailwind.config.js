/** @type {import('tailwindcss').Config} */
import withMT from '@material-tailwind/react/utils/withMT'

module.exports = withMT({
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        sans: ["Satoshi", "sans-serif"]
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        'primary-color': "#3E45EB",
        'primary-text-900': "#141645",
        'secondary-color': "#E7E8FF",
        'primary-text-400': "#686868",
      }
    },
  },
  plugins: [],
})