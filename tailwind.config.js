/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./App.tsx"],
  theme: {
    extend: {
      fontFamily: {
        body: "Poppins_500Medium",
        heading: "Poppins_300Light",
        title: "Poppins_700Bold",
      },
    },
  },
  plugins: [],
};
