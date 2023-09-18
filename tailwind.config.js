/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily: {
      default: 'Sanchez',
      heading: 'Abril Fatface'
    },
    container: {
      center: true,
      padding: {  
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        'primary': '#2BB3F6',
        'secondary': '#FF555F',
        'bg-primary': '#362D40',
        'dark-light': '#502750',
        'semi-white': '#ffffffcc',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

