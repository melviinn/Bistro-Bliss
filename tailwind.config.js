/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
      display: ["Playfair Display", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('assets/hero-bg.png')",
      },

      colors: {
        "header-bg": "#474747",
        foreground: "#2C2F24",
      },
    },
  },
  plugins: [],
};
