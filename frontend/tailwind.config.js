/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
];

export const theme = {
    extend: {
      
       fontFamily: {
        sekuya: ["Sekuya", "system-ui"], // only font names here
      },
    },
  }
  
export const plugins = [];
