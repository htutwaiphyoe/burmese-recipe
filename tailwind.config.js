/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#e8b20e",
        gray: "#8f8e8d",
      },
      fontFamily: {
        thin: ["Outfit_100Thin", "sans-serif"],
        extralight: ["Outfit_200ExtraLight", "sans-serif"],
        light: ["Outfit_300Light", "sans-serif"],
        regular: ["Outfit_400Regular", "sans-serif"],
        medium: ["Outfit_500Medium", "sans-serif"],
        semibold: ["Outfit_600SemiBold", "sans-serif"],
        bold: ["Outfit_700Bold", "sans-serif"],
        extrabold: ["Outfit_800ExtraBold", "sans-serif"],
        black: ["Outfit_900Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
