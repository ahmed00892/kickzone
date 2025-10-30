import { Card, CardBody, Typography, Button } from "@material-tailwind/react";

const stadiums = [
  {
    id: 1,
    name: "KickZone Arena",
    location: "Cairo, Egypt",
    price: "200 EGP / hour",
    status: "Available",
    image: "/assets/stadium1.jpg",
  },
  {
    id: 2,
    name: "GoalMaster Field",
    location: "Alexandria, Egypt",
    price: "250 EGP / hour",
    status: "Booked",
    image: "/assets/stadium2.jpg",
  },
  {
    id: 3,
    name: "Elite Pitch",
    location: "Giza, Egypt",
    price: "180 EGP / hour",
    status: "Available",
    image: "/assets/stadium3.jpg",
  },
];

function ViewStadium() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-brand-blue mb-8">
        View Stadiums
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stadiums.map((stadium) => (
          <Card key={stadium.id} className="shadow-lg hover:shadow-xl transition-shadow">
            <img
              src={stadium.image}
              alt={stadium.name}
              className="w-full h-56 object-cover rounded-t-xl"
            />
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2 font-bold">
                {stadium.name}
              </Typography>
              <Typography color="gray" className="mb-1">
                📍 {stadium.location}
              </Typography>
              <Typography color="gray" className="mb-2">
                💰 {stadium.price}
              </Typography>
              <Typography
                color={stadium.status === "Available" ? "green" : "red"}
                className="font-semibold mb-4"
              >
                {stadium.status}
              </Typography>
              <Button color="green" variant="filled">
                View Details
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ViewStadium;
