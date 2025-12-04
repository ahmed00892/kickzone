import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar.jsx";

function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar - Desktop */}
      <div className="hidden md:block">
        <AdminSidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 md:ml-0 p-4 md:p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
