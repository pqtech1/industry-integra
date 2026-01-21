// components/pages/building/Layout/Layout.jsx
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function BuildingLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleMobileToggle = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  const handleMobileClose = () => {
    setMobileSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onMenuClick={handleMobileToggle}
        mobileSidebarOpen={mobileSidebarOpen}
      />
      <div className="flex">
        <Sidebar
          collapsed={collapsed}
          onToggleCollapse={handleToggleCollapse}
          mobileSidebarOpen={mobileSidebarOpen}
          onMobileClose={handleMobileClose}
        />
        <main className="flex-1 p-4 lg:p-6 min-h-[calc(100vh-4rem)] overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
