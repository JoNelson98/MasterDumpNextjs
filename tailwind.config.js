/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#E0E7FF',
          DEFAULT: '#3B82F6',
          dark: '#1E3A8A'
        }
      }
    },
    plugins: [require('flowbite/plugin'), require('@tailwindcss/forms')]
  }
}