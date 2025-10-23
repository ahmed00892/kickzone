// src/pages/EditProfile.jsx

import { useState } from "react";
import {
  Card,
  Input,
  Button,
  Typography,
  Select,
  Option,
  CardBody,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { CameraIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

// Receives user and onUpdateUser props from App.jsx
export function EditProfile({ user, onUpdateUser }) {
  // Form state is pre-filled with the current user data
  const [formData, setFormData] = useState(user);

  // Separate state for image previews
  const [avatarPreview, setAvatarPreview] = useState(user.avatar);
  const [coverPreview, setCoverPreview] = useState(user.coverPhoto);

  const navigate = useNavigate();

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
        // reader.result is the base64 Data URL string
        const base64String = reader.result;

        // Update the form data state with the new image string
        setFormData((prev) => ({ ...prev, [name]: base64String }));

        // Update the correct preview state
        if (name === "avatar") {
          setAvatarPreview(base64String);
        } else if (name === "coverPhoto") {
          setCoverPreview(base64String);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  // On submit, call the function from useAuth and redirect
  const handleSubmit = (e) => {
    e.preventDefault();
    const success = onUpdateUser(formData);
    if (success) {
      navigate("/userprofile/1"); // Go back to profile on success
    } else {
      alert("Error: Could not update profile.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-4xl mx-auto">
        <Link
          to="/userprofile/1"
          className="inline-flex items-center gap-2 text-brand-gray hover:text-brand-blue mb-2"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          <Typography className="font-open-sans font-medium">
            Back to Profile
          </Typography>
        </Link>

        <form onSubmit={handleSubmit}>
          <Card className="relative">
            {/* --- Cover Photo Uploader --- */}
            <div className="h-52 rounded-t-xl bg-gray-300">
              {coverPreview && (
                <img
                  src={coverPreview}
                  alt="Cover preview"
                  className="h-full w-full object-cover rounded-t-xl"
                />
              )}
              <label
                htmlFor="coverPhoto-upload"
                className="absolute top-4 right-4 bg-white/80 rounded-full p-2 cursor-pointer hover:bg-white"
              >
                <CameraIcon className="h-6 w-6 text-brand-blue" />
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
              <div className="relative h-32 w-32 rounded-full border-4 border-white bg-gray-200">
                {avatarPreview && (
                  <img
                    src={avatarPreview}
                    alt="Avatar preview"
                    className="h-full w-full object-cover rounded-full"
                  />
                )}
                <label
                  htmlFor="avatar-upload"
                  className="absolute bottom-1 right-1 bg-white/80 rounded-full p-2 cursor-pointer hover:bg-white shadow-md"
                >
                  <CameraIcon className="h-5 w-5 text-brand-blue" />
                  <input
                    id="avatar-upload"
                    name="avatar"
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
                className="font-bbh-sans-bartle text-brand-blue mb-6"
              >
                Edit Your Details
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  color="blue"
                  size="lg"
                />
                <Input
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  color="blue"
                  size="lg"
                  disabled // cant change email
                />
                <Input
                  label="Birthdate"
                  name="birthdate"
                  type="date"
                  value={formData.birthdate}
                  onChange={handleChange}
                  color="blue"
                  size="lg"
                />
                <Select
                  label="Favored Position"
                  name="position"
                  value={formData.position}
                  onChange={(value) => handleSelectChange("position", value)}
                  color="blue"
                  size="lg"
                >
                  <Option value="Goalkeeper">Goalkeeper</Option>
                  <Option value="Defender">Defender</Option>
                  <Option value="Midfielder">Midfielder</Option>
                  <Option value="Forward">Forward</Option>
                  <Option value="Any">Any</Option>
                </Select>
                <Select
                  label="Skill Level"
                  name="skillLevel"
                  value={formData.skillLevel}
                  onChange={(value) => handleSelectChange("skillLevel", value)}
                  color="blue"
                  size="lg"
                >
                  <Option value="Beginner">Beginner</Option>
                  <Option value="Intermediate">Intermediate</Option>
                  <Option value="Advanced">Advanced</Option>
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
                >
                  <Option value="Right">Right</Option>
                  <Option value="Left">Left</Option>
                  <Option value="Both">Both</Option>
                </Select>
              </div>
              <div className="mt-8 flex justify-end gap-4">
                <Link to="/userprofile/1">
                  <Button variant="outlined" color="gray">
                    Cancel
                  </Button>
                </Link>
                <Button type="submit" className="bg-brand-green">
                  Save Changes
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
