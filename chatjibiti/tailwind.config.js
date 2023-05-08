/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "text-gray": "#D9D9E3",
      "gray-dark": "#343541",
      "gray-light": "#d3dce6",
      // "bg-color-right": "#202123",
      // "bg-color-left": "#282c34",
      white: "#FFFFFF",
      yellow: "#FFEB2A",
    },
    extend: {},
  },
  plugins: [],
};
