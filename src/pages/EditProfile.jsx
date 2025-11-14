import { useState, useEffect } from "react";
import {
  Card,
  Input,
  Button,
  Typography,
  Select,
  Option,
  CardBody,
} from "@material-tailwind/react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import {
  CameraIcon,
  ArrowLeftIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid";

import { useAuth } from "../context/AuthContext"; 

// --- API URL ---
const API_URL = "https://kickzonebe.vercel.app/api/v1";

export function EditProfile() {
  // --- GET DATA FROM CONTEXT ---
  const { user, token, updateUser, loading, isLoggedIn } = useAuth();

  // --- FORM STATE & PREVIEWS ---
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    favouritePosition: "",
    preferredFoot: "",
    profilePicture: "",
    coverPhoto: "",
  });
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // --- 1. LOAD USER DATA INTO FORM ---
  // This runs when the 'user' object is loaded from the context
  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        // Format date for <input type="date"> (YYYY-MM-DD)
        birthday: user.birthday
          ? new Date(user.birthday).toISOString().split("T")[0]
          : "",
        favouritePosition: user.favouritePosition || "",
        preferredFoot: user.preferredFoot || "",
        profilePicture: user.profilePicture || "",
        coverPhoto: user.coverPhoto || "",
      });
      setAvatarPreview(user.profilePicture);
      setCoverPreview(user.coverPhoto);
    }
  }, [user]); // Re-run if 'user' object changes

  // Handler for text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Special handler for Select component
  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handler for file (image) inputs
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      const file = files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result;

        // Update the form data state with the base64 string
        setFormData((prev) => ({ ...prev, [name]: base64String }));

        // Update the correct preview state
        if (name === "profilePicture") {
          setAvatarPreview(base64String);
        } else if (name === "coverPhoto") {
          setCoverPreview(base64String);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // --- 2. HANDLE SUBMIT (API CALL) ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/users/me`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          // Send the token for auth!
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update profile");
      }

      // --- SUCCESS! ---
      // 3. Update the global context with the new user data
      updateUser(data.user);
      navigate("/profile"); // Go back to profile on success
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // --- LOADING & AUTH CHECKS ---
  if (loading) {
    return (
      <div className="min-h-screen dark:bg-dark-bg flex items-center justify-center">
        <Typography className="dark:text-white">Loading...</Typography>
      </div>
    );
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 dark:bg-dark-bg">
      <div className="w-full max-w-4xl mx-auto">
        <Link
          to="/profile"
          className="inline-flex items-center gap-2 text-brand-gray hover:text-brand-blue mb-2 dark:text-dark-text dark:hover:text-white"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          <Typography className="font-open-sans font-medium">
            Back to Profile
          </Typography>
        </Link>

        <form onSubmit={handleSubmit}>
          <Card className="relative dark:bg-dark-surface">
            {/* --- Cover Photo Uploader --- */}
            <div className="h-52 rounded-t-xl bg-gray-300 dark:bg-dark-bg">
              {coverPreview && (
                <img
                  src={coverPreview}
                  alt="Cover preview"
                  className="h-full w-full object-cover rounded-t-xl"
                />
              )}
              <label
                htmlFor="coverPhoto-upload"
                className="absolute top-4 right-4 bg-white/80 rounded-full p-2 cursor-pointer hover:bg-white dark:bg-dark-surface/80 dark:hover:bg-dark-surface"
              >
                <CameraIcon className="h-6 w-6 text-brand-blue dark:text-dark-accent" />
                <input
                  id="coverPhoto-upload"
                  name="coverPhoto"
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={handleFileChange}
                />
              </label>
            </div>

            {/* --- Avatar Uploader --- */}
            <div className="relative -mt-20 mb-2 px-4">
              <div className="relative h-32 w-32 rounded-full border-4 border-white bg-gray-200 dark:border-dark-surface dark:bg-dark-bg">
                {avatarPreview && (
                  <img
                    src={avatarPreview}
                    alt="Avatar preview"
                    className="h-full w-full object-cover rounded-full"
                  />
                )}
                <label
                  htmlFor="avatar-upload"
                  className="absolute bottom-1 right-1 bg-white/80 rounded-full p-2 cursor-pointer hover:bg-white shadow-md dark:bg-dark-surface/80 dark:hover:bg-dark-surface"
                >
                  <CameraIcon className="h-5 w-5 text-brand-blue dark:text-dark-accent" />
                  <input
                    id="avatar-upload"
                    name="profilePicture" 
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>

            {/* --- Form Fields --- */}
            <CardBody className="p-6">
              <Typography
                variant="h5"
                className="font-bbh-sans-bartle text-brand-blue mb-6 dark:text-white"
              >
                Edit Your Details
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  color="blue"
                  size="lg"
                  className="dark:text-white"
                  labelProps={{ className: "dark:text-dark-text" }}
                />
                <Input
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  color="blue"
                  size="lg"
                  className="dark:text-white"
                  labelProps={{ className: "dark:text-dark-text" }}
                />

                <Input
                  label="Email"
                  name="email"
                  value={user ? user.email : ""} // Get email from 'user'
                  color="blue"
                  size="lg"
                  disabled // cant change email
                  className="dark:text-black" // Disabled text
                  labelProps={{ className: "dark:text-dark-text" }}
                />
                <Input
                  label="Birthdate"
                  name="birthday"
                  type="date"
                  value={formData.birthday}
                  onChange={handleChange}
                  color="blue"
                  size="lg"
                  className="dark:text-white"
                  labelProps={{ className: "dark:text-dark-text" }}
                />
                <Select
                  label="Favored Position"
                  name="favouritePosition"
                  value={formData.favouritePosition}
                  onChange={(value) =>
                    handleSelectChange("favouritePosition", value)
                  }
                  color="blue"
                  size="lg"
                  className="dark:text-white"
                  labelProps={{ className: "dark:text-dark-text" }}
                  menuProps={{
                    className: "dark:bg-dark-surface dark:border-dark-text/30",
                  }}
                >
                  <Option value="Goalkeeper" className="dark:text-dark-text dark:hover:bg-dark-bg">Goalkeeper</Option>
                  <Option value="Defender" className="dark:text-dark-text dark:hover:bg-dark-bg">Defender</Option>
                  <Option value="Midfielder" className="dark:text-dark-text dark:hover:bg-dark-bg">Midfielder</Option>
                  <Option value="Forward" className="dark:text-dark-text dark:hover:bg-dark-bg">Forward</Option>
                  <Option value="Any" className="dark:text-dark-text dark:hover:bg-dark-bg">Any</Option>
                </Select>

                <Select
                  label="Preferred Foot"
                  name="preferredFoot"
                  value={formData.preferredFoot}
                  onChange={(value) =>
                    handleSelectChange("preferredFoot", value)
                  }
                  color="blue"
                  size="lg"
                  className="dark:text-white"
                  labelProps={{ className: "dark:text-dark-text" }}
                  menuProps={{
                    className: "dark:bg-dark-surface dark:border-dark-text/30",
                  }}
                >
                  <Option value="Right" className="dark:text-dark-text dark:hover:bg-dark-bg">Right</Option>
                  <Option value="Left" className="dark:text-dark-text dark:hover:bg-dark-bg">Left</Option>
                  <Option value="Both" className="dark:text-dark-text dark:hover:bg-dark-bg">Both</Option>
                </Select>
              </div>

              {/* --- Error Display --- */}
              {error && (
                <div className="flex items-center gap-2 p-3 my-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-500/10">
                  <ExclamationCircleIcon className="w-5 h-5 text-red-500" />
                  <Typography
                    color="red"
                    className="font-open-sans font-medium dark:text-red-400"
                  >
                    {error}
                  </Typography>
                </div>
              )}

              <div className="mt-8 flex justify-end gap-4">
                <Link to="/profile">
                  <Button
                    variant="outlined"
                    color="gray"
                    className="dark:text-dark-text dark:border-dark-text/50 dark:hover:bg-dark-text/10"
                  >
                    Cancel
                  </Button>
                </Link>
                <Button
                  type="submit"
                  className="bg-brand-green dark:bg-dark-accent"
                  loading={isLoading}
                >
                  {isLoading ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </CardBody>
          </Card>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;