import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function ViewStadiums() {
  const navigate = useNavigate();
  const [stadiums, setStadiums] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:7000/stadiums")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch stadiums");
        return res.json();
      })
      .then((data) => setStadiums(data.data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return (
      <Typography className="text-center text-red-600 mt-20">
        Error: {error}
      </Typography>
    );
  }

  return (
    
    <div className="max-w-7xl mx-auto px-8 py-10">
      <div className="flex justify-end mb-6">
        <Button
          className="bg-green-600 text-white hover:bg-green-700"
          onClick={() => navigate("/addstadium")}
        >
          + Add Stadium
        </Button>
      </div>
      <Typography variant="h3" color="blue-gray" className="mb-10 font-semibold text-center">
        All Stadiums
      </Typography>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {stadiums.map((stadium) => (
          <Card
            key={stadium._id}
            className="group shadow-2xl hover:shadow-[0_10px_35px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-300 rounded-2xl overflow-hidden"
          >
            <CardHeader floated={false} className="h-56 overflow-hidden rounded-2xl">
              <img
                src={stadium.image}
                alt={stadium.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </CardHeader>

            <CardBody>
              <Typography className="font-bold text-center text-lg md:text-xl text-blue-gray-800">
                {stadium.name}, {stadium.location}
              </Typography>
            </CardBody>

            <CardFooter className="flex justify-center">
              <Button
                className="text-white/90 bg-brand-green hover:bg-green-400 text-sm"
                onClick={() => navigate(`/viewStadiums/${stadium._id}`)}
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
