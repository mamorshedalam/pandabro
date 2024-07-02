module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Roboto", "ui-sans-serif", "system-ui"],
      kanit: ["Kanit", "ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
    },
    screens: {
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1400px",
    },
  },
  plugins: [],
};
