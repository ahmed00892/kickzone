import React from "react";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Progress,
} from "@material-tailwind/react";
import {
  CurrencyDollarIcon,
  CalendarDaysIcon,
  UsersIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Total Revenue",
      value: "$12,580",
      change: "+12.5%",
      icon: <CurrencyDollarIcon className="h-6 w-6 text-white" />,
      color: "bg-green-500",
    },
    {
      title: "Total Bookings",
      value: "324",
      change: "+8.2%",
      icon: <CalendarDaysIcon className="h-6 w-6 text-white" />,
      color: "bg-blue-500",
    },
    {
      title: "Active Users",
      value: "1,248",
      change: "+5.7%",
      icon: <UsersIcon className="h-6 w-6 text-white" />,
      color: "bg-purple-500",
    },
    {
      title: "Stadiums",
      value: "3",
      change: "Manage",
      icon: <BuildingLibraryIcon className="h-6 w-6 text-white" />,
      color: "bg-orange-500",
      action: () => navigate("/admin/stadiums"),
    },
  ];

  return (
    <div className="p-4 md:p-8">
      <Typography variant="h3" className="font-bold text-gray-800 mb-2">
        Admin Dashboard
      </Typography>
      <Typography color="gray" className="mb-8">
        Welcome back! Here's what's happening with your stadiums today.
      </Typography>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="shadow-lg hover:shadow-xl transition-shadow"
          >
            <CardBody className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <Typography color="blue-gray" className="text-sm font-medium">
                    {stat.title}
                  </Typography>
                  <Typography variant="h4" className="mt-2 font-bold">
                    {stat.value}
                  </Typography>
                  <Typography className="mt-1 text-sm font-medium text-green-600">
                    {stat.change}
                  </Typography>
                </div>
                <div
                  className={`${stat.color} p-3 rounded-full cursor-pointer hover:opacity-90`}
                  onClick={stat.action}
                >
                  {stat.icon}
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="shadow-lg mb-8">
        <CardBody className="p-6">
          <Typography variant="h5" className="font-bold mb-6">
            Quick Actions
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button
              className="bg-gradient-to-r from-green-500 to-emerald-600"
              onClick={() => navigate("/addstadium")}
            >
              Add Stadium
            </Button>
            <Button
              className="bg-gradient-to-r from-blue-500 to-cyan-600"
              onClick={() => navigate("/admin/bookings")}
            >
              View Bookings
            </Button>
            <Button
              className="bg-gradient-to-r from-purple-500 to-violet-600"
              onClick={() => navigate("/admin/users")}
            >
              Manage Users
            </Button>
            <Button
              className="bg-gradient-to-r from-orange-500 to-red-600"
              onClick={() => navigate("/admin/reports")}
            >
              Generate Report
            </Button>
          </div>
        </CardBody>
      </Card>

      {/* Stadium Performance */}
      <Card className="shadow-lg">
        <CardBody className="p-6">
          <Typography variant="h5" className="font-bold mb-6">
            Stadium Performance
          </Typography>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <Typography>Green Turf Stadium</Typography>
                <Typography className="font-semibold">78%</Typography>
              </div>
              <Progress value={78} color="green" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <Typography>Sunny Field</Typography>
                <Typography className="font-semibold">65%</Typography>
              </div>
              <Progress value={65} color="blue" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <Typography>Victory Field</Typography>
                <Typography className="font-semibold">58%</Typography>
              </div>
              <Progress value={58} color="orange" />
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default AdminDashboard;
