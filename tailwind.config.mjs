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
      animation: {
        "meteor-effect": "meteor 5s linear infinite", 
      },
      keyframes: {
        meteor: {
          "0%": { 
            transform: "rotate(-60deg) translate(0, 0)", 
            opacity: 1
          },
          "70%": { 
            opacity: 1 
          },
          "100%": {
            transform: "rotate(-60deg) translateX(-260px)",
            opacity: 0,
          },
        },
      },
      colors: {
        main: "#1B1D1F",
        secondary: '#191919',
        huh: '#404040',
        huh2: '#262626',
        mainC: '#467CCC',
        secondaryC: '#4D4D4D',
        wless: '#838383',

        newBg: "#010717", // dark ass blue
        widBg: "#0F1323", // background for the github, linkedin, experience
        widExtraBg: "#262f52",
        first: "#e1e5e8", // good white (main text color)
        second: "#78909c  ", // good color? (secondary text color)
      },
      height: {
        '3.5': '0.875rem', // link icon
        '5.5': '1.375rem', // github, linkedin
        '6.5': '1.625rem', // github, linkedin again? i dont remember
        '18': '4.6rem',
        '30': '7.5rem',
      },
      width: {
        '3.5': '0.875rem', // link icon
        '6.5': '1.625rem',
        '40': '40%',
        '42': '42rem',
        '100': '36rem',
      },
      padding: {
        '0.5': '0.2rem',
        '3.5': '0.875rem',
      },
      fontSize: {
        'md': '1.05rem',
      },
      gap: {
        '5.5': '1.375rem',
      },
      borderWidth: {
        '1': '1px',
      },
      screens: {
        'sm': '24.375rem', // 390px
        '8xl': '88rem', // 1408px
        '9xl': '96rem', // my desktop - 1536px
        '10xl': '104rem',
        '11xl': '112rem',
        '12xl': '160rem', // my big ass screen - 2560px
      }
    },
  },
  variants: {
    fill: ['hover', 'focus'], // this line does the trick
  },
  plugins: [],
});
