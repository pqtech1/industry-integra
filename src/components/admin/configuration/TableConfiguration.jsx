import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";
import { Database, Plus } from "lucide-react";
import api from "../../../api/api";
import { useNavigate ,Link} from "react-router-dom";

const TableConfiguration = () => {
  const [modules, setModules] = useState([]);
  const [loadingModules, setLoadingModules] = useState(true);
  const [activeModuleId, setActiveModuleId] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [apiEndpoint, setApiEndpoint] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const res = await api.get("/license/modules");
        setModules(res.data);
      } catch (error) {
        toast.error("Failed to load modules");
      } finally {
        setLoadingModules(false);
      }
    };

    fetchModules();
  }, []);

  const resetForm = () => {
    setApiEndpoint("");
  };

  const handleSubmit = async () => {
    if (!apiEndpoint.trim()) {
      toast.error("API endpoint is required.");
      return;
    }

    try {
      setSubmitting(true);

      const res = await api.post("/module-api-endpoint/store", {
        module_id: activeModuleId,
        api_endpoint: apiEndpoint,
      });

      toast.success(res.data.message);
      resetForm();
      setOpenDialog(false);
    } catch (error) {
      if (error.response?.data?.errors) {
        Object.values(error.response.data.errors).forEach((err) =>
          toast.error(err[0]),
        );
      } else if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Server error occurred.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Table Configuration</h1>

      {loadingModules ? (
        <p>Loading modules...</p>
      ) : modules.length === 0 ? (
        <p className="text-red-500">No modules activated in license.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((module) => (
            <div
              key={module.id}
              className="flex flex-col justify-between p-6 rounded-xl shadow-xl transition hover:shadow-2xl bg-white"
            >
              <div className="p-6 flex flex-col items-center justify-center space-y-4">
                <Database className="w-10 h-10 text-green-600" />

                <h2 className="text-2xl font-semibold text-black">
                  {module.title}
                </h2>

                <p className="text-gray-500 text-sm text-center">
                  {module.description}
                </p>
              </div>

              <div className="flex gap-3 mt-4">
                <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                  <DialogTrigger asChild>
                    <Button
                      onClick={() => {
                        setActiveModuleId(module.id);
                        setApiEndpoint(
                          module.module_api_endpoint?.api_endpoint || "",
                        );
                        setOpenDialog(true);
                      }}
                      className="bg-black text-white transition-all duration-200 hover:bg-gray-800 flex-1"
                    >
                      <Plus size={16} className="mr-1" />
                      {module.module_api_endpoint
                        ? "Update API Endpoint"
                        : "Add API Endpoint"}
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="sm:max-w-lg bg-white rounded-xl shadow-2xl">
                    <DialogHeader>
                      <DialogTitle>
                        {module.title} API Configuration
                      </DialogTitle>
                    </DialogHeader>

                    <div className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <Label>API Endpoint</Label>
                        <Input
                          value={apiEndpoint}
                          onChange={(e) => setApiEndpoint(e.target.value)}
                          placeholder="http://127.0.0.1:8000"
                        />
                      </div>
                    </div>

                    <DialogFooter>
                      <Button
                        onClick={handleSubmit}
                        disabled={submitting}
                        className="bg-green-600 text-white transition-all duration-200 hover:bg-green-700 flex items-center justify-center"
                      >
                        {submitting ? (
                          <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        ) : (
                          "Save"
                        )}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Link
                  to={`/admin-license-management/machine-tables/${module.id}`}
                  className="flex-1 "
                >
                  <Button className="w-full bg-gray-700 text-white transition-all duration-200 hover:bg-gray-900">
                    View Tables
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TableConfiguration;
