/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
      },
      backgroundImage: {},
      filter: {
        invert: "invert(1)",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      fontSize: {
        placeholder: "15px", // Adds a custom font size for placeholder text
      },
      variants: {
        filter: ["responsive", "hover", "focus"],
      },
    },
  },
  plugins: [require("tailwindcss-filters")],
};
  