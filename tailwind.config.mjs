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
        newBg: "#E0F0F8", // dark ass blue
        widBg: "#cee2eb", // background for the github, linkedin, experience
        widToolsBg: "#e4eef3", // background for the java, javascript, python, sql, etc
        borderColor: "#666b83", // border color (for now we are using for the tools section)
        first: "#034264", // good white (main text color)
        second: "#768891", // good color? (secondary text color)
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
