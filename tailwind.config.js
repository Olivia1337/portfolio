/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        header: ["Jedira-Regular"],
        subheader: ["Jedira-Italic"],
        text: ["Quity"],
        textlong: ["NobelUno-Regular"],
      },
    },
  },
  plugins: [],
};
