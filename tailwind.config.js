/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Epilogue', 'sans-serif;']
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite'
      }
    }
  },
  plugins: []
};
