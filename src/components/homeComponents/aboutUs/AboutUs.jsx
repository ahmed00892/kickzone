import Img from "./Img";
import Content from "./Content";

function AboutUs() {
  return (
   <section className="flex flex-col lg:flex-row items-center justify-between 
  max-w-[1200px] mx-auto px-6 py-16 gap-20 
  mt-12 sm:mt-16 md:mt-20 lg:mt-24">
  <Content />
  <Img />
</section>

  );
}

export default AboutUs;
