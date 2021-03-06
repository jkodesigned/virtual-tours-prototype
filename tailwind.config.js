const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{ts,tsx,css}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      // Bohemian Forest
      bf: {
        0: "#9EEDAB",
        25: "#7BBA85",
        50: "#56855E",
        75: "#3F6442",
        100: "#274124",
      },
      // Skinny Neutral
      sn: {
        0: "#FFF6E0",
        25: "#F3E5C3",
        50: "#E5D3A5",
        75: "#CEBF97",
        100: "#B6AB89",
      },
      // Burned Brick
      bb: {
        0: "#FFDCCE",
        25: "#EEBCA7",
        50: "#DC9A7F",
        75: "#CB8163",
        100: "#BA6846",
      },
      // Grayscale Light
      gl: {
        0: "#FFFFFF",
        25: "#EDEDED",
        50: "#C8C8C8",
        75: "#A3A3A3",
        100: "#909090",
      },
      // Grayscale Dark
      gd: {
        0: "#777777",
        25: "#646464",
        50: "#4A4A4A",
        75: "#303030",
        100: "#000000",
      },
      // Bohemian Forest Gradient
      bfg: {
        start: "#3F5B41",
        stop: "#56855E",
      },
    },
    fontFamily: {
      sans: ["Quicksand", ...defaultTheme.fontFamily.sans],
      serif: ["Grenze Gotisch", ...defaultTheme.fontFamily.serif],
    },
    fontSize: {
      h1: ["32px", "32px"],
      h2: ["24px", "22px"],
      h3: ["18px", "20px"],
      h4: ["18px", "28px"],
      h5: ["18px", "28px"],
      h6: ["14px", "24px"],
      p1: ["14px", "28px"],
      p2: ["12px", "24px"],
    },
    extend: {
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
