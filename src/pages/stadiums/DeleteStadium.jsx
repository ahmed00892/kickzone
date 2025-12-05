import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Typography,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { TrashIcon, EyeIcon } from "@heroicons/react/24/solid";

function DeleteStadium() {
  const navigate = useNavigate();
  const [stadiums, setStadiums] = useState([]);
  const [selectedStadium, setSelectedStadium] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [previewDialog, setPreviewDialog] = useState(false);

  // Fetch stadiums from API or use local data
  useEffect(() => {
    // For now, using local data. Replace with API call if needed
    const fetchStadiums = async () => {
      setLoading(true);
      try {
        // Replace with actual API call
        // const response = await axios.get("https://kickzonebe.vercel.app/api/stadiums");
        // setStadiums(response.data);

        // Using local data for demonstration
        const localStadiums = [
          {
            id: 1,
            name: "Green Turf Stadium",
            location: "Cairo",
            price: 56,
            rating: 5.0,
            image:
              "https://mir-s3-cdn-cf.behance.net/project_modules/fs/e8b88258143373.59f0e4958094d.jpg",
            description:
              "Enjoy a professional-grade football field with night lighting and clean facilities.",
          },
          {
            id: 2,
            name: "Sunny Field",
            location: "Giza",
            price: 45,
            rating: 4.8,
            image:
              "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/d8f9d7125017935.6110d0d3b3313.jpg",
            description:
              "Perfect for 5-a-side games with synthetic grass, modern lighting.",
          },
          {
            id: 3,
            name: "Victory Field",
            location: "Alexandria",
            price: 30,
            rating: 4.9,
            image:
              "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/de3d39125017935.6110d0d3b488c.jpg",
            description:
              "Open football field with fresh grass, perfect for casual matches.",
          },
        ];
        setStadiums(localStadiums);
      } catch (error) {
        console.error("Error fetching stadiums:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStadiums();
  }, []);

  const handleDelete = async (stadiumId) => {
    try {
      // Replace with actual API call
      // await axios.delete(`https://kickzonebe.vercel.app/api/stadiums/${stadiumId}`);

      console.log(`Deleting stadium ${stadiumId}`);
      // Remove from local state
      setStadiums(stadiums.filter((stadium) => stadium.id !== stadiumId));
      alert("Stadium deleted successfully!");
    } catch (error) {
      console.error("Error deleting stadium:", error);
      alert("Failed to delete stadium.");
    } finally {
      setOpenDeleteDialog(false);
      setSelectedStadium(null);
    }
  };

  const handlePreview = (stadium) => {
    setSelectedStadium(stadium);
    setPreviewDialog(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg flex items-center justify-center">
        <Typography className="dark:text-white">Loading stadiums...</Typography>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Typography
            variant="h3"
            className="font-bold text-gray-800 dark:text-dark-text mb-2"
          >
            Delete Stadium
          </Typography>
          <Typography className="text-gray-600 dark:text-dark-text/70">
            Select a stadium to delete. This action cannot be undone.
          </Typography>
        </div>

        {stadiums.length === 0 ? (
          <Card className="dark:bg-dark-surface p-8 text-center">
            <Typography className="dark:text-dark-text mb-4">
              No stadiums found.
            </Typography>
            <Button
              onClick={() => navigate("/addstadium")}
              className="bg-brand-green dark:bg-dark-accent"
            >
              Add New Stadium
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stadiums.map((stadium) => (
              <Card
                key={stadium.id}
                className="dark:bg-dark-surface overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={stadium.image}
                    alt={stadium.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                <div className="p-5">
                  <Typography
                    variant="h5"
                    className="font-bold text-gray-800 dark:text-dark-text mb-2"
                  >
                    {stadium.name}
                  </Typography>

                  <Typography className="text-gray-600 dark:text-dark-text/70 mb-2">
                    📍 {stadium.location}
                  </Typography>

                  <div className="flex justify-between items-center mb-4">
                    <Typography className="font-semibold text-blue-600 dark:text-dark-accent">
                      ${stadium.price}/hour
                    </Typography>
                    <Typography className="text-yellow-600 dark:text-yellow-400">
                      ⭐ {stadium.rating}
                    </Typography>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button
                      variant="outlined"
                      color="blue"
                      className="flex items-center gap-2 flex-1"
                      onClick={() => handlePreview(stadium)}
                    >
                      <EyeIcon className="h-4 w-4" />
                      Preview
                    </Button>

                    <Button
                      variant="gradient"
                      color="red"
                      className="flex items-center gap-2 flex-1"
                      onClick={() => {
                        setSelectedStadium(stadium);
                        setOpenDeleteDialog(true);
                      }}
                    >
                      <TrashIcon className="h-4 w-4" />
                      Delete
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Preview Dialog */}
        <Dialog
          open={previewDialog}
          handler={() => setPreviewDialog(false)}
          className="dark:bg-dark-surface"
        >
          <DialogHeader className="dark:text-dark-text">
            {selectedStadium?.name} - Preview
          </DialogHeader>
          <DialogBody className="dark:text-dark-text">
            {selectedStadium && (
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={selectedStadium.image}
                    alt={selectedStadium.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div>
                  <Typography className="font-semibold">Location:</Typography>
                  <Typography>{selectedStadium.location}</Typography>
                </div>
                <div>
                  <Typography className="font-semibold">Price:</Typography>
                  <Typography>${selectedStadium.price} / hour</Typography>
                </div>
                <div>
                  <Typography className="font-semibold">Rating:</Typography>
                  <Typography>⭐ {selectedStadium.rating}</Typography>
                </div>
                <div>
                  <Typography className="font-semibold">
                    Description:
                  </Typography>
                  <Typography>{selectedStadium.description}</Typography>
                </div>
              </div>
            )}
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={() => setPreviewDialog(false)}
              className="mr-2"
            >
              <span>Close</span>
            </Button>
          </DialogFooter>
        </Dialog>

        {/* Delete Confirmation Dialog */}
        <Dialog
          open={openDeleteDialog}
          handler={() => setOpenDeleteDialog(false)}
          className="dark:bg-dark-surface"
        >
          <DialogHeader className="dark:text-dark-text">
            Confirm Deletion
          </DialogHeader>
          <DialogBody className="dark:text-dark-text">
            <Typography>
              Are you sure you want to delete{" "}
              <span className="font-bold text-red-600">
                {selectedStadium?.name}
              </span>
              ? This action cannot be undone.
            </Typography>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="blue-gray"
              onClick={() => setOpenDeleteDialog(false)}
              className="mr-2"
            >
              Cancel
            </Button>
            <Button
              variant="gradient"
              color="red"
              onClick={() => handleDelete(selectedStadium.id)}
            >
              Delete Stadium
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </div>
  );
}

export default DeleteStadium;
