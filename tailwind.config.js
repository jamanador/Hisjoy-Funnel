/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        "neutral-dark": "#333333",
        "neutral-light": "#FFFFFF",
        "brand-green": "#244442",
        "brand-lime": "#1F8E2A",
        "brand-beige": "#E5D8C8",
        "brand-maroon": "#B11E54",
      },
      backgroundImage: {
        "banner-gradient":
          "linear-gradient(150deg, rgba(254,248,232,1) 16%, rgba(229,216,200,1) 80%)",
      },
    },
  },
  plugins: [],
};
