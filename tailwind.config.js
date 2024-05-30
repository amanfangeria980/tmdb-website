/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#082541",
        blueGradient: "#6A5ACD",
        blueGradientEnd: "#25CCF7",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
