import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Database, Edit, Plus } from "lucide-react";
import toast from "react-hot-toast";
import api from "../../../api/api";

const ScadaConfiguration = () => {
  const [modules, setModules] = useState([]);
  const [loadingModules, setLoadingModules] = useState(true);
  const [activeModule, setActiveModule] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    id: null,
    connection_url: "",
    protocol: "",
    connection_activated: "Yes",
    scada_system: "",
    scada_type: "Redundant",
  });

  useEffect(() => {
    fetchModules();
  }, []);

  const fetchModules = async () => {
    try {
      setLoadingModules(true);
      const res = await api.get("/license/modules");

      // Fetch SCADA configurations for all modules
      const modulesWithConfig = await Promise.all(
        res.data.map(async (module) => {
          try {
            const configRes = await api.get(
              `/scada-master/module/${module.id}`,
            );
            return {
              ...module,
              configured: true,
              scadaConfig: configRes.data.data,
            };
          } catch (error) {
            // 404 means no configuration exists
            return {
              ...module,
              configured: false,
              scadaConfig: null,
            };
          }
        }),
      );

      setModules(modulesWithConfig);
    } catch (error) {
      toast.error("Failed to load modules");
    } finally {
      setLoadingModules(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      id: null,
      connection_url: "",
      protocol: "",
      connection_activated: "Yes",
      scada_system: "",
      scada_type: "Redundant",
    });
    setIsEditing(false);
    setActiveModule(null);
  };

  const handleAddClick = (module) => {
    setActiveModule(module);
    setIsEditing(false);
    resetForm();
    setOpenDialog(true);
  };

  const handleEditClick = (module) => {
    setActiveModule(module);
    setIsEditing(true);
    setFormData({
      id: module.scadaConfig.id,
      connection_url: module.scadaConfig.connection_url || "",
      protocol: module.scadaConfig.protocol || "",
      connection_activated: module.scadaConfig.connection_activated || "Yes",
      scada_system: module.scadaConfig.scada_system || "",
      scada_type: module.scadaConfig.scada_type || "Redundant",
    });
    setOpenDialog(true);
  };

  const validateForm = () => {
    if (!formData.connection_url.trim()) {
      toast.error("Connection URL is required.");
      return false;
    }

    if (!formData.scada_system.trim()) {
      toast.error("SCADA System is required.");
      return false;
    }

    if (!formData.protocol.trim()) {
      toast.error("Protocol is required.");
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!activeModule) {
      toast.error("Please select a module.");
      return;
    }

    if (!validateForm()) {
      return;
    }

    try {
      setSubmitting(true);

      let response;

      if (isEditing) {
        // Update existing configuration
        response = await api.put(`/scada-master/${formData.id}`, {
          connection_url: formData.connection_url,
          protocol: formData.protocol,
          connection_activated: formData.connection_activated,
          scada_system: formData.scada_system,
          scada_type: formData.scada_type,
        });
        toast.success("SCADA configuration updated successfully.");
      } else {
        // Create new configuration
        const payload = {
          ...formData,
          module_id: activeModule.id,
        };
        response = await api.post("/scada-master", payload);
        toast.success(response.data.message);
      }

      // Refresh modules data
      await fetchModules();

      resetForm();
      setOpenDialog(false);
    } catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          toast.error("Configuration already exists for this module.");
        } else if (error.response.status === 422) {
          const errors = error.response.data.errors;
          Object.values(errors).forEach((errArray) => {
            toast.error(errArray[0]);
          });
        } else if (error.response.status === 403) {
          toast.error(error.response.data.message);
        } else if (error.response.status === 500) {
          toast.error("Internal server error. Please contact admin.");
        } else {
          toast.error(
            error.response.data.message || "Unexpected error occurred.",
          );
        }
      } else {
        toast.error("Server not reachable.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">SCADA Configuration</h1>

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
                <p className="text-gray-500 mt-1 text-sm">
                  {module.description}
                </p>

                
              </div>

              <Button
                onClick={() =>
                  module.configured
                    ? handleEditClick(module)
                    : handleAddClick(module)
                }
                className={`transition-all duration-200 ${
                  module.configured
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                {module.configured ? (
                  <>
                    <Edit size={16} className="mr-1" />
                    Edit Configuration
                  </>
                ) : (
                  <>
                    <Plus size={16} className="mr-1" />
                    Add Configuration
                  </>
                )}
              </Button>
            </div>
          ))}
        </div>
      )}

      {/* Configuration Dialog */}
      <Dialog
        open={openDialog}
        onOpenChange={(open) => {
          if (!open) {
            resetForm();
          }
          setOpenDialog(open);
        }}
      >
        <DialogContent className="sm:max-w-lg bg-white rounded-xl shadow-2xl">
          <DialogHeader>
            <DialogTitle>
              {isEditing
                ? `Edit ${activeModule?.title} SCADA Configuration`
                : `Add ${activeModule?.title} SCADA Configuration`}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label>Connection URL</Label>
              <Input
                name="connection_url"
                value={formData.connection_url}
                onChange={handleChange}
                placeholder="Enter connection URL"
              />
            </div>

            <div className="space-y-2">
              <Label>SCADA System</Label>
              <Input
                name="scada_system"
                value={formData.scada_system}
                onChange={handleChange}
                placeholder="Enter SCADA system"
              />
            </div>

            <div className="space-y-2">
              <Label>Protocol</Label>
              <Input
                name="protocol"
                value={formData.protocol}
                onChange={handleChange}
                placeholder="Enter protocol"
              />
            </div>

            <div className="space-y-2">
              <Label>Connection Activated</Label>
              <Select
                value={formData.connection_activated}
                onValueChange={(val) =>
                  setFormData((prev) => ({
                    ...prev,
                    connection_activated: val,
                  }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="Yes">Yes</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>SCADA Type</Label>
              <Select
                value={formData.scada_type}
                onValueChange={(val) =>
                  setFormData((prev) => ({
                    ...prev,
                    scada_type: val,
                  }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Redundant">Redundant</SelectItem>
                  <SelectItem value="Main">Main</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                resetForm();
                setOpenDialog(false);
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={submitting}
              className="bg-green-600 text-white transition-all duration-200 hover:bg-green-700 flex items-center justify-center"
            >
              {submitting ? (
                <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : isEditing ? (
                "Update"
              ) : (
                "Save"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ScadaConfiguration;
