import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          "brand-green": "#94c840",
          "brand-blue": "#1b4489",
          "brand-gray": "#666666",
        },
        dark: {
          "brand-green": "#3e5e10ff", // for background that was green or any text that was green
          "brand-blue": "#082348ff", // this for the large texts like "Kick Zone"or "Login"
          "brand-gray": "#262020ff", // as i used this in the header and footer
          backgroud: "#000000ff", // this for the background for home or login
          text: "#ffffffff", //----> this for you when you write in Home or Login as the background is dark
        },
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
