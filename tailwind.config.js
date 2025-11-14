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
        home: "url('/homeImages/home.png')",
        stade: "url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/e8b88258143373.59f0e4958094d.jpg')",
        stade2: "url('https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/d8f9d7125017935.6110d0d3b3313.jpg')",
        stade3: "url('https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/de3d39125017935.6110d0d3b488c.jpg')",
        about: "url('/homeImages/about.jpg')",
        information: "url('https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/42e81a206310969.66ca33252f3be.jpg')",
        "contact-bg": "url('/ball.jpeg')",
        "about-bg": "url('/ball.jpeg')",
      },
    },
  },
  plugins: [],
});
