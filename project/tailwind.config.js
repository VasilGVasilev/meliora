/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",


  ],
  theme: {
    extend: {
      fontFamily: {
        'playfairDisplay': ['Playfair Display', 'serif'],
        'roboto': ['Roboto', 'serif'],
      },
    },
  },
  plugins: [],
}