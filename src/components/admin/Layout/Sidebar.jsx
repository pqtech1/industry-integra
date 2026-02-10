import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, ChevronDown, Settings, AppWindow } from "lucide-react";

const Sidebar = ({ collapsed, mobileOpen, setMobileOpen }) => {
  const widthClass = collapsed ? "w-20" : "w-64";

  // State to manage collapsible Configuration menu
  const [configOpen, setConfigOpen] = useState(false);

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-30 lg:hidden ${
          mobileOpen ? "block" : "hidden"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      <aside
        className={`fixed lg:static z-40 inset-y-0 left-0 bg-white shadow-xl
        transition-all duration-300 ${widthClass}
        ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-center">
          {collapsed ? (
            <img src="logo.png" alt="Logo" className="h-8 w-8 object-contain" />
          ) : (
            <div className="flex items-center gap-2">
              <img src="logo.png" alt="Logo" className="h-8 w-8 object-contain" />
              <span className="text-lg font-bold text-black">
                Industry <span className="text-green-600">INTEGRA</span> 360
              </span>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-6 text-sm">
          <SidebarSection title="General" collapsed={collapsed}>
            <SidebarItem
              to=""
              icon={<LayoutDashboard size={18} />}
              label="License"
              collapsed={collapsed}
            />

            {/* Configuration Collapsible Menu */}
            <div>
              <button
                onClick={() => setConfigOpen(!configOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
              >
                <div className="flex items-center gap-3">
                  <Settings size={18} />
                  {!collapsed && <span>Configuration</span>}
                </div>
                {!collapsed && (
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      configOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                )}
              </button>

              {/* Sub-menu */}
              {configOpen && (
                <div className="ml-8 mt-1 space-y-1">
                  <SidebarItem
                    to="scada-configuration"
                    icon={<Settings size={16} />}
                    label="Scada Configuration"
                    collapsed={collapsed}
                  />
                  <SidebarItem
                    to="table-configuration"
                    icon={<AppWindow size={16} />}
                    label="Table Configuration"
                    collapsed={collapsed}
                  />
                </div>
              )}
            </div>
          </SidebarSection>
        </nav>
      </aside>
    </>
  );
};

const SidebarSection = ({ title, collapsed, children }) => (
  <div>
    {!collapsed && (
      <p className="text-xs uppercase text-gray-400 mb-2">{title}</p>
    )}
    <div className="space-y-1">{children}</div>
  </div>
);

const SidebarItem = ({ to, icon, label, collapsed }) => (
  <NavLink
    to={to}
    end
    className={({ isActive }) =>
      `group relative flex items-center gap-3 px-3 py-2 rounded-lg transition
      ${
        isActive
          ? "bg-green-600 text-white shadow-md"
          : "text-gray-700 hover:bg-gray-100"
      }`
    }
  >
    {icon}

    {!collapsed && <span>{label}</span>}

    {collapsed && (
      <span className="absolute left-16 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
        {label}
      </span>
    )}
  </NavLink>
);

export default Sidebar;
