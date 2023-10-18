/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xsm": "360px",
        xsm: "480px",
      },
      margin: {
        sectionGapLg: "11rem",
        sectionGapMd: "9rem",
        elementGapSm: "1.4rem",
        elementGapMd: "3rem",
      },

      colors: {
        primary: "#b91c1c",
        primaryLight: "#c03333",
        textPrimary: "#1C1B1B",
        textMediumLight: "#1c1b1bcc",
        textLight: "#1c1b1b99",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      borderRadius: {
        default: "8px",
      },
    },
  },
  plugins: [],
};
