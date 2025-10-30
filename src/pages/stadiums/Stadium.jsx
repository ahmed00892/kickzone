import { Link } from "react-router-dom";
import { stadiumsData } from "./data";
import { Button } from "@material-tailwind/react";

export default function Stadiums() {
  const fullStadiums = stadiumsData.filter((s) => s.type === "11vs11");
  const miniPitches = stadiumsData.filter((s) => s.type === "5vs5");

  const renderCards = (stadiums) =>
    stadiums.map((s) => (
      <div
        key={s.id}
        className="bg-white rounded-2xl shadow-lg p-4 pb-6 flex flex-col justify-between"
      >
        <img
          src={s.image}
          alt={s.name}
          className={`w-full h-52 object-cover ${s.imageClass}`}
        />
        <div className="p-4 flex flex-col justify-between h-48">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{s.name}</h3>
            <p className="text-sm text-gray-500">{s.location}</p>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
              {s.description}
            </p>
          </div>

          <div className="flex justify-between items-center mt-3">
            <div className="text-blue-600 font-semibold">
              ${s.price}.00 / hour
            </div>
            <div className="text-black-500">⭐ {s.rating}</div>
          </div>

          {/* ✅ BOOK NOW button navigates to stadium details or booking page */}
          <Link to={`/addstadium/${s.id}`}>
            <div className="flex justify-center items-center mt-4 mb-3">
              <button
                className="w-full bg-brand-green text-white py-2.5 rounded-xl shadow-md 
                hover:bg-brand-green/90 hover:scale-[1.03] hover:shadow-lg hover:-translate-y-0.5 
                active:scale-95 transition-all duration-200 font-open-sans"
              >
                BOOK NOW
              </button>
            </div>
          </Link>
        </div>
      </div>
    ));

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* ✅ Add Stadium Button */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Stadiums</h1>

        {/* ✅ Navigates to /addstadium page */}
        <Link to="/addstadium">
          <Button
            color="green"
            className="bg-brand-green text-white font-semibold px-6 py-2 rounded-xl 
            shadow-md hover:bg-brand-green/90 hover:shadow-lg transition-all duration-200"
          >
            + Add Stadium
          </Button>
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-6 text-gray-800">11vs11 Pitches</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {renderCards(fullStadiums)}
      </div>

      <h1 className="text-3xl font-bold mb-6 text-gray-800">5vs5 Pitches</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {renderCards(miniPitches)}
      </div>
    </div>
  );
}
