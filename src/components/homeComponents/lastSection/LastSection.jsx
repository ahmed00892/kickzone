import LastImg from "./LastImg";
import Information from "./Information";

function LastSection() {
  return (
    <section
      className="flex flex-col lg:flex-row items-center justify-between 
                 max-w-[1200px] mx-auto px-6 py-16 gap-28 
                 mt-12 sm:mt-16 md:mt-20 lg:mt-24"
    >
      <LastImg />
      <Information />
    </section>
  );
}

export default LastSection;
