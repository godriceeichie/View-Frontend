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
        "active-input": "1px 1px 9px 1px rgba(62,69,235,0.56)",
        "error-input": "1px 1px 9px 1px #F6C2C2"
      },
      colors: {
        'primary-color': "#3E45EB",
        'primary-text-900': "#141645",
        'secondary-color': "#E7E8FF",
        'primary-text-400': "#686868",
        'error-color': "#ff0909",
        'grey-500': "#838387"
      }
    },
  },
  plugins: [],
})