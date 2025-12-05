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
    <Card className="h-screen w-full max-w-[20rem] shadow-xl shadow-blue-gray-900/5 rounded-none flex flex-col bg-dark-surface border-r border-dark-text/10">
      {/* Fixed Header */}
      <div className="flex-shrink-0">
        <div className="p-4 border-b border-dark-text/10">
          <Typography variant="h5" className="font-bold text-dark-text">
            ⚽ StadiumPro Admin
          </Typography>
          <Typography className="mt-2 text-sm text-dark-text/70">
            Complete Stadium Management
          </Typography>
        </div>

        <div className="mx-4 my-4 p-4 bg-gradient-to-r from-green-600 to-emerald-700 rounded-lg">
          <Typography variant="h6" className="text-white font-bold">
            Welcome, Admin!
          </Typography>
          <Typography className="text-white/90 text-sm mt-1">
            Manage your stadiums efficiently
          </Typography>
        </div>
      </div>

      {/* Scrollable Menu */}
      <div className="flex-1 overflow-y-auto min-h-0">
        <div className="px-4 pb-4">
          <List className="space-y-1">
            {menuItems.map((item, index) => (
              <ListItem
                key={index}
                selected={location.pathname === item.path}
                onClick={() => navigate(item.path)}
                className={`
                  py-3 rounded-lg transition-colors
                  ${location.pathname === item.path
                    ? "bg-green-600/20 text-green-400 font-semibold border-l-4 border-green-500"
                    : "text-dark-text hover:bg-dark-text/5 hover:text-dark-text"
                  }
                `}
              >
                <ListItemPrefix className="mr-3">
                  {React.cloneElement(item.icon, {
                    className: `h-5 w-5 ${location.pathname === item.path ? 'text-green-400' : 'text-dark-text/70'}`
                  })}
                </ListItemPrefix>
                {item.label}
              </ListItem>
            ))}
          </List>
        </div>
      </div>

      {/* Fixed Footer */}
      <div className="flex-shrink-0 border-t border-dark-text/10">
        <div className="p-4">
          <ListItem
            onClick={() => navigate("/")}
            className="py-3 rounded-lg hover:bg-red-600/10 text-red-400 hover:text-red-300 transition-colors"
          >
            <ListItemPrefix className="mr-3">
              <ArrowRightOnRectangleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Back to Site
          </ListItem>
        </div>
      </div>
    </Card>
  );
}

export default AdminSidebar;
