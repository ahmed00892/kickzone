import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

function Cards() {
  return (
    <section className="mt-14 px-4 sm:px-4 md:px-4 lg:px-4 py-8 md:py-10 max-w-[1200px] mx-auto">
    
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-blue mb-8 text-left ">
        KickZone Picks
      </h2>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </section>
  );
}

export default Cards;
