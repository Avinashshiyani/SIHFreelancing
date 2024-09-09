/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-card":
          "0px 3px 7px rgba(0, 0, 0, 0.09), 0px 0.37px 4.42626px rgba(0, 0, 0, 0.0476886), 0px 0.14px 2.29266px rgba(0, 0, 0, 0.0323114)",
      },
    },
  },
  plugins: [],
};
