import React, { useState } from "react";

const EditStadium = () => {
  const [stadiumData, setStadiumData] = useState({
    name: "Cairo International Stadium",
    location: "Cairo, Egypt",
    capacity: "75000",
    yearBuilt: "1960",
    surface: "Natural Grass",
    owner: "Ministry of Youth and Sports",
    homeTeam: "Egypt National Team",
    rentPrice: "50000",
    facilities: ["Locker Rooms", "Gym", "Parking", "Restaurants"],
    description:
      "One of the largest stadiums in Africa and the Middle East, hosting major international events.",
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [newFacility, setNewFacility] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStadiumData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5000000) {
        alert("File size should be less than 5MB");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const addFacility = () => {
    if (
      newFacility.trim() &&
      !stadiumData.facilities.includes(newFacility.trim())
    ) {
      setStadiumData((prev) => ({
        ...prev,
        facilities: [...prev.facilities, newFacility.trim()],
      }));
      setNewFacility("");
    }
  };

  const removeFacility = (index) => {
    setStadiumData((prev) => ({
      ...prev,
      facilities: prev.facilities.filter((_, i) => i !== index),
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!stadiumData.name.trim()) {
      newErrors.name = "Stadium name is required";
    }

    if (!stadiumData.location.trim()) {
      newErrors.location = "Location is required";
    }

    if (!stadiumData.capacity || parseInt(stadiumData.capacity) <= 0) {
      newErrors.capacity = "Valid capacity is required";
    }

    if (
      !stadiumData.yearBuilt ||
      parseInt(stadiumData.yearBuilt) < 1800 ||
      parseInt(stadiumData.yearBuilt) > new Date().getFullYear()
    ) {
      newErrors.yearBuilt = "Valid year is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Saving stadium data:", stadiumData);
      setSuccessMessage("Stadium details saved successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Success Message */}
        {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {successMessage}
          </div>
        )}

        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Edit Stadium Details
          </h1>
          <p className="text-gray-600">
            Update stadium information and specifications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                📍 Basic Information
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Stadium Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={stadiumData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter stadium name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={stadiumData.location}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                      errors.location ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="City, Country"
                  />
                  {errors.location && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.location}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Stadium Specs */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Stadium Specifications
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Capacity
                  </label>
                  <input
                    type="number"
                    name="capacity"
                    value={stadiumData.capacity}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                      errors.capacity ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="50000"
                  />
                  {errors.capacity && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.capacity}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Year Built
                  </label>
                  <input
                    type="number"
                    name="yearBuilt"
                    value={stadiumData.yearBuilt}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                      errors.yearBuilt ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="2005"
                  />
                  {errors.yearBuilt && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.yearBuilt}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Surface Type
                  </label>
                  <select
                    name="surface"
                    value={stadiumData.surface}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="Natural Grass">Natural Grass</option>
                    <option value="Artificial Turf">Artificial Turf</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rent Price (per hour)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-500">
                      $
                    </span>
                    <input
                      type="number"
                      name="rentPrice"
                      value={stadiumData.rentPrice}
                      onChange={handleChange}
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="0"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Owner
                  </label>
                  <input
                    type="text"
                    name="owner"
                    value={stadiumData.owner}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Owner name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Home Team
                  </label>
                  <input
                    type="text"
                    name="homeTeam"
                    value={stadiumData.homeTeam}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Team name"
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Description
              </h2>
              <textarea
                name="description"
                value={stadiumData.description}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                placeholder="Enter detailed description..."
              />
              <p className="text-sm text-gray-500 mt-2">
                {stadiumData.description.length} characters
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Image Upload */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                🖼️ Stadium Image
              </h2>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 transition-colors">
                {imagePreview ? (
                  <div className="relative">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-40 object-cover rounded-lg mb-3"
                    />
                    <button
                      onClick={() => setImagePreview(null)}
                      className="absolute top-2 right-2 bg-red-500 text-white w-8 h-8 rounded-full hover:bg-red-600 flex items-center justify-center"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <div className="py-8">
                    <div className="text-5xl mb-2">☁️</div>
                    <p className="text-sm text-gray-600 mb-1">
                      Drag & drop or click to upload
                    </p>
                    <p className="text-xs text-gray-500">Max 5MB (JPG, PNG)</p>
                  </div>
                )}

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="img-upload"
                />
                <label htmlFor="img-upload">
                  <button
                    type="button"
                    onClick={() =>
                      document.getElementById("img-upload").click()
                    }
                    className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {imagePreview ? "Change Image" : "Select Image"}
                  </button>
                </label>
              </div>
            </div>

            {/* Facilities */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Facilities
              </h2>

              <div className="space-y-2 mb-4">
                {stadiumData.facilities.map((facility, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2 bg-green-50 border border-green-200 rounded-lg group hover:bg-green-100"
                  >
                    <span className="text-sm text-gray-700">✅ {facility}</span>
                    <button
                      onClick={() => removeFacility(idx)}
                      className="text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={newFacility}
                  onChange={(e) => setNewFacility(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addFacility()}
                  placeholder="Add facility"
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <button
                  onClick={addFacility}
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Save Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-md hover:shadow-lg"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditStadium;
