/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#1E1E1E",
        secondary: '#191919',
        huh: '#404040',
        mainC: '#467CCC',
        secondaryC: '#4D4D4D',
        wless: '#838383',
      },
      height: {
        '6.5': '1.625rem',
        '18': '4.6rem',
        '30': '7.5rem',
      },
      borderWidth: {
        '1': '1px',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};

/*
function ({addUtilities}) {
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth : "thin",
          scrollbarColor: "rgb(31 29 29) white"
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "8px"
          },
          "&::-webkit-scrollbar-track": {
            background: "white"
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgb(31 41 55)",
            borderRadius: "20px",
            border: "1px solid white"
          }
        }
      }

      addUtilities(newUtilities, ["responsive", "hover"])
    }
*/
