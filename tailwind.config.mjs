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
        background: "#1B2028",
        lgblue: '#4DB2D7',
        dkishblue: '#4B5975',
        lgskin: '#CCCCB5',
      },
    },
  },
  plugins: [],
};
