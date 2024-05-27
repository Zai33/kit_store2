/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
        noto: ["Noto Serif"],
        dancing: ["Dancing Script"],
      },
      colors: {
        secondary: {
          100: "#def0ff",
          200: "#bde0ff",
          300: "#9cd1ff",
          400: "#7bc1ff",
          500: "#5ab2ff",
          600: "#488ecc",
          700: "#366b99",
          800: "#244766",
          900: "#122433",
        },
      },
    },
  },
  plugins: [],
};
