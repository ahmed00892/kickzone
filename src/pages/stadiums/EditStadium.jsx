import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditStadium = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    rating: "",
    price: "",
    description: "",
    image: "",
    availableHours: "",
    type: "11vs11",
  });

  // Fetch stadium data on component mount
  useEffect(() => {
    const fetchStadium = async () => {
      try {
        setLoading(true);
        // In production, you would fetch from your API
        // const response = await axios.get(`https://kickzonebe.vercel.app/api/stadiums/${id}`);
        
        // For demo, find stadium from local data
        const stadiumsData = [
          {
            id: 1,
            name: "Green Turf Stadium",
            location: "Cairo",
            type: "11vs11",
            description: "Enjoy a professional-grade football field with night lighting, clean facilities, and top-tier turf quality — perfect for full 11-a-side matches.",
            price: 56,
            rating: 5.0,
            image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/e8b88258143373.59f0e4958094d.jpg",
          },
          {
            id: 2,
            name: "Sunny Field",
            location: "Giza",
            type: "11vs11",
            description: "Perfect for 11-a-side games with synthetic grass, modern lighting, and seating for fans. Ideal for evening matches.",
            price: 45,
            rating: 4.8,
            image: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/d8f9d7125017935.6110d0d3b3313.jpg",
          },
          // Add more stadiums as needed
        ];

        const stadium = stadiumsData.find(s => s.id === parseInt(id)) || stadiumsData[0];
        
        setFormData({
          name: stadium.name || "",
          location: stadium.location || "",
          rating: stadium.rating || "",
          price: stadium.price || "",
          description: stadium.description || "",
          image: stadium.image || "",
          availableHours: stadium.availableHours || "8am-10pm",
          type: stadium.type || "11vs11",
        });
      } catch (error) {
        console.error("Error fetching stadium:", error);
        alert("Failed to load stadium data.");
      } finally {
        setLoading(false);
      }
    };

    fetchStadium();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (submitting) return;
    
    try {
      setSubmitting(true);
      
      // In production, you would update via API
      // await axios.put(`https://kickzonebe.vercel.app/api/stadiums/${id}`, formData);
      
      console.log("Updating stadium:", formData);
      alert("Stadium updated successfully!");
      
      // Navigate back to stadiums page
      setTimeout(() => {
        navigate("/stadiums");
      }, 1000);
      
    } catch (err) {
      console.error("Error updating stadium:", err);
      alert(err.response?.data?.message || "Failed to update stadium");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-green dark:border-dark-accent mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-dark-text">Loading stadium data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-dark-text mb-2">
            Edit Stadium
          </h1>
          <p className="text-gray-600 dark:text-dark-text/70">
            Update the details for {formData.name}
          </p>
        </div>

        <div className="bg-white dark:bg-dark-surface rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-dark-text mb-2">
                Stadium Name
              </label>
              <input
                type="text"
                name="name"
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
                  Price per Hour ($)
                </label>
                <input
                  type="number"
                  name="price"
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
                  Rating (0-5)
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max="5"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-text/30 rounded-lg 
                           focus:ring-2 focus:ring-brand-green dark:focus:ring-dark-accent 
                           focus:border-transparent outline-none transition
                           bg-white dark:bg-dark-surface text-gray-800 dark:text-dark-text"
                  required
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
                  value={formData.availableHours}
                  onChange={handleChange}
                  placeholder="e.g. 8am-10pm"
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
                value={formData.image}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-dark-text/30 rounded-lg 
                         focus:ring-2 focus:ring-brand-green dark:focus:ring-dark-accent 
                         focus:border-transparent outline-none transition
                         bg-white dark:bg-dark-surface text-gray-800 dark:text-dark-text"
                required
              />
              
              {/* Image Preview */}
              {formData.image && (
                <div className="mt-3">
                  <p className="text-sm text-gray-600 dark:text-dark-text/70 mb-2">Preview:</p>
                  <div className="overflow-hidden rounded-lg max-w-xs">
                    <img
                      src={formData.image}
                      alt="Preview"
                      className="w-full h-40 object-cover"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/400x200?text=Image+Not+Found";
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-4 pt-6">
              <button
                type="button"
                onClick={() => navigate("/stadiums")}
                className="flex-1 bg-gray-300 dark:bg-dark-text/20 text-gray-800 dark:text-dark-text 
                         font-semibold py-3 rounded-lg shadow-md hover:bg-gray-400 dark:hover:bg-dark-text/30 
                         transition-all duration-200 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Cancel
              </button>

              <button
                type="submit"
                disabled={submitting}
                className={`flex-1 bg-brand-green dark:bg-dark-accent text-white font-semibold 
                         py-3 rounded-lg shadow-md hover:bg-brand-green/90 dark:hover:bg-dark-accent/90 
                         hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2
                         ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {submitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Updating...
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Update Stadium
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditStadium;
