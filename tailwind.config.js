module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: {
          A700: "#ffffff",
          A700_14: "#ffffff14",
          A700_cc: "#ffffffcc",
          A700_7e: "#ffffff7e",
          A700_e5: "#ffffffe5",
        },
        black: { 900: "#010d00", "900_14": "#010d0014" },
        red: { A400: "#f21d44" },
        gray: {
          300: "#e4e4e4",
          400: "#bababa",
          500: "#979797",
          700: "#606060",
          800: "#343746",
          900: "#18001f",
          "900_03": "#0e1523",
          "900_02": "#0e152b",
          "900_7e": "#0e15237e",
          "900_01": "#0e132b",
          "400_7e": "#bababa7e",
          "900_04": "#292929",
        },
      },
      boxShadow: {},
      fontFamily: { robotoslab: "Roboto Slab", poppins: "Poppins" },
      backgroundImage: {
        gradient: "linear-gradient(to right #000000,#ffffff)",
        gradient1: "linear-gradient(to right #000000cc,#00000000,#00000000)",
        gradient2: "linear-gradient(to right #000000b2,#00000000,#00000000)",
      },
      opacity: { 0.4: 0.4 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
