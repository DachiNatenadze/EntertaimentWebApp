/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      fontSize: {
        placeholder: "15px", // Adds a custom font size for placeholder text
      },
    },
  },
  plugins: [],
};
