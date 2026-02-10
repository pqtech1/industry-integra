import React from "react";
import { Menu, PanelLeft, Sun, Settings } from "lucide-react";

const Header = ({ collapsed, setCollapsed, setMobileOpen }) => {
  return (
    <header className="h-16 bg-white shadow-xl flex items-center justify-between px-6">
      <div className="flex items-center gap-4">

        {/* Mobile */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={20} />
        </button>

        {/* Desktop collapse */}
        <button
          className="hidden lg:block text-gray-700 hover:text-green-600 transition"
          onClick={() => setCollapsed(!collapsed)}
        >
          <PanelLeft size={20} />
        </button>

      
      </div>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="hidden md:block bg-gray-100 px-3 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-green-500"
        />

        <Sun size={18} className="cursor-pointer text-gray-600 hover:text-green-600" />
        <Settings size={18} className="cursor-pointer text-gray-600 hover:text-green-600" />

        <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-medium">
          SN
        </div>
      </div>
    </header>
  );
};

export default Header;
