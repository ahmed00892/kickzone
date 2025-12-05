import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar.jsx";
import { 
  Bars3Icon, 
  XMarkIcon,
  SunIcon,
  MoonIcon 
} from "@heroicons/react/24/solid";
import { useTheme } from "../context/ThemeContext";

function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile Sidebar Toggle & Theme Toggle */}
      <div className="fixed top-4 left-4 z-50 flex items-center gap-2">
        <button
          className="md:hidden p-2 bg-green-600 dark:bg-green-700 text-white rounded-lg"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

        {/* Dark/Light Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark" ? (
            <SunIcon className="h-6 w-6" />
          ) : (
            <MoonIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Sidebar - Mobile & Desktop */}
      <div
        className={`
          ${sidebarOpen ? "block" : "hidden"} 
          md:block fixed md:relative z-40
          h-screen
        `}
      >
        <AdminSidebar onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 md:ml-0 p-4 md:p-8 overflow-auto w-full dark:text-gray-100">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
