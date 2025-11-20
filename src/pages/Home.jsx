import HeroSection from "../components/homeComponents/heroSection/HeroSection";
import Cards from "../components/homeComponents/playgroundCards/Cards";
import AboutUs from "../components/homeComponents/aboutUs/AboutUs";
import LastSection from "../components/homeComponents/lastSection/LastSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg">
      <HeroSection />
      <Cards />
      <AboutUs />
      <LastSection />
    </div>
  );
};
export default Home;
