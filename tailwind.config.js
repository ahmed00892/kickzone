const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkmode: "class",
  theme: {
    extend: {
      colors: {
        "brand-green": "#94c840",
        "brand-blue": "#1b4489",
        "brand-gray": "#666666",
        

        'dark-bg': '#0f1f0f',       
        'dark-surface': '#1a2e1a', 
        'dark-text': '#e0e0e0',     
        'dark-accent': '#94c840',   
      },
      fontFamily: {
        // Explicit font family names
        "bbh-sans-bartle": ['"BBH Sans Bartle"', "sans-serif"],
        "open-sans": ['"Open Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
});
