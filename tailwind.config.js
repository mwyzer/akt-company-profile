/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#26A69A",
        pureblue: "#0000FF",
        skyblue: "#87CEEB",
        blueviolet: "#5C50F4",
        secondary: "#191A23",
        tartiary: "#F3F3F3",
      },
      fontFamily: {
        primary: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
