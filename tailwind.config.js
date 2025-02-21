/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif',"Open Sans"],
      },
      colors: {
        "neutral-dark": "#333333",
        "brand-three": "#daeef3",
        "brand-four": "#badde7",
        "brand-third": "#6fb1c8",
        "brand-secondary": "#22C55E",
        "brand-maroon": "#6fb1c8",
      },
      backgroundImage: {
        "banner-gradient":
          "linear-gradient(150deg, rgba(254,248,232,1) 16%, rgba(229,216,200,1) 80%)",
      },
      animation: {
        marquee: "marquee 10s linear infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out",
        pulseBg: "pulseBg 1.5s infinite",
        pulseBorder: "pulseBorder 1.5s infinite ease-in-out",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseBg: {
          "0%, 100%": { backgroundColor: "#6fb1c8" }, // Default maroon color
          "50%": { backgroundColor: "#22C55E" }, // Lighter red for pulse effect
        },
        pulseBorder: {
          "0%, 100%": { borderColor: "#6fb1c8" }, // Default red
          "50%": { borderColor: "#22C55E" }, // Lighter red
        },
      },
    },
  },
  plugins: [],
};
