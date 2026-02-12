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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Cpu,
  Tag,
  Database,
  Type,
  FileText,
  Calendar,
  Hash,
  HardDrive,
  Server,
  Layers,
} from "lucide-react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../../api/api";

// Helper function to convert variant type to PostgreSQL type
const convertToPostgresDataType = (variantType) => {
  const typeMapping = {
    "VariantType.Float": "DOUBLE PRECISION",
    "VariantType.Double": "DOUBLE PRECISION",
    "VariantType.Single": "REAL",
    "VariantType.Integer": "INTEGER",
    "VariantType.Int": "INTEGER",
    "VariantType.Long": "BIGINT",
    "VariantType.Short": "SMALLINT",
    "VariantType.Byte": "SMALLINT",
    "VariantType.Decimal": "DECIMAL",
    "VariantType.Numeric": "NUMERIC",
    "VariantType.Boolean": "BOOLEAN",
    "VariantType.Bool": "BOOLEAN",
    "VariantType.DateTime": "TIMESTAMP",
    "VariantType.Date": "DATE",
    "VariantType.Time": "TIME",
    "VariantType.String": "TEXT",
    "VariantType.Char": "TEXT",
    "VariantType.Text": "TEXT",
    "VariantType.ByteArray": "BYTEA",
    "VariantType.Binary": "BYTEA",
    "VariantType.Guid": "UUID",
    "VariantType.Object": "JSONB",
    "VariantType.Array": "JSONB",
  };

  return typeMapping[variantType] || "TEXT";
};

const MachineDetailsPage = () => {
  const navigate = useNavigate();
  const { module_id, machine_id } = useParams();
  const location = useLocation();
  const [machine, setMachine] = useState(location.state?.machine || null);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (machine) {
      fetchMachineTags();
    } else {
      fetchMachineAndTags();
    }
  }, [machine_id, module_id]);

  const fetchMachineAndTags = async () => {
    try {
      setLoading(true);
      // Fetch machine details
      const machineRes = await api.get(`/machine/${machine_id}/details`);
      setMachine(machineRes.data.machine);

      // Fetch tags
      await fetchMachineTags();
    } catch (error) {
      console.error("Error fetching machine details:", error);
      toast.error("Failed to load machine details");
    } finally {
      setLoading(false);
    }
  };

  const fetchMachineTags = async () => {
    try {
      // Fetch tags for this machine
      const tagsRes = await api.get(`/machine/${machine_id}/tags`);
      if (tagsRes.data.success) {
        setTags(tagsRes.data.tags || []);
      }
    } catch (error) {
      console.error("Error fetching tags:", error);
      // Continue without tags if endpoint doesn't exist yet
    }
  };

  if (!machine) {
    return (
      <div className="p-8 bg-gradient-to-br from-slate-50 to-gray-50 min-h-screen">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            Machine Not Found
          </h1>
        </div>
        <Card className="border-0 shadow-xl">
          <CardContent className="py-16 text-center">
            <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cpu className="h-10 w-10 text-amber-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              Machine not found
            </h3>
            <p className="text-gray-500 mb-6">
              The machine you're looking for doesn't exist or has been removed.
            </p>
            <Button
              onClick={() =>
                navigate(
                  `/admin-license-management/machine-tables/${module_id}`,
                )
              }
              className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900"
            >
              Back to Machines
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gradient-to-br from-slate-50 to-gray-50 min-h-screen space-y-8">
      {/* Machine Information and Table Properties in One Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Machine Information Card */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-emerald-700">
              <div className="bg-emerald-100 p-2 rounded-lg">
                <Server className="h-5 w-5 text-emerald-600" />
              </div>
              Machine Information
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* First Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-500 flex items-center gap-2">
                  <Cpu className="h-4 w-4" />
                  Machine Name
                </label>
                <div className="text-lg font-semibold text-gray-800 bg-gray-50 p-3 rounded-lg border border-gray-100">
                  {machine.machine_name}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-500 flex items-center gap-2">
                  <Hash className="h-4 w-4" />
                  Node Number
                </label>
                <div className="text-lg font-mono bg-indigo-50 p-3 rounded-lg border border-indigo-100 text-indigo-700">
                  {machine.node_no || "0"}
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-500 flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  Total Tags
                </label>
                <div className="text-lg font-semibold bg-purple-50 p-3 rounded-lg border border-purple-100 text-black">
                  {machine.total_no_tags || 0}
                </div>
              </div>
            </div>

            {/* Full Width Machine Node ID */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-500 flex items-center gap-2">
                <Database className="h-4 w-4" />
                Machine Node ID
              </label>

              <div className="text-sm bg-gray-900 text-white p-3 rounded-lg font-mono break-all">
                {machine.machine_node_id}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Table Properties Card */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Layers className="h-5 w-5 text-blue-600" />
              </div>
              Table Properties
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-500 flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Minute Table
                </label>
                <code className="block text-sm bg-gradient-to-r from-blue-50 to-cyan-50 p-3 rounded-lg font-mono border border-blue-200 text-blue-700">
                  {machine.min_table_name}
                </code>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-500 flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Hour Table
                </label>
                <code className="block text-sm bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg font-mono border border-green-200 text-green-700">
                  {machine.hour_table_name}
                </code>
              </div>
            </div>

            <Separator className="bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-500">
                  Partitioning
                </label>
                <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200 border-0 w-full justify-center py-2">
                  Monthly
                </Badge>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-500">
                  Primary Key
                </label>
                <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border-0 w-full justify-center py-2">
                  id + timestamp
                </Badge>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-500">
                  Unique Constraint
                </label>
                <Badge className="bg-purple-100 text-black hover:bg-purple-200 border-0 w-full justify-center py-2">
                  machine_id + timestamp
                </Badge>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-500">
                  Timestamp Column
                </label>
                <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200 border-0 w-full justify-center py-2 font-mono">
                  LOGGING_TIMESTAMPS
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Machine Tags Configuration - Full Width */}
      <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-black">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Tag className="h-5 w-5 text-slate-900" />
            </div>
            Machine Tags Configuration
          </CardTitle>
          <p className="text-sm text-gray-500 mt-1">
            Configured tags for data collection and table structure
          </p>
        </CardHeader>
        <CardContent>
          {tags.length === 0 ? (
            <div className="text-center py-16 bg-gradient-to-br from-gray-50 to-white rounded-xl">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tag className="h-10 w-10 text-slate-900" />
              </div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                No tags configured
              </h3>
              <p className="text-gray-500 max-w-md mx-auto">
                This machine has no tags configured yet. Tags are used to
                collect specific data points from the machine.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <Table>
                  <TableHeader className="bg-gradient-to-r from-purple-50 to-indigo-50">
                    <TableRow>
                      <TableHead className="w-[80px] font-semibold text-black">
                        Sr. No
                      </TableHead>
                      <TableHead className="font-semibold text-black">
                        <div className="flex items-center gap-2">
                          <Hash className="h-4 w-4" />
                          Node ID
                        </div>
                      </TableHead>
                      <TableHead className="font-semibold text-black">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4" />
                          Column Name
                        </div>
                      </TableHead>
                      <TableHead className="font-semibold text-black">
                        <div className="flex items-center gap-2">
                          <Type className="h-4 w-4" />
                          Variant Type
                        </div>
                      </TableHead>
                      <TableHead className="font-semibold text-black">
                        <div className="flex items-center gap-2">
                          <Database className="h-4 w-4" />
                          PostgreSQL Type
                        </div>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tags.map((tag, index) => (
                      <TableRow
                        key={tag.id || index}
                        className="hover:bg-gradient-to-r hover:from-purple-50/30 hover:to-indigo-50/30 transition-all"
                      >
                        <TableCell>
                          <Badge className="bg-purple-100 text-black hover:bg-purple-200 border-0">
                            #{index + 1}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <code className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1.5 rounded-md font-mono border border-indigo-200">
                            {tag.node_id}
                          </code>
                        </TableCell>
                        <TableCell>
                          <code className="text-xs bg-blue-50 text-blue-700 px-2 py-1.5 rounded-md font-mono border border-blue-200">
                            {tag.column_name}
                          </code>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-0">
                            {tag.data_type || "VariantType.Float"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200 border-0">
                            {convertToPostgresDataType(
                              tag.data_type || "VariantType.Float",
                            )}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700 text-center">
                  <span className="font-semibold text-black">
                    {tags.length} tags
                  </span>{" "}
                  configured for this machine. These tags will create
                  corresponding columns in the minute and hour tables.
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MachineDetailsPage;
