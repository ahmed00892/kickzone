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
  PlusIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { useNavigate, useLocation } from "react-router-dom";

function AdminSidebar({ onClose }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
    if (onClose) onClose();
  };

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

  const stadiumActions = [
    {
      label: "Add Stadium",
      icon: <PlusIcon className="h-4 w-4" />,
      path: "/addstadium",
    },
    {
      label: "Edit Stadiums",
      icon: <PencilIcon className="h-4 w-4" />,
      path: "/admin/stadiums",
    },
    {
      label: "Delete Stadiums",
      icon: <TrashIcon className="h-4 w-4" />,
      path: "/deletestadium",
    },
  ];

  return (
    <Card className="h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 rounded-none bg-white dark:bg-dark-surface">
      <div className="mb-6 p-4">
        <Typography variant="h5" color="blue-gray" className="font-bold dark:text-dark-text">
          ⚽ StadiumPro Admin
        </Typography>
        <Typography color="gray" className="mt-2 text-sm dark:text-dark-text/70">
          Complete Stadium Management
        </Typography>
      </div>

      <div className="mb-4 p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
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
            onClick={() => handleNavigation(item.path)}
            className={`
              ${location.pathname === item.path
                ? "bg-green-100 dark:bg-dark-accent/20 text-green-800 dark:text-dark-accent font-semibold"
                : "hover:bg-gray-100 dark:hover:bg-dark-text/10"
              } py-3 rounded-lg dark:text-dark-text
            `}
          >
            <ListItemPrefix className="mr-3">{item.icon}</ListItemPrefix>
            {item.label}
          </ListItem>
        ))}

        <hr className="my-4 border-gray-200 dark:border-dark-text/20" />

        {/* Stadium Management Actions */}
        <div className="px-4 mb-2">
          <Typography variant="small" color="gray" className="font-semibold dark:text-dark-text/70">
            STADIUM ACTIONS
          </Typography>
        </div>

        {stadiumActions.map((action, index) => (
          <ListItem
            key={index}
            selected={location.pathname === action.path}
            onClick={() => handleNavigation(action.path)}
            className={`
              ${location.pathname === action.path
                ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 font-semibold"
                : "hover:bg-gray-100 dark:hover:bg-dark-text/10"
              } py-3 rounded-lg dark:text-dark-text
            `}
          >
            <ListItemPrefix className="mr-3">{action.icon}</ListItemPrefix>
            {action.label}
          </ListItem>
        ))}

        <hr className="my-4 border-gray-200 dark:border-dark-text/20" />

        <ListItem
          onClick={() => handleNavigation("/")}
          className="py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-text/10 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
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
