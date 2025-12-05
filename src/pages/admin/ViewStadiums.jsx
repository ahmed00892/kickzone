import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

function ViewStadiums() {
  const navigate = useNavigate();

  const stadiums = [
    {
      id: 1,
      name: "Green Turf Stadium, Cairo",
      image: "/homeImages/stade.jpeg",
    },
    {
      id: 2,
      name: "Sunny Field, Giza",
      image: "/homeImages/stade2.jpeg",
    },
    {
      id: 3,
      name: "Victory Field, Alexandria",
      image: "/homeImages/stade3.jpeg",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
      <Typography
        variant="h3"
        className="mb-8 md:mb-10 font-semibold text-center text-2xl md:text-3xl text-gray-800 dark:text-dark-text"
      >
        All Stadiums
      </Typography>

      <div className="flex justify-end mb-6">
        <Button
          className="bg-gradient-to-r from-green-600 to-emerald-700 text-white hover:from-green-700 hover:to-emerald-800 text-sm md:text-base px-4 py-2 md:px-6 md:py-3"
          onClick={() => navigate("/addstadium")}
        >
          + Add Stadium
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {stadiums.map((stadium) => (
          <Card
            key={stadium.id}
            className="group shadow-lg hover:scale-[1.02] transition-transform duration-300 rounded-2xl overflow-hidden bg-white dark:bg-dark-surface"
          >
            <CardHeader
              floated={false}
              className="h-48 md:h-56 overflow-hidden rounded-2xl"
            >
              <img
                src={stadium.image}
                alt={stadium.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </CardHeader>
            <CardBody className="p-4 md:p-6">
              <Typography 
                variant="h5" 
                className="font-semibold text-center text-lg md:text-xl text-gray-800 dark:text-dark-text"
              >
                {stadium.name}
              </Typography>
            </CardBody>
            <CardFooter className="flex justify-center p-4 md:p-6 pt-0">
              <Button
                className="bg-gradient-to-r from-green-600 to-emerald-700 text-white hover:from-green-700 hover:to-emerald-800 text-sm md:text-base px-4 py-2"
                onClick={() => navigate(`/admin/stadiums/${stadium.id}`)}
              >
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ViewStadiums;
