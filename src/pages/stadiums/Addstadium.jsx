import React, { useState } from "react";
import axios from "axios";

const AddStadium = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    rating: "",
    price: "",
    description: "",
    image: "",
    availableHours: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://kickzonebe.vercel.app/api/stadiums",
        formData
      );
      alert("Stadium added successfully!");
      console.log(res.data);
    } catch (err) {
      alert(err.response.data.message);
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Add New Stadium
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Stadium Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter stadium name"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="Enter location"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Price per Hour
              </label>
              <input
                type="number"
                name="price"
                placeholder="e.g. 100"
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Rating (optional)
              </label>
              <input
                type="number"
                name="rating"
                placeholder="e.g. 4.5"
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Describe the stadium..."
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition resize-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              placeholder="https://example.com/image.jpg"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Available Hours
            </label>
            <input
              type="text"
              name="availableHours"
              placeholder="e.g. 5pm-10pm"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-brand-green text-white font-semibold py-3 rounded-lg shadow-md hover:bg-brand-green/90 hover:shadow-lg active:scale-95 transition-all duration-200 mt-8"
          >
            Add Stadium
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStadium;
