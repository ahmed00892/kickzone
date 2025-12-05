import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar.jsx";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-dark-bg">
      {/* Mobile Sidebar Toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-brand-green dark:bg-dark-accent text-white rounded-lg"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

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
      <main className="flex-1 md:ml-0 p-4 md:p-8 overflow-auto w-full">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
