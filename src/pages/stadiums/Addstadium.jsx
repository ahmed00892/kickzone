import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddStadium = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    rating: "",
    price: "",
    description: "",
    image: "",
    availableHours: "",
    type: "11vs11", // Added type field
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Uncomment when ready to use API
      // const res = await axios.post(
      //   "https://kickzonebe.vercel.app/api/stadiums",
      //   formData
      // );

      // For demo purposes
      console.log("Form submitted:", formData);
      alert("Stadium added successfully!");

      // Reset form
      setFormData({
        name: "",
        location: "",
        rating: "",
        price: "",
        description: "",
        image: "",
        availableHours: "",
        type: "11vs11",
      });

      // Navigate to stadiums page after success
      setTimeout(() => {
        navigate("/stadiums");
      }, 1500);
    } catch (err) {
      console.error("Error:", err);
      alert(err.response?.data?.message || "Failed to add stadium");
    }
  };

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white dark:bg-dark-surface rounded-2xl shadow-lg p-8">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-dark-text mb-8 text-center">
          Add New Stadium
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-dark-text mb-2">
              Stadium Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter stadium name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-dark-text/30 rounded-lg 
                       focus:ring-2 focus:ring-brand-green dark:focus:ring-dark-accent 
                       focus:border-transparent outline-none transition
                       bg-white dark:bg-dark-surface text-gray-800 dark:text-dark-text"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-dark-text mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="Enter location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-dark-text/30 rounded-lg 
                       focus:ring-2 focus:ring-brand-green dark:focus:ring-dark-accent 
                       focus:border-transparent outline-none transition
                       bg-white dark:bg-dark-surface text-gray-800 dark:text-dark-text"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-dark-text mb-2">
                Price per Hour
              </label>
              <input
                type="number"
                name="price"
                placeholder="e.g. 100"
                value={formData.price}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-dark-text/30 rounded-lg 
                         focus:ring-2 focus:ring-brand-green dark:focus:ring-dark-accent 
                         focus:border-transparent outline-none transition
                         bg-white dark:bg-dark-surface text-gray-800 dark:text-dark-text"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-dark-text mb-2">
                Rating (optional)
              </label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="5"
                name="rating"
                placeholder="e.g. 4.5"
                value={formData.rating}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-dark-text/30 rounded-lg 
                         focus:ring-2 focus:ring-brand-green dark:focus:ring-dark-accent 
                         focus:border-transparent outline-none transition
                         bg-white dark:bg-dark-surface text-gray-800 dark:text-dark-text"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-dark-text mb-2">
                Stadium Type
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-dark-text/30 rounded-lg 
                         focus:ring-2 focus:ring-brand-green dark:focus:ring-dark-accent 
                         focus:border-transparent outline-none transition
                         bg-white dark:bg-dark-surface text-gray-800 dark:text-dark-text"
              >
                <option value="11vs11">11vs11 Pitch</option>
                <option value="5vs5">5vs5 Pitch</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-dark-text mb-2">
                Available Hours
              </label>
              <input
                type="text"
                name="availableHours"
                placeholder="e.g. 5pm-10pm"
                value={formData.availableHours}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-dark-text/30 rounded-lg 
                         focus:ring-2 focus:ring-brand-green dark:focus:ring-dark-accent 
                         focus:border-transparent outline-none transition
                         bg-white dark:bg-dark-surface text-gray-800 dark:text-dark-text"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-dark-text mb-2">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Describe the stadium..."
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 dark:border-dark-text/30 rounded-lg 
                       focus:ring-2 focus:ring-brand-green dark:focus:ring-dark-accent 
                       focus:border-transparent outline-none transition resize-none
                       bg-white dark:bg-dark-surface text-gray-800 dark:text-dark-text"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-dark-text mb-2">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              placeholder="https://example.com/image.jpg"
              value={formData.image}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-dark-text/30 rounded-lg 
                       focus:ring-2 focus:ring-brand-green dark:focus:ring-dark-accent 
                       focus:border-transparent outline-none transition
                       bg-white dark:bg-dark-surface text-gray-800 dark:text-dark-text"
              required
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={() => navigate("/stadiums")}
              className="flex-1 bg-gray-300 dark:bg-dark-text/20 text-gray-800 dark:text-dark-text 
                       font-semibold py-3 rounded-lg shadow-md hover:bg-gray-400 dark:hover:bg-dark-text/30 
                       transition-all duration-200"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex-1 bg-brand-green dark:bg-dark-accent text-white font-semibold 
                       py-3 rounded-lg shadow-md hover:bg-brand-green/90 dark:hover:bg-dark-accent/90 
                       hover:shadow-lg transition-all duration-200"
            >
              Add Stadium
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStadium;
