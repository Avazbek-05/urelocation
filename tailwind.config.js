/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      white: "#fff",
      slate_gray: "#5b6574",
      bleck: "#000",
      medium_green: "#5eb083",
      light_orange: "#ffbb8a",
      pastel_blue: "#cad3e0",
    },
    extend: {
      fontFamily: {
        sans: ["Georama "],
      },
    },
  },
  plugins: [],
};
