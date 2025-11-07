import { Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

function Content() {
  const navigate = useNavigate();
  return (
    <div className="relative z-10 flex flex-col gap-6 text-center max-w-3xl mx-auto text-white/90">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        Kick Off Your Next Match with KickZone
      </h2>

      <Typography
        variant="lead"
        className="text-sm sm:text-base md:text-lg sm:px-6"
      >
        Discover and book football fields anytime, anywhere. Play your way with
        KickZone.
      </Typography>

      <div className="flex justify-center">
        <Button
          className="bg-brand-green hover:bg-green-400 transition-all duration-300 
             px-5 py-3 text-xs 
             sm:px-7 sm:py-3 sm:text-base 
             md:px-8 md:py-3 md:text-base 
             font-medium
             hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
          onClick={() => navigate("/stadiums")}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
}

export default Content;
