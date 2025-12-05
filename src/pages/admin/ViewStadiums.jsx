import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Typography,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { TrashIcon, PencilIcon } from "@heroicons/react/24/solid";

function ViewStadiums() {
  const navigate = useNavigate();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedStadium, setSelectedStadium] = useState(null);

  const stadiums = [
    {
      id: 1,
      name: "Green Turf Stadium, Cairo",
      image: "/homeImages/stade.jpeg",
      location: "Cairo",
      price: 56,
      rating: 5.0,
      type: "11vs11",
    },
    {
      id: 2,
      name: "Sunny Field, Giza",
      image: "/homeImages/stade2.jpeg",
      location: "Giza",
      price: 45,
      rating: 4.8,
      type: "11vs11",
    },
    {
      id: 3,
      name: "Victory Field, Alexandria",
      image: "/homeImages/stade3.jpeg",
      location: "Alexandria",
      price: 30,
      rating: 4.9,
      type: "11vs11",
    },
  ];

  const handleDelete = (stadium) => {
    setSelectedStadium(stadium);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    // Handle delete logic here
    console.log("Deleting stadium:", selectedStadium);
    alert(`${selectedStadium.name} deleted successfully!`);
    setDeleteDialogOpen(false);
    setSelectedStadium(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-10 bg-light-bg dark:bg-dark-bg min-h-screen">
      <Typography
        variant="h3"
        color="blue-gray"
        className="mb-10 font-semibold text-center dark:text-dark-text"
      >
        All Stadiums
      </Typography>

      {/* Action Buttons */}
      <div className="flex justify-between mb-6">
        <div className="flex gap-3">
          <Button
            className="bg-green-600 text-white hover:bg-green-700"
            onClick={() => navigate("/addstadium")}
          >
            + Add Stadium
          </Button>
          <Button
            className="bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => navigate("/editstadium/1")}
          >
            <PencilIcon className="h-4 w-4 mr-2" />
            Edit Stadiums
          </Button>
        </div>
        
        <Button
          className="bg-red-600 text-white hover:bg-red-700"
          onClick={() => navigate("/deletestadium")}
        >
          <TrashIcon className="h-4 w-4 mr-2" />
          Delete Stadiums
        </Button>
      </div>

      {/* Stadiums Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {stadiums.map((stadium) => (
          <Card
            key={stadium.id}
            className="group shadow-lg hover:scale-105 transition-transform duration-300 rounded-2xl overflow-hidden dark:bg-dark-surface"
          >
            <CardHeader
              floated={false}
              className="h-56 overflow-hidden rounded-2xl"
            >
              <img
                src={stadium.image}
                alt={stadium.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" className="font-semibold text-center dark:text-dark-text">
                {stadium.name}
              </Typography>
              <div className="flex justify-between items-center mt-4">
                <Typography className="text-sm text-gray-600 dark:text-dark-text/70">
                  📍 {stadium.location}
                </Typography>
                <Typography className="text-sm font-semibold text-blue-600 dark:text-dark-accent">
                  ${stadium.price}/hour
                </Typography>
              </div>
            </CardBody>
            <CardFooter className="flex justify-center gap-3">
              <Button
                className="text-white/90 bg-brand-green hover:bg-green-400 text-sm"
                onClick={() => navigate(`/admin/stadiums/${stadium.id}`)}
              >
                Details
              </Button>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-sm"
                onClick={() => navigate(`/editstadium/${stadium.id}`)}
              >
                <PencilIcon className="h-3 w-3 mr-1" />
                Edit
              </Button>
              <Button
                className="bg-red-600 hover:bg-red-700 text-sm"
                onClick={() => handleDelete(stadium)}
              >
                <TrashIcon className="h-3 w-3 mr-1" />
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteDialogOpen}
        handler={() => setDeleteDialogOpen(false)}
        className="dark:bg-dark-surface"
      >
        <DialogHeader className="dark:text-dark-text">
          Confirm Deletion
        </DialogHeader>
        <DialogBody className="dark:text-dark-text">
          {selectedStadium && (
            <div className="space-y-4">
              <Typography>
                Are you sure you want to delete{" "}
                <span className="font-bold text-red-600">
                  {selectedStadium.name}
                </span>
                ?
              </Typography>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                <Typography className="text-sm">
                  📍 {selectedStadium.location}
                </Typography>
                <Typography className="text-sm">
                  ⭐ {selectedStadium.rating} • ${selectedStadium.price}/hour
                </Typography>
              </div>
              <Typography className="text-sm text-red-600 dark:text-red-400 font-semibold">
                ⚠️ This action cannot be undone!
              </Typography>
            </div>
          )}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="blue-gray"
            onClick={() => setDeleteDialogOpen(false)}
            className="mr-2"
          >
            Cancel
          </Button>
          <Button
            variant="gradient"
            color="red"
            onClick={confirmDelete}
          >
            Delete Stadium
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default ViewStadiums;
