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
        mainC: '#467CCC',
        secondaryC: '#4D4D4D',
      },
      height: {
        '6.5': '1.625rem',
        '18': '4.6rem',
      }
    },
  },
  plugins: [],
};
