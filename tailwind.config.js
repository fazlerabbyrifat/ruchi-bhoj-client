/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6ccfd1",

          secondary: "#d9ea8f",

          accent: "#8de8ba",

          neutral: "#261F33",

          "base-100": "#F8F8FC",

          info: "#65C4E2",

          success: "#36CE8A",

          warning: "#F68A1E",

          error: "#EE8377",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
