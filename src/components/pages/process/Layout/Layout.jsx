// components/pages/process/Layout/Layout.jsx
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function ProcessLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const handleToggleDesktopSidebar = (collapsed) => {
    setSidebarCollapsed(collapsed);
  };

  const handleToggleMobileSidebar = (open) => {
    setMobileSidebarOpen(open);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header
        sidebarCollapsed={sidebarCollapsed}
        mobileSidebarOpen={mobileSidebarOpen}
        onToggleDesktopSidebar={handleToggleDesktopSidebar}
        onToggleMobileSidebar={handleToggleMobileSidebar}
      />
      <div className="flex">
        {/* Mobile Sidebar Overlay */}
        {mobileSidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/50 lg:hidden"
            onClick={() => setMobileSidebarOpen(false)}
          />
        )}

        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-40 w-64 bg-white transform transition-transform lg:hidden ${
            mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Sidebar
            collapsed={false}
            onToggleCollapse={() => setMobileSidebarOpen(false)}
          />
        </div>

        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar
            collapsed={sidebarCollapsed}
            onToggleCollapse={() =>
              handleToggleDesktopSidebar(!sidebarCollapsed)
            }
          />
        </div>

        {/* Main Content */}
        <main
          className={`flex-1 min-h-[calc(100vh-4rem)] overflow-y-auto transition-all duration-300 ${
            sidebarCollapsed ? "lg:ml-20" : "lg:ml-64"
          }`}
        >
          <div className="p-4 lg:p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
