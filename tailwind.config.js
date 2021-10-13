const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: {
    enabled: true,
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./lib/editor/**/*.{js,ts,jsx,tsx}",
    ],
  },
  darkMode: "class",
  theme: {
    fontFamily: {
      mono: ["ui-monospace", "SFMono-Regular"],
      segoe: ["Segoe UI"],
      inter: ["Inter"],
    },
    lineClamp: {
      1: 1,
      2: 2,
      3: 3,
    },
    screens: {
      xxs: { min: "280px", max: "399px" },
      xs: { min: "400px", max: "639px" },
      sm: { min: "640px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px", max: "1500px" },
      xxl: { min: "1501px" },
    },
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      wait: "wait",
      text: "text",
      move: "move",
      "not-allowed": "not-allowed",
      crosshair: "crosshair",
      "zoom-in": "zoom-in",
      grab: "grab",
    },
    extend: {
      colors: {
        dark: "#191919",
        manDark: "#1a1b1e",
        manLightDark: "#25262b",
        manLightHover: "#F8F9FA",
        manDarkHover: "#2C2E33",
      },
      width: {
        "100px": "100px",
        "200px": "200px",
        "300px": "300px",
        "400px": "400px",
        "500px": "500px",
        "600px": "600px",
        "700px": "700px",
        "800px": "800px",
        "900px": "900px",
      },
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
    },
    objectPosition: {
      profileCover: "0px -151px",
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
      "center-bottom": "center bottom",
      "center-top": "center top",
    },
  },
  variants: {
    extend: {
      boxShadow: ["dark"],
    },
  },
  important: true,

  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
