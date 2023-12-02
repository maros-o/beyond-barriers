/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myred: "#ff2d1c",
        myblack: "#121212",
        myblue: "#2e3746",
        mygrey: "#242424",
      },
    },
  },
  plugins: [],
};
