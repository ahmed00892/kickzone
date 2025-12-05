import { useParams } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";

function AdminStadiumDetails() {
  const { id } = useParams();

  const stadiums = [
    {
      id: 1,
      name: "Green Turf Stadium, Cairo",
      rating: 5.0,
      location: "Cairo",
      capacity: "50,000",
      price: 56,
      image: "/homeImages/stade.jpeg",
      description:
        "Enjoy a professional-grade football field with night lighting and clean facilities.",
    },
    {
      id: 2,
      name: "Sunny Field, Giza",
      rating: 4.8,
      location: "Giza",
      capacity: "30,000",
      price: 45,
      image: "/homeImages/stade2.jpeg",
      description:
        "Perfect for 5-a-side games with synthetic grass, modern lighting, and seating area for fans.",
    },
    {
      id: 3,
      name: "Victory Field, Alexandria",
      rating: 4.9,
      location: "Alexandria",
      capacity: "40,000",
      price: 30,
      image: "/homeImages/stade3.jpeg",
      description:
        "Open football field with fresh grass, perfect for casual matches and training sessions.",
    },
  ];

  const stadium = stadiums.find((s) => s.id === parseInt(id));

  if (!stadium) {
    return (
      <div className="p-8 bg-light-bg dark:bg-dark-bg min-h-screen">
        <Typography className="text-gray-800 dark:text-dark-text">
          Stadium not found!
        </Typography>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-12">
      <div
        className="flex flex-col lg:flex-row items-center gap-6 md:gap-10 rounded-2xl 
        shadow-[0_6px_25px_rgba(128,128,128,0.2)] dark:shadow-[0_6px_25px_rgba(0,0,0,0.4)]
        hover:shadow-[0_8px_35px_rgba(128,128,128,0.3)] dark:hover:shadow-[0_8px_35px_rgba(0,0,0,0.5)]
        transition-all duration-500 transform hover:-translate-y-1 bg-white dark:bg-dark-surface p-4 md:p-6"
      >
        
        <div className="overflow-hidden rounded-2xl w-full lg:w-1/2 h-[250px] md:h-[350px]">
          <img
            src={stadium.image}
            alt={stadium.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-95"
          />
        </div>

        <div className="flex-1 space-y-3 md:space-y-4 w-full">
          <Typography 
            variant="h4" 
            className="font-bold text-blue-gray-800 dark:text-dark-text text-xl md:text-2xl lg:text-3xl"
          >
            {stadium.name}
          </Typography>

          <Typography className="text-gray-600 dark:text-dark-text/70 text-sm md:text-base">
            📍 {stadium.location}
          </Typography>
          <Typography className="text-gray-600 dark:text-dark-text/70 text-sm md:text-base">
            👥 Capacity: {stadium.capacity}
          </Typography>
          <Typography className="text-gray-600 dark:text-dark-text/70 text-sm md:text-base">
            💰 Price: ${stadium.price.toFixed(2)} / hour
          </Typography>
          <Typography className="text-gray-600 dark:text-dark-text/70 text-sm md:text-base">
            ⭐ Rating: {stadium.rating}
          </Typography>

          <Typography className="text-gray-700 dark:text-dark-text/90 text-sm md:text-base">
            {stadium.description}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default AdminStadiumDetails;
