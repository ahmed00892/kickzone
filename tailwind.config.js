import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-green": "#94c840",
        "brand-blue": "#1b4489",
        "brand-gray": "#666666",
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
        "contact-bg": "url('/public/ball.jpeg')",
      },
    },
  },
  plugins: [],
});
