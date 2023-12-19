/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xsm": "360px",
        xsm: "480px",
        "2md": "850px",
        "3xl": "1700px",
      },
      spacing: {
        sectionGapLg: "11rem",
        sectionGapMd: "9rem",
        sectionGapSm: "5rem",
        elementGapSm: "1.4rem",
        elementGapMd: "3rem",
      },

      colors: {
        primary: "#E3142D",
        primaryDarkTheme: "#b61024",
        primaryLight: "#e62c42",
        primaryDark: "#cc1229",
        textPrimary: "#1C1B1B",
        textMediumLight: "#1c1b1bcc",
        textLight: "#1c1b1b99",
        lightGray: "#f5f5f5",
        lightGrayDarkTheme: "#dddddd",
        blackLight: "#111111",
      },
      boxShadow: {
        large: "0 10px 60px -5px rgba(0,0,0,0.3)",
        medium: "0 5px 40px -5px rgba(0,0,0,0.25)",
      },
      fontFamily: {
        default: "'Raleway', sans-serif",
      },
      borderRadius: {
        default: "8px",
      },
    },
  },
  plugins: [],
};
