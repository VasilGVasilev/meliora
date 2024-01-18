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
      keyframes: {
        scaleUp: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        'pulseScale': 'scaleUp 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}