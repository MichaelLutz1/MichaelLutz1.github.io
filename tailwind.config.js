/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./*.{js,ts}"],
  theme: {
    fontFamily: {
      sans: ["belanosima"],
      title: ["Lobster"],
      about: ["Bebas Neue"],
    },
    extend: {
      animation: {
        cursor: "cursor 1s ease infinite",
      },
      keyframes: {
        cursor: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
      colors: {
        main: "#242424",
      },
    },
  },
  plugins: [],
};