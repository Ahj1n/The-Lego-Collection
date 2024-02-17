/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./views/*.html"], // All .html files
  darkMode: true,
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ce00ff",

          secondary: "#ff4e00",

          accent: "#0000ff",

          neutral: "#26201d",

          "base-100": "#ffffe3",

          info: "#007bd1",

          success: "#71d352",

          warning: "#a04e00",

          error: "#d7323f",
        },
      },
    ],
  },
};
