/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        travel: ["TT Travels", "Times"],
        pop: ["Poppins", "sans-serif"],
      },
      textColor: {
        primary: "#191D29",
        hoverPrimary: "",
        secondary: "#14D9E5",
        greenL: "#9DFE00",
      },
      borderColor: {
        primary: "#191D29",
        hoverPrimary: "",
        secondary: "#14D9E5",
        greenL: "#9DFE00",
      },
      backgroundColor: {
        primary: "#191D29",
        hoverPrimary: "",
        secondary: "#14D9E5",
        greenL: "#9DFE00",
        ellipse: "#2A3E84",
      },
      keyframes: {
        popUp: {
          "0%": { opacity: "0", transform: "scale(10%)" },
          "70%": { opacity: ".9", transform: "scale(110%)" },
          "100%": { opacity: "1", transform: "scale(100%)" },
        },
        popDown: {
          "0%": { opacity: "0", transform: "scale(120%)" },
          "100%": { opacity: "1", transform: "scale(100%)" },
        },
        smooth: {
          "0%": { opacity: "0", display: "hidden" },
          "100%": { opacity: "1", display: "block" },
        },
      },
      borderRadius: {
        lg: "20px",
      },
    },
  },
  plugins: [],
};
