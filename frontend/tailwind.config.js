/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class', // ← correct place
  theme: {
    extend: {
      fontFamily: {
        sekuya: ["Sekuya", "system-ui"],
      },
    },
  },
  plugins: [],
};
