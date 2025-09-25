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
        newBg: "#E4F0F6", // light blue bg
        widBg: "#cee2eb", 
        widToolsBg: "#E3EDF1", 
        borderColor: "#666b83", // border color (for now we are using for the tools section)
        first: "#034264", // main color
        second: "#768891", // secondary color
      },
      height: {
        '18': '4.6rem',
        '30': '7.5rem',
      },
      width: {
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
      }
    },
  },
  variants: {
    fill: ['hover', 'focus'], // this line does the trick
  },
  plugins: [],
});
