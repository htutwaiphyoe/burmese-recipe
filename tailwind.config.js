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
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".screen": {
          "@apply flex-1 bg-black": {},
        },
        ".text-normal": {
          "@apply text-base text-text": {},
        },
        ".centered-row": {
          "@apply flex-row items-center justify-center": {},
        },
        ".slider": {
          "@apply h-7 rounded-2xl": {},
        },
        ".item-separator": {
          "@apply border border-textMuted opacity-30": {},
        },
        ".empty-contentText": {
          "@apply mt-5 text-base text-center text-textMuted": {},
        },
        ".empty-contentImage": {
          "@apply self-center w-40 h-40 mt-10 opacity-30": {},
        },
      });
    },
  ],
};
