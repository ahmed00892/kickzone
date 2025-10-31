import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

function Content() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 text-center lg:text-left">
      <h1 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-4">
        About Us
      </h1>

      <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-6">
        KickZone is the leading football pitch booking platform and online
        football gear shop.
      </h2>

      <div className="flex justify-center lg:justify-start gap-2 mb-6">
        <span className="w-3 h-3 bg-brand-green rounded-full"></span>
        <span className="w-3 h-3 bg-brand-green rounded-full"></span>
        <span className="w-3 h-3 bg-brand-green rounded-full"></span>
        <span className="w-3 h-3 bg-brand-green rounded-full"></span>
        <span className="w-3 h-3 bg-brand-green rounded-full"></span>
      </div>

      <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
        KickZone is your ultimate destination for football lovers. Our advanced
        pitch reservation system and high-quality sports equipment cater to
        players of all levels. With multiple well-maintained pitches, a cozy
        café, and a friendly team ready to assist, we deliver an exceptional
        football experience every time you play.
      </p>

      <Button
        className="text-white/90 bg-brand-green hover:bg-green-400 
                   text-sm sm:text-base transition-all duration-300 
                   hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
        onClick={() => navigate("/about")}
      >
        Learn More
      </Button>
    </div>
  );
}

export default Content;
