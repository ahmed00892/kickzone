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
    return <Typography>Stadium not found!</Typography>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div
        className="flex flex-col md:flex-row items-center gap-10 rounded-2xl 
        shadow-[0_6px_25px_rgba(128,128,128,0.6)] 
        hover:shadow-[0_8px_35px_rgba(128,128,128,0.7)]
        transition-all duration-500 transform hover:-translate-y-2 bg-white p-6"
      >
        
        <div className="overflow-hidden rounded-2xl w-full md:w-1/2 h-[350px]">
          <img
            src={stadium.image}
            alt={stadium.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-95"
          />
        </div>

      
        <div className="flex-1 space-y-4">
          <Typography variant="h4" className="font-bold text-blue-gray-800">
            {stadium.name}
          </Typography>

          <Typography color="gray">📍 {stadium.location}</Typography>
          <Typography color="gray">👥 Capacity: {stadium.capacity}</Typography>
          <Typography color="gray">
            💰 Price: ${stadium.price.toFixed(2)} / hour
          </Typography>
          <Typography color="gray">⭐ Rating: {stadium.rating}</Typography>

          <Typography className="text-gray-700">{stadium.description}</Typography>

          <div className="pt-4">
            <Button
              fullWidth
              className="text-white/90 bg-brand-green hover:bg-green-400 
              text-sm md:text-base transition-all duration-300
              hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminStadiumDetails;
