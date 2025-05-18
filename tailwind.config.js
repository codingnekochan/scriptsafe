/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./screens/**/*.{js,ts,jsx,tsx}",
 ],
 presets: [require("nativewind/preset")],
 theme: {
  extend: {
   fontFamily: {
    thinSFDisplay: ["thinSFDisplay", "sans-serif"],
    ultraLightSFDisplay: ["ultraLightSFDisplay", "sans-serif"],
    lightSFDisplay: ["lightSFDisplay", "sans-serif"],
    regularSFDisplay: ["regularSFDisplay", "sans-serif"],
    mediumSFDisplay: [" mediumSFDisplay", "sans-serif"],
    semiBoldSFDisplay: ["semiBoldSFDisplay", "sans-serif"],
    boldSFDisplay: ["boldSFDisplay", "sans-serif"],
    heavySFDisplay: ["heavySFDisplay", "sans-serif"],
    blackSFDisplay: ["blackSFDisplay", "sans-serif"],
   },
  },
 },
 plugins: [],
};
