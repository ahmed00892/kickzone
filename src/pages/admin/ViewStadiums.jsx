import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import {
  PencilIcon,
  TrashIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";

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

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this stadium?")) {
      // Implement delete logic here
      console.log("Delete stadium with id:", id);
      // In a real app, you would make an API call here
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/stadiums/edit/${id}`);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
      <Typography
        variant="h3"
        color="blue-gray"
        className="mb-8 md:mb-10 font-semibold text-center text-2xl md:text-3xl"
      >
        All Stadiums
      </Typography>

      <div className="flex justify-end mb-6">
        <Button
          className="bg-green-600 text-white hover:bg-green-700 text-sm md:text-base px-4 py-2 md:px-6 md:py-3"
          onClick={() => navigate("/addstadium")}
        >
          + Add Stadium
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {stadiums.map((stadium) => (
          <Card
            key={stadium.id}
            className="group shadow-lg hover:scale-[1.02] transition-transform duration-300 rounded-2xl overflow-hidden"
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
                className="font-semibold text-center text-lg md:text-xl"
              >
                {stadium.name}
              </Typography>
            </CardBody>
            <CardFooter className="flex justify-center gap-2 p-4 md:p-6 pt-0">
              <Button
                className="text-white/90 bg-brand-green hover:bg-green-400 text-sm md:text-base px-3 py-2 flex items-center gap-1"
                onClick={() => navigate(`/admin/stadiums/${stadium.id}`)}
              >
                <EyeIcon className="h-4 w-4" />
                View
              </Button>
              <Button
                className="text-white/90 bg-blue-600 hover:bg-blue-700 text-sm md:text-base px-3 py-2 flex items-center gap-1"
                onClick={() => handleEdit(stadium.id)}
              >
                <PencilIcon className="h-4 w-4" />
                Edit
              </Button>
              <Button
                className="text-white/90 bg-red-600 hover:bg-red-700 text-sm md:text-base px-3 py-2 flex items-center gap-1"
                onClick={() => handleDelete(stadium.id)}
              >
                <TrashIcon className="h-4 w-4" />
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ViewStadiums;
