/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      transparent: "transparent",
      rose: {
        10: "#fff7f9",
        20: "#ffdce5",
        30: "#ff3b8d",
        40: "#db0072",
        50: "#800040",
        60: "#4c0023",
        },
      white: "#ffffff",
      black: "#000000",
    },
    extend: {},
  },
  plugins: [],
};

