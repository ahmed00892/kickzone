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
    <div className="max-w-7xl mx-auto px-8 py-10">
      <Typography
        variant="h3"
        color="blue-gray"
        className="mb-10 font-semibold text-center"
      >
        All Stadiums
      </Typography>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {stadiums.map((stadium) => (
          <Card
            key={stadium.id}
            className="group shadow-lg hover:scale-105 transition-transform duration-300 rounded-2xl overflow-hidden"
          >
            <CardHeader floated={false} className="h-56 overflow-hidden rounded-2xl">
              <img
                src={stadium.image}
                alt={stadium.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" className="font-semibold text-center">
                {stadium.name}
              </Typography>
            </CardBody>
            <CardFooter className="flex justify-center">
              <Button
                className="text-white/90 bg-brand-green hover:bg-green-400 text-sm"
                onClick={() => navigate(`/admin/stadiums/${stadium.id}`)}
              >
                Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ViewStadiums;
