import { Link } from "react-router-dom";
import { stadiumsData } from "./data";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import { TrashIcon, PencilIcon, EyeIcon } from "@heroicons/react/24/solid";

export default function Stadiums() {
  // Check if user is admin
  const { user } = useAuth();
  const isAdmin = user?.role === "admin" || user?.isAdmin === true;
  
  // State management
  const [stadiums, setStadiums] = useState(stadiumsData);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [stadiumToDelete, setStadiumToDelete] = useState(null);
  const [previewDialogOpen, setPreviewDialogOpen] = useState(false);
  const [stadiumToPreview, setStadiumToPreview] = useState(null);

  // Filter stadiums by type
  const fullStadiums = stadiums.filter((s) => s.type === "11vs11");
  const miniPitches = stadiums.filter((s) => s.type === "5vs5");

  const handleDeleteClick = (stadium) => {
    setStadiumToDelete(stadium);
    setDeleteDialogOpen(true);
  };

  const handlePreviewClick = (stadium) => {
    setStadiumToPreview(stadium);
    setPreviewDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    if (stadiumToDelete) {
      // Remove stadium from the list
      const updatedStadiums = stadiums.filter(s => s.id !== stadiumToDelete.id);
      setStadiums(updatedStadiums);
      
      // Here you would also make an API call to delete from backend
      // axios.delete(`https://kickzonebe.vercel.app/api/stadiums/${stadiumToDelete.id}`)
      
      alert(`${stadiumToDelete.name} has been deleted successfully!`);
      setDeleteDialogOpen(false);
      setStadiumToDelete(null);
    }
  };

  const renderCards = (stadiums) =>
    stadiums.map((s) => (
      <div
        key={s.id}
        className="
          bg-white dark:bg-dark-surface 
          rounded-2xl shadow-lg dark:shadow-xl dark:shadow-black/20
          p-4 pb-6 flex flex-col justify-between
          border border-gray-100 dark:border-dark-text/10
          hover:shadow-xl dark:hover:shadow-black/30 transition-shadow duration-300
          relative group
        "
      >
        {/* Admin Actions Overlay */}
        {isAdmin && (
          <div className="absolute top-3 right-3 flex gap-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
              onClick={() => handlePreviewClick(s)}
              className="
                bg-blue-500 dark:bg-blue-600 text-white p-2 rounded-full
                hover:bg-blue-600 dark:hover:bg-blue-700 
                transition-all duration-200 shadow-lg
                flex items-center justify-center
              "
              title="Preview Stadium"
            >
              <EyeIcon className="h-4 w-4" />
            </button>
            
            <Link to={`/editstadium/${s.id}`}>
              <button
                className="
                  bg-green-500 dark:bg-green-600 text-white p-2 rounded-full
                  hover:bg-green-600 dark:hover:bg-green-700 
                  transition-all duration-200 shadow-lg
                  flex items-center justify-center
                "
                title="Edit Stadium"
              >
                <PencilIcon className="h-4 w-4" />
              </button>
            </Link>
            
            <button
              onClick={() => handleDeleteClick(s)}
              className="
                bg-red-500 dark:bg-red-600 text-white p-2 rounded-full
                hover:bg-red-600 dark:hover:bg-red-700 
                transition-all duration-200 shadow-lg
                flex items-center justify-center
              "
              title="Delete Stadium"
            >
              <TrashIcon className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Stadium Image */}
        <div className="overflow-hidden rounded-xl mb-4">
          <img
            src={s.image}
            alt={s.name}
            className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Stadium Info */}
        <div className="p-2 flex flex-col justify-between flex-grow">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-dark-text">
              {s.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-dark-text/70 mt-1">
              📍 {s.location}
            </p>
            <p className="text-sm text-gray-600 dark:text-dark-text/80 mt-2 line-clamp-2">
              {s.description}
            </p>
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="text-blue-600 dark:text-dark-accent font-semibold">
              ${s.price}.00 / hour
            </div>
            <div className="flex items-center text-yellow-600 dark:text-yellow-400">
              <span className="mr-1">⭐</span>
              {s.rating}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 space-y-2">
            <Link to={`/stadiums/${s.id}`}>
              <button
                className="
                  w-full bg-brand-green dark:bg-dark-accent 
                  text-white py-2.5 rounded-xl shadow-md 
                  hover:bg-brand-green/90 dark:hover:bg-dark-accent/90 
                  hover:scale-[1.02] hover:shadow-lg 
                  active:scale-95 transition-all duration-200 font-open-sans
                "
              >
                BOOK NOW
              </button>
            </Link>
            
            {/* Additional Admin Actions at bottom */}
            {isAdmin && (
              <div className="flex gap-2">
                <button
                  onClick={() => handlePreviewClick(s)}
                  className="
                    flex-1 bg-blue-500 dark:bg-blue-600 
                    text-white py-2 rounded-lg 
                    hover:bg-blue-600 dark:hover:bg-blue-700 
                    transition-all duration-200 text-sm flex items-center justify-center gap-1
                  "
                >
                  <EyeIcon className="h-3 w-3" />
                  Preview
                </button>
                
                <Link to={`/editstadium/${s.id}`} className="flex-1">
                  <button
                    className="
                      w-full bg-green-500 dark:bg-green-600 
                      text-white py-2 rounded-lg 
                      hover:bg-green-600 dark:hover:bg-green-700 
                      transition-all duration-200 text-sm flex items-center justify-center gap-1
                    "
                  >
                    <PencilIcon className="h-3 w-3" />
                    Edit
                  </button>
                </Link>
                
                <button
                  onClick={() => handleDeleteClick(s)}
                  className="
                    flex-1 bg-red-500 dark:bg-red-600 
                    text-white py-2 rounded-lg 
                    hover:bg-red-600 dark:hover:bg-red-700 
                    transition-all duration-200 text-sm flex items-center justify-center gap-1
                  "
                >
                  <TrashIcon className="h-3 w-3" />
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    ));

  return (
    <>
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-dark-text">
                Stadiums
              </h1>
              <p className="text-gray-600 dark:text-dark-text/70 mt-1">
                Find and book your perfect football pitch
              </p>
            </div>

            {isAdmin && (
              <div className="flex flex-wrap gap-3">
                <Link to="/addstadium">
                  <Button
                    className="
                      bg-brand-green dark:bg-dark-accent text-white font-semibold 
                      px-6 py-2.5 rounded-xl shadow-md 
                      hover:bg-brand-green/90 dark:hover:bg-dark-accent/90 
                      hover:shadow-lg transition-all duration-200 flex items-center gap-2
                    "
                  >
                    <span className="text-lg">+</span> Add Stadium
                  </Button>
                </Link>
                
                <Link to="/deletestadium">
                  <Button
                    color="red"
                    className="
                      bg-red-500 dark:bg-red-600 text-white font-semibold 
                      px-6 py-2.5 rounded-xl shadow-md 
                      hover:bg-red-600 dark:hover:bg-red-700 
                      hover:shadow-lg transition-all duration-200 flex items-center gap-2
                    "
                  >
                    <TrashIcon className="h-4 w-4" />
                    Manage Stadiums
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* 11vs11 Pitches Section */}
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-dark-text">
            11vs11 Pitches
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {renderCards(fullStadiums)}
          </div>

          {/* 5vs5 Pitches Section */}
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-dark-text">
            5vs5 Pitches
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderCards(miniPitches)}
          </div>
        </div>
      </div>

      {/* Preview Dialog */}
      <Dialog
        open={previewDialogOpen}
        handler={() => setPreviewDialogOpen(false)}
        className="dark:bg-dark-surface"
      >
        <DialogHeader className="dark:text-dark-text">
          {stadiumToPreview?.name} - Preview
        </DialogHeader>
        <DialogBody className="dark:text-dark-text">
          {stadiumToPreview && (
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={stadiumToPreview.image}
                  alt={stadiumToPreview.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div>
                <Typography className="font-semibold">Location:</Typography>
                <Typography>📍 {stadiumToPreview.location}</Typography>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Typography className="font-semibold">Price:</Typography>
                  <Typography className="text-green-600 dark:text-green-400">
                    ${stadiumToPreview.price} / hour
                  </Typography>
                </div>
                <div>
                  <Typography className="font-semibold">Rating:</Typography>
                  <Typography className="text-yellow-600 dark:text-yellow-400">
                    ⭐ {stadiumToPreview.rating}
                  </Typography>
                </div>
              </div>
              <div>
                <Typography className="font-semibold">Type:</Typography>
                <Typography>{stadiumToPreview.type}</Typography>
              </div>
              <div>
                <Typography className="font-semibold">Description:</Typography>
                <Typography className="text-gray-600 dark:text-dark-text/70">
                  {stadiumToPreview.description}
                </Typography>
              </div>
            </div>
          )}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="blue-gray"
            onClick={() => setPreviewDialogOpen(false)}
            className="mr-2"
          >
            Close
          </Button>
          <Link to={`/editstadium/${stadiumToPreview?.id}`}>
            <Button
              color="green"
              className="flex items-center gap-2"
              onClick={() => setPreviewDialogOpen(false)}
            >
              <PencilIcon className="h-4 w-4" />
              Edit Stadium
            </Button>
          </Link>
        </DialogFooter>
      </Dialog>

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
          {stadiumToDelete && (
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={stadiumToDelete.image}
                  alt={stadiumToDelete.name}
                  className="w-full h-40 object-cover"
                />
              </div>
              <Typography className="font-semibold text-lg">
                Are you sure you want to delete this stadium?
              </Typography>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                <Typography className="font-bold text-red-600 dark:text-red-400">
                  {stadiumToDelete.name}
                </Typography>
                <Typography className="text-sm text-gray-600 dark:text-dark-text/70">
                  📍 {stadiumToDelete.location}
                </Typography>
                <Typography className="text-sm text-gray-600 dark:text-dark-text/70">
                  ⭐ {stadiumToDelete.rating} • ${stadiumToDelete.price}/hour
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
            onClick={handleConfirmDelete}
            className="flex items-center gap-2"
          >
            <TrashIcon className="h-4 w-4" />
            Delete Stadium
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
