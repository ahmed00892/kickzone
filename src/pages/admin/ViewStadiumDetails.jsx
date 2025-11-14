import { useParams } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";

function ViewStadiumDetails() {
  const { id } = useParams();
  const [stadium, setStadium] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:7000/stadiums/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch stadium details");
        return res.json();
      })
      .then((data) => setStadium(data.data))
      .catch((err) => setError(err.message));
  }, [id]);

  if (error)
    return (
      <Typography className="text-center mt-20 text-red-600">
        Error: {error}
      </Typography>
    );
  if (!stadium)
    return (
      <Typography className="text-center mt-20">Stadium not found!</Typography>
    );

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center gap-10 rounded-2xl shadow-[0_6px_25px_rgba(128,128,128,0.6)] hover:shadow-[0_8px_35px_rgba(128,128,128,0.7)] transition-all duration-500 transform hover:-translate-y-2 bg-white p-6">
        
       
        <div className="overflow-hidden rounded-2xl w-full md:w-1/2 h-[350px]">
          <img
            src={stadium.image || "/homeImages/stade.jpeg"}
            alt={stadium.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-95"
          />
        </div>

    
        <div className="flex-1 space-y-4">
          <Typography variant="h4" className="font-bold text-blue-gray-800">
            {stadium.name}, {stadium.location}
          </Typography>

          <Typography color="gray">
            👥 Capacity: {stadium.capacity ?? "N/A"}
          </Typography>

          <Typography color="gray">
            💰 Price: ${stadium.price.toFixed(2)} / hour
          </Typography>

          <Typography color="gray">
            ⭐ Rating: {stadium.rating ?? 0}
          </Typography>

          <Typography className="text-gray-700">
            {stadium.description || "No description available."}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default ViewStadiumDetails;
