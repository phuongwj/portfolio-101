/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Consider #114, very good
      // old main: 1E1E1E
      // new main?: 1B1D1F
      colors: {
        main: "#1B1D1F",
        secondary: '#191919',
        huh: '#404040',
        huh2: '#262626',
        mainC: '#467CCC',
        secondaryC: '#4D4D4D',
        wless: '#838383',
      },
      height: {
        '6.5': '1.625rem',
        '18': '4.6rem',
        '30': '7.5rem',
      },
      width: {
        '40': '40%',
        '42': '42rem',
        '100': '36rem',
      },
      gap: {
        '5.5': '1.375rem',
      },
      borderWidth: {
        '1': '1px',
      }
    },
  },
  variants: {
    fill: ['hover', 'focus'], // this line does the trick
  },
  plugins: [],
});
