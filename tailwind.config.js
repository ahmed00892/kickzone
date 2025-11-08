import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkmode: "class",
  theme: {
    extend: {
      colors: {
        // light: {
        "brand-green": "#94c840",
        "brand-blue": "#1b4489",
        "brand-gray": "#666666",
        

        'dark-bg': '#0f1f0f',       
        'dark-surface': '#1a2e1a', 
        'dark-text': '#e0e0e0',     
        'dark-accent': '#94c840',   
      },
      fontFamily: {
        "bbh-sans-bartle": ['"BBH Sans Bartle"', "sans-serif"],
        "open-sans": ['"Open Sans"', "sans-serif"],
      },
      backgroundImage: {
        home: "url('/homeImages/home.jpeg')",
        stade: "url('/homeImages/stade.jpeg')",
        stade2: "url('/homeImages/stade2.jpeg')",
        stade3: "url('/homeImages/stade3.jpeg')",
        about: "url('/homeImages/about.jpg')",
        information: "url('/homeImages/information.jpg')",
        "contact-bg": "url('/ball.jpeg')",
        "about-bg": "url('/ball.jpeg')",
      },
    },
  },
  plugins: [],
});
