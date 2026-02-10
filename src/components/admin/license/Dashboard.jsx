import React, { useState } from "react";
import { UploadCloud, FileText, X } from "lucide-react";
import toast from "react-hot-toast";
import api from "../../../api/api";

const Dashboard = () => {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setUploadProgress(0);
    }
  };

  const removeFile = () => {
    setFile(null);
    setUploadProgress(0);
  };

  const handleSubmit = async () => {
    if (!file) {
      toast.error("Please upload a license file.");
      return;
    }

    const formData = new FormData();
    formData.append("license", file);

    try {
      setLoading(true);

      const response = await api.post("/license/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const percent = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total,
          );
          setUploadProgress(percent);
        },
      });

      toast.success(response.data.message);
      setFile(null);
      setUploadProgress(0);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Server not reachable.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-black text-center">
          License Upload
        </h2>
        <p className="text-gray-500 mt-1 text-center">
          Upload your official license document for verification.
        </p>
      </div>

      <div className="bg-white shadow-xl rounded-2xl p-8 space-y-6">
        <label className="flex flex-col items-center justify-center w-full h-56 px-6 transition bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100">
          <input type="file" className="hidden" onChange={handleFileChange} />

          <UploadCloud size={40} className="text-green-600 mb-3" />

          <p className="text-gray-700 font-medium">
            Click to upload or drag & drop
          </p>

          <p className="text-gray-400 text-sm mt-1">
            Upload license (.lic or .json)
          </p>
        </label>

        {file && (
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg shadow-sm">
              <div className="flex items-center gap-3">
                <FileText className="text-green-600" size={20} />
                <div>
                  <p className="text-sm font-medium text-black">{file.name}</p>
                  <p className="text-xs text-gray-400">
                    {(file.size / 1024).toFixed(2)} KB
                  </p>
                </div>
              </div>

              <button
                onClick={removeFile}
                className="text-gray-500 hover:text-red-500 transition"
                disabled={loading}
              >
                <X size={18} />
              </button>
            </div>

            {/* Progress Bar */}
            {loading && (
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-green-600 h-2 transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            )}
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`w-full py-3 font-medium shadow-md transition rounded-lg ${
            loading
              ? "bg-gray-400 cursor-not-allowed text-white"
              : "bg-green-600 hover:bg-green-700 text-white"
          }`}
        >
          {loading ? `Uploading ${uploadProgress}%...` : "Upload License"}
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
