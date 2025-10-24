const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-green": "#94c840",
        "brand-blue": "#1b4489",
        "brand-gray": "#666666",
      },
      fontFamily: {
        // Explicit font family names
        "bbh-sans-bartle": ['"BBH Sans Bartle"', "sans-serif"],
        "open-sans": ['"Open Sans"', "sans-serif"],
      },
    },
    backgroundImage: {
      "contact-bg": "url('/ball.jpeg')",
      "about-bg": "url('/ball.jpeg')",
    },
  },
  plugins: [],
});
