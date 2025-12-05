import React, { useState, useEffect } from "react";
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
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/solid";
import { useNavigate, useLocation } from "react-router-dom";

function AdminSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  // Check system preference or localStorage on component mount
  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true' || 
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDarkMode);
    updateTheme(isDarkMode);
  }, []);

  const updateTheme = (isDark) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDark);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    updateTheme(newDarkMode);
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

  return (
    <Card className="h-screen w-full max-w-[20rem] shadow-xl shadow-blue-gray-900/5 rounded-none flex flex-col bg-white dark:bg-dark-surface border-r border-gray-200 dark:border-dark-text/10">
      {/* Fixed Header */}
      <div className="flex-shrink-0">
        <div className="p-4 border-b border-gray-200 dark:border-dark-text/10">
          <Typography variant="h5" className="font-bold text-gray-800 dark:text-dark-text">
            ⚽ StadiumPro Admin
          </Typography>
          <Typography className="mt-2 text-sm text-gray-600 dark:text-dark-text/70">
            Complete Stadium Management
          </Typography>
        </div>

        <div className="mx-4 my-4 p-4 bg-gradient-to-r from-green-500 to-emerald-600 dark:from-green-600 dark:to-emerald-700 rounded-lg shadow">
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
                  py-3 rounded-lg transition-all duration-200
                  ${location.pathname === item.path
                    ? "bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 text-green-700 dark:text-green-300 font-semibold border-l-4 border-green-500 dark:border-green-400"
                    : "text-gray-700 dark:text-dark-text hover:bg-gray-100 dark:hover:bg-dark-bg hover:text-gray-900 dark:hover:text-dark-text"
                  }
                `}
              >
                <ListItemPrefix className="mr-3">
                  {React.cloneElement(item.icon, {
                    className: `h-5 w-5 ${location.pathname === item.path 
                      ? 'text-green-600 dark:text-green-400' 
                      : 'text-gray-500 dark:text-dark-text/70'}`
                  })}
                </ListItemPrefix>
                {item.label}
              </ListItem>
            ))}
          </List>
        </div>
      </div>

      {/* Fixed Footer */}
      <div className="flex-shrink-0 border-t border-gray-200 dark:border-dark-text/10">
        {/* Dark Mode Toggle */}
        <div className="p-4 flex items-center justify-between">
          <ListItem
            onClick={toggleDarkMode}
            className="py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-bg text-gray-700 dark:text-dark-text hover:text-gray-900 dark:hover:text-dark-text cursor-pointer"
          >
            <ListItemPrefix className="mr-3">
              {darkMode ? (
                <SunIcon className="h-5 w-5 text-yellow-500" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-600" />
              )}
            </ListItemPrefix>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </ListItem>
        </div>

        {/* Logout */}
        <div className="p-4 pt-0">
          <ListItem
            onClick={() => navigate("/")}
            className="py-3 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
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
