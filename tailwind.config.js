/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        header: ["Jedira-Regular"],
        subheader: ["Jedira-Italic"],
        text: ["Quity"],
      },
      fontSize: {
        header: ["8em"],
        subheader: ["4em"],
        text: ["1.4em"],
      },
    },
  },
  plugins: [],
};
