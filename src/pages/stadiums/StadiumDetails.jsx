import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { stadiumsData } from "./data";
import { useState } from "react";
import { useCart } from "../../context/CartContext";

export default function StadiumDetails() {
  const { id } = useParams();
  const stadium = stadiumsData.find((s) => s.id === parseInt(id));
  const [selectedHour, setSelectedHour] = useState([]);
  const [reservedHours, setReservedHours] = useState([]);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const hours = Array.from({ length: 16 }, (_, i) => `${8 + i}:00`);

  if (!stadium) {
    return (
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg flex flex-col justify-center items-center text-center p-6">
        <h2 className="text-2xl text-gray-700 dark:text-dark-text">
          Stadium not found.
        </h2>
        <Link to="/stadiums">
          <button className="mt-4 bg-blue-600 dark:bg-dark-accent text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-dark-accent/90 transition-colors">
            Back to Stadiums
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg pb-10">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <img
          src={stadium.image}
          alt={stadium.name}
          className="w-full h-96 object-cover rounded-2xl shadow-md mb-8"
        />

        <h1 className="text-3xl font-bold mb-2 text-gray-800 dark:text-dark-text">
          {stadium.name}
        </h1>

        <p className="text-gray-500 dark:text-dark-text/70 mb-1">
          {stadium.location}
        </p>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-yellow-500">⭐ {stadium.rating}</span>
          <span className="text-blue-600 dark:text-dark-accent font-semibold">
            ${stadium.price}.00 / hour
          </span>
        </div>

        <p className="text-gray-700 dark:text-dark-text/80 mb-8 leading-relaxed">
          {stadium.description}
        </p>

        <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-2xl shadow-inner">
          <label className="block mb-2 font-medium text-gray-700 dark:text-dark-text">
            Choose Reservation Hour:
          </label>
          <select
            multiple
            value={selectedHour}
            onChange={(e) =>
              setSelectedHour(
                Array.from(e.target.selectedOptions, (option) => option.value)
              )
            }
            className="border border-gray-300 dark:border-dark-text rounded-lg p-2 w-full mb-4 h-40 bg-white dark:bg-dark-surface text-gray-800 dark:text-dark-text"
          >
            <option value="">Select an hour...</option>
            {hours.map((hour, i) => (
              <option
                key={i}
                value={hour}
                disabled={reservedHours.includes(hour)}
              >
                {hour} {reservedHours.includes(hour) ? " (Reserved)" : ""}
              </option>
            ))}
          </select>

          <button
            className="bg-green-500 dark:bg-dark-accent text-white px-6 py-2 rounded-lg hover:bg-green-600 dark:hover:bg-dark-accent/90 transition-colors duration-200"
            onClick={() => {
              if (!selectedHour || selectedHour.length === 0) {
                alert("Please select at least one reservation hour!");
                return;
              }

              selectedHour.forEach((hour) => {
                addToCart({
                  stadiumId: stadium.id,
                  name: stadium.name,
                  hour,
                  price: stadium.price,
                  image: stadium.image,
                });
              });

              setReservedHours((prev) => [...prev, ...selectedHour]);
              alert(
                `Added ${selectedHour.length} reservation${
                  selectedHour.length > 1 ? "s" : ""
                } for ${stadium.name} to your cart!`
              );
              setSelectedHour([]);
            }}
          >
            Add to Cart
          </button>
        </div>

        <div className="mt-8 flex justify-start">
          <button
            onClick={() => navigate("/stadiums")}
            className="
              bg-brand-blue dark:bg-dark-accent text-white px-6 py-2.5 rounded-xl shadow-md
              hover:bg-brand-blue/90 dark:hover:bg-dark-accent/90
              hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-200 font-open-sans
            "
          >
            ← Back to Stadiums
          </button>
        </div>
      </div>
    </div>
  );
}
