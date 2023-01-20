/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary-off-white": "#E6DFCB",
      "primary-navy": "#122641",
      "primary-rust": "#B34E22",
      "primary-orange": "#FF7F00",
      "primary-green": "rgb(22, 163, 74)",
      "primary-white": "#FFFFFF",
    },
    extend: {
      fontFamily: {
        sans: ["parisplus-std", "sans-serif"],
        serif: ["kepler-std", "serif"],
      },
    },
  },
  plugins: [],
};
