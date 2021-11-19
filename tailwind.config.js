module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bg_blue: {
          dark: "#141C2F",
          light: "#1F2A48",
        },
        bg_red: {
          light: "#F7D8BA",
        },
        bg_tracking: {
          main: "#E97649",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
