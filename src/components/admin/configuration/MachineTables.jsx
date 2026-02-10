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
import { Card, CardContent } from "@/components/ui/card";
import { RefreshCw, Eye, Database, Loader2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../../api/api";

const MachinesPage = () => {
  const navigate = useNavigate();
  const { module_id } = useParams();
  const [machines, setMachines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);

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
    navigate(`/machines/${module_id}/${machine.id}`);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
            <Database className="w-8 h-8 text-green-600" />
            Machine Tables
          </h1>
          <p className="text-gray-600 mt-1">Module ID: {module_id}</p>
        </div>

        <Button
          onClick={handleFetchLatest}
          disabled={fetching}
          className="bg-black text-white hover:bg-gray-800 flex items-center gap-2"
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

      <Card className="rounded-2xl shadow-xl border-0">
        <CardContent className="p-6">
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-green-600" />
            </div>
          ) : machines.length === 0 ? (
            <div className="text-center py-12">
              <Database className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                No machines found
              </h3>
              <p className="text-gray-500 mb-6">
                Click "Fetch Latest Tables" to retrieve machines from the API
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Node #</TableHead>
                    <TableHead className="font-semibold">
                      Machine Name
                    </TableHead>
                    <TableHead className="font-semibold">Node ID</TableHead>
                    <TableHead className="font-semibold">
                      Minute Table
                    </TableHead>
                    <TableHead className="font-semibold">Hour Table</TableHead>
                    <TableHead className="font-semibold">Total Tags</TableHead>
                    <TableHead className="text-right font-semibold">
                      Action
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {machines.map((machine) => (
                    <TableRow key={machine.id} className="hover:bg-gray-50">
                      <TableCell className="font-mono">
                        {machine.node_no}
                      </TableCell>
                      <TableCell className="font-medium">
                        {machine.machine_name}
                      </TableCell>
                      <TableCell className="max-w-xs truncate">
                        <span
                          title={machine.machine_node_id}
                          className="text-sm"
                        >
                          {machine.machine_node_id}
                        </span>
                      </TableCell>
                      <TableCell className="font-mono text-sm">
                        {machine.min_table_name}
                      </TableCell>
                      <TableCell className="font-mono text-sm">
                        {machine.hour_table_name}
                      </TableCell>
                      <TableCell>{machine.total_no_tags}</TableCell>
                      <TableCell className="text-right">
                        <Button
                          size="sm"
                          onClick={() => handleView(machine)}
                          className="bg-gray-700 text-white hover:bg-gray-900"
                        >
                          <Eye size={14} className="mr-2" />
                          View
                        </Button>
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
        <div className="text-sm text-gray-600">
          Total machines: {machines.length} | Total tags:{" "}
          {machines.reduce((sum, m) => sum + (m.total_no_tags || 0), 0)}
        </div>
      )}
    </div>
  );
};

export default MachinesPage;
