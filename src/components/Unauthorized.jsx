// components/Unauthorized.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Unauthorized() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Shield className="h-10 w-10 text-white" />
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-3">Access Denied</h1>

        <p className="text-gray-600 mb-8">
          You don't have permission to access this module. Please contact your
          administrator or use appropriate credentials.
        </p>

        <div className="space-y-3">
          <Button onClick={() => navigate("/login")} className="w-full">
            <Home className="h-4 w-4 mr-2" />
            Back to Login
          </Button>

          <Button
            variant="outline"
            onClick={() => navigate("/modules")}
            className="w-full"
          >
            Go to Module Selection
          </Button>
        </div>
      </div>
    </div>
  );
}
