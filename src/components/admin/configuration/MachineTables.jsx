import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,

} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Card, CardContent } from "@/components/ui/card";
import {
  RefreshCw,
  Eye,
  Database,
  Loader2,
  Server,
  Tag,
  Cpu,
  HardDrive,
  AlertCircle,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../../api/api";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const MachinesPage = () => {
  const navigate = useNavigate();
  const { module_id } = useParams();
  const [machines, setMachines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  // Load initial machines
  useEffect(() => {
    loadMachines();
  }, [module_id]);

  const loadMachines = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/machines/${module_id}`);

      if (response.data.success) {
        setMachines(response.data.machines);
      } else {
        toast.error(response.data.message || "Failed to load machines");
      }
    } catch (error) {
      console.error("Error loading machines:", error);
      toast.error("Failed to load machines");
    } finally {
      setLoading(false);
    }
  };

  const handleFetchLatest = async () => {
    try {
      setFetching(true);
      setShowConfirmDialog(false);

      const response = await api.post(`/fetch-latest/${module_id}`);

      console.log("API Response:", response.data);

      if (response.data.success) {
        setMachines(response.data.machines);

        // Show success message with details
        const newMachines =
          response.data.processed_results?.filter((r) => r.action === "created")
            .length || 0;
        const updatedMachines =
          response.data.processed_results?.filter((r) => r.action === "updated")
            .length || 0;

        toast.success(
          <div>
            <div className="font-semibold">{response.data.message}</div>
            {newMachines > 0 && <div>New machines: {newMachines}</div>}
            {updatedMachines > 0 && (
              <div>Updated machines: {updatedMachines}</div>
            )}
          </div>,
          { duration: 4000 },
        );
      } else {
        toast.error(response.data.message || "Failed to fetch latest tables");
      }
    } catch (error) {
      console.error("Error fetching latest tables:", error);

      // Show detailed error
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        error.message ||
        "Unknown error occurred";

      toast.error(`Failed: ${errorMessage}`);
    } finally {
      setFetching(false);
      // Reload machines list
      loadMachines();
    }
  };

  const handleView = (machine) => {
    navigate(
      `/admin-license-management/machine-tables/${module_id}/${machine.id}`,
      {
        state: { machine },
      },
    );
  };

  return (
    <div className="p-8 bg-gradient-to-br from-slate-50 to-gray-50 min-h-screen space-y-8">
      {/* Alert Dialog for Confirmation */}
      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent className="bg-white">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2 text-amber-600">
              <AlertCircle className="h-5 w-5" />
              Fetch Latest Tables
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-600">
              This will fetch the latest machine tables and configurations from
              the API. This action may add new machines or update existing ones.
              Continue?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-gray-300">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleFetchLatest}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Fetch Tables
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
            <Database className="w-8 h-8 text-emerald-600" />
            Machine Tables
          </h1>
        </div>

        <Button
          onClick={() => setShowConfirmDialog(true)}
          disabled={fetching}
          className="bg-gradient-to-r from-emerald-600 to-green-600 text-white hover:from-emerald-700 hover:to-green-700 flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
        >
          {fetching ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Fetching...
            </>
          ) : (
            <>
              <RefreshCw size={16} />
              Fetch Latest Tables
            </>
          )}
        </Button>
      </div>

      {/* Stats Cards with Gradient Colors */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl shadow-lg text-white">
          <div className="flex items-center justify-between">
            <Server className="h-8 w-8 text-blue-100" />
            <Badge
              variant="outline"
              className="bg-white/20 text-white border-white/30"
            >
              Total
            </Badge>
          </div>
          <p className="text-3xl text-white font-bold mt-4">
            {machines.length}
          </p>
          <p className="text-blue-100 text-sm mt-1">Total Machines</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl shadow-lg text-white">
          <div className="flex items-center justify-between">
            <Tag className="h-8 w-8 text-purple-100" />
            <Badge
              variant="outline"
              className="bg-white/20 text-white border-white/30"
            >
              Tags
            </Badge>
          </div>
          <p className="text-3xl text-white font-bold mt-4">
            {machines.reduce((sum, m) => sum + (m.total_no_tags || 0), 0)}
          </p>
          <p className="text-purple-100 text-sm mt-1">Total Tags</p>
        </div>

        <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-6 rounded-xl shadow-lg text-white">
          <div className="flex items-center justify-between">
            <Cpu className="h-8 w-8 text-amber-100" />
            <Badge
              variant="outline"
              className="bg-white/20 text-white border-white/30"
            >
              Minute
            </Badge>
          </div>
          <p className="text-3xl text-white font-bold mt-4">
            {machines.length}
          </p>
          <p className="text-amber-100 text-sm mt-1">Minute Tables</p>
        </div>

        <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-6 rounded-xl shadow-lg text-white">
          <div className="flex items-center justify-between">
            <HardDrive className="h-8 w-8 text-teal-100" />
            <Badge
              variant="outline"
              className="bg-white/20 text-white border-white/30"
            >
              Hour
            </Badge>
          </div>
          <p className="text-3xl text-white font-bold mt-4">
            {machines.length}
          </p>
          <p className="text-teal-100 text-sm mt-1">Hour Tables</p>
        </div>
      </div>

      <Card className="rounded-xl shadow-xl border-0 bg-white/80 backdrop-blur-sm">
        <CardContent className="p-6">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="relative">
                <Loader2 className="w-12 h-12 animate-spin text-emerald-600" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                </div>
              </div>
            </div>
          ) : machines.length === 0 ? (
            <div className="text-center py-16 bg-gradient-to-br from-gray-50 to-white rounded-xl">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                No machines found
              </h3>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                Click "Fetch Latest Tables" to retrieve machines from the API
              </p>
              <Button
                onClick={() => setShowConfirmDialog(true)}
                className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-md"
              >
                <RefreshCw size={16} className="mr-2" />
                Fetch Latest Tables
              </Button>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <Table>
                <TableHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
                  <TableRow>
                    <TableHead className="font-semibold text-gray-700 w-[100px]">
                      Sr. No
                    </TableHead>
                    <TableHead className="font-semibold text-gray-700">
                      Node #
                    </TableHead>
                    <TableHead className="font-semibold text-gray-700">
                      Machine Name
                    </TableHead>
                    <TableHead className="font-semibold text-gray-700">
                      Node ID
                    </TableHead>
                    <TableHead className="font-semibold text-gray-700">
                      Minute Table
                    </TableHead>
                    <TableHead className="font-semibold text-gray-700">
                      Hour Table
                    </TableHead>
                    <TableHead className="font-semibold text-gray-700">
                      Total Tags
                    </TableHead>
                    <TableHead className="text-right font-semibold text-gray-700">
                      Action
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {machines.map((machine, index) => (
                    <TableRow
                      key={machine.id}
                      className="hover:bg-gradient-to-r hover:from-emerald-50/30 hover:to-blue-50/30 transition-all"
                    >
                      <TableCell className="font-medium">
                        <Badge
                          variant="outline"
                          className="bg-emerald-50 text-emerald-700 border-emerald-200"
                        >
                          #{index + 1}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-mono">
                        <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border-0">
                          {machine.node_no || "0"}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <div className="bg-amber-100 p-1 rounded-md">
                            <Cpu className="h-4 w-4 text-amber-600" />
                          </div>
                          <span className="text-gray-800">
                            {machine.machine_name}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="max-w-xs">
                        <div
                          className="truncate"
                          title={machine.machine_node_id}
                        >
                          <code className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1.5 rounded-md font-mono border border-indigo-100">
                            {machine.machine_node_id}
                          </code>
                        </div>
                      </TableCell>
                      <TableCell>
                        <code className="text-xs bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 px-2 py-1.5 rounded-md font-mono border border-blue-200">
                          {machine.min_table_name}
                        </code>
                      </TableCell>
                      <TableCell>
                        <code className="text-xs bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 px-2 py-1.5 rounded-md font-mono border border-green-200">
                          {machine.hour_table_name}
                        </code>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 border-0">
                          {machine.total_no_tags || 0}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                size="icon"
                                onClick={() => handleView(machine)}
                              >
                                <Eye size={16} />
                              </Button>
                            </TooltipTrigger>

                            <TooltipContent side="top" className="bg-white">
                              View Tags
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {machines.length > 0 && (
        <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-4 rounded-lg shadow-sm text-center">
          <p className="text-gray-700">
            <span className="font-semibold">
              Showing {machines.length} machines
            </span>{" "}
            with total of{" "}
            <span className="font-semibold text-emerald-600">
              {machines.reduce((sum, m) => sum + (m.total_no_tags || 0), 0)}
            </span>{" "}
            tags
          </p>
        </div>
      )}
    </div>
  );
};

export default MachinesPage;
