/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xsm": "360px",
        xsm: "480px",
      },
      spacing: {
        sectionGapLg: "11rem",
        sectionGapMd: "9rem",
        elementGapSm: "1.4rem",
        elementGapMd: "3rem",
      },

      colors: {
        primary: "#E2142D",
        primaryLight: "#e52c42",
        textPrimary: "#1C1B1B",
        textMediumLight: "#1c1b1bcc",
        textLight: "#1c1b1b99",
        lightGray: "#ddd",
      },
      fontFamily: {
        raleway: "'Raleway', sans-serif",
      },
      borderRadius: {
        default: "8px",
      },
    },
  },
  plugins: [],
};
