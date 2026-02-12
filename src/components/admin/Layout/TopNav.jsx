import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const TopNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine title based on current path
  const getTitle = () => {
    const path = location.pathname;

    if (path.includes("/scada-configuration")) {
      return "SCADA Configuration";
    }

    if (path.includes("/table-configuration")) {
      return "Table Configuration";
    }

    if (path.includes("/machine-tables")) {
      if (path.includes("/machine-tables/") && path.split("/").length === 5) {
        // Machine details page
        return "Machine Details";
      }
      // Machines list page
      return "Machine Tables";
    }

    // Default for admin dashboard
    return "Dashboard";
  };

  const title = getTitle();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-white shadow-sm px-6 h-12 flex items-center justify-between gap-6 text-sm">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleBack}
          className="flex items-center gap-2 px-3 bg-slate-700 text-white hover:bg-gray-800 cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm">Back</span>
        </Button>

        <span className="font-medium text-gray-800">{title}</span>
      </div>

      {/* Optional right side content can be added here */}
      <div className="text-gray-500">
        {/* Add additional navigation or info here if needed */}
      </div>
    </div>
  );
};

export default TopNav;
