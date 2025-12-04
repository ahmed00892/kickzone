import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  BuildingLibraryIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { useNavigate, useLocation } from "react-router-dom";

function AdminSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      label: "Dashboard",
      icon: <PresentationChartBarIcon className="h-5 w-5" />,
      path: "/admin",
    },
    {
      label: "Stadiums",
      icon: <BuildingLibraryIcon className="h-5 w-5" />,
      path: "/admin/stadiums",
    },
    {
      label: "Bookings",
      icon: <CalendarDaysIcon className="h-5 w-5" />,
      path: "/admin/bookings",
    },
    {
      label: "Users",
      icon: <UserGroupIcon className="h-5 w-5" />,
      path: "/admin/users",
    },
    {
      label: "Reports",
      icon: <ChartBarIcon className="h-5 w-5" />,
      path: "/admin/reports",
    },
    {
      label: "Settings",
      icon: <Cog6ToothIcon className="h-5 w-5" />,
      path: "/admin/settings",
    },
  ];

  return (
    <Card className="h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 rounded-none">
      <div className="mb-6 p-4">
        <Typography variant="h5" color="blue-gray" className="font-bold">
          ⚽ StadiumPro Admin
        </Typography>
        <Typography color="gray" className="mt-2 text-sm">
          Complete Stadium Management
        </Typography>
      </div>

      <div className="mb-4 p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-lg">
        <Typography variant="h6" className="text-white font-bold">
          Welcome, Admin!
        </Typography>
        <Typography className="text-white/90 text-sm mt-1">
          Manage your stadiums efficiently
        </Typography>
      </div>

      <List className="space-y-1">
        {menuItems.map((item, index) => (
          <ListItem
            key={index}
            selected={location.pathname === item.path}
            onClick={() => navigate(item.path)}
            className={`${
              location.pathname === item.path
                ? "bg-green-100 text-green-800 font-semibold"
                : "hover:bg-gray-100"
            } py-3 rounded-lg`}
          >
            <ListItemPrefix className="mr-3">{item.icon}</ListItemPrefix>
            {item.label}
          </ListItem>
        ))}

        <hr className="my-4 border-gray-200" />

        <ListItem
          onClick={() => navigate("/")}
          className="py-3 rounded-lg hover:bg-gray-100 text-red-600 hover:text-red-700"
        >
          <ListItemPrefix className="mr-3">
            <ArrowRightOnRectangleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Back to Site
        </ListItem>
      </List>
    </Card>
  );
}

export default AdminSidebar;
