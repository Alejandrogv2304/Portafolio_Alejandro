// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // 👈 Esto te permite activar el modo oscuro con una clase
  theme: {
    extend: {},
  },
  plugins: [],
};
