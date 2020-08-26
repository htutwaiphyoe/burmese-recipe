/** @type {import('tailwindcss').Config} */
import { colors, fontSize, screenPadding } from "./styles/tokens";

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
      fontSize,
      spacing: {
        "screen-horizontal": screenPadding.horizontal,
      },
    },
  },
  plugins: [],
};
