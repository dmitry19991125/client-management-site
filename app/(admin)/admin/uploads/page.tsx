"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import {
  IconUpload,
  IconEye,
  IconDownload,
  IconTrash,
} from "@/components/ui/Icons";

export default function AdminUploads() {
  const router = useRouter();
  const [dragActive, setDragActive] = useState(false);
  const [selectedClient, setSelectedClient] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([
    {
      id: 1,
      name: "Q4_Report.pdf",
      client: "Alice Johnson",
      date: "2024-01-15",
      size: "2.4 MB",
      type: "PDF",
    },
    {
      id: 2,
      name: "Portfolio_Chart.png",
      client: "Bob Smith",
      date: "2024-01-14",
      size: "1.8 MB",
      type: "Image",
    },
    {
      id: 3,
      name: "Investment_Summary.csv",
      client: "Carol Davis",
      date: "2024-01-13",
      size: "0.5 MB",
      type: "CSV",
    },
  ]);

  const clients = [
    { id: "alice", name: "Alice Johnson" },
    { id: "bob", name: "Bob Smith" },
    { id: "carol", name: "Carol Davis" },
  ];

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    // Handle file drop logic here
  };

  return (
    <div className="px-4 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8 bg-gradient-to-br from-slate-50 via-amber-50 to-orange-100 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            File Management
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Upload and manage client reports and charts
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            onClick={() =>
              (window as any).toast?.("Processing all pending uploads...", {
                kind: "info",
                title: "Update All",
              })
            }
            className="h-11 px-6 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-medium transition-all duration-200 transform hover:scale-105"
          >
            <IconUpload size={16} className="mr-2" />
            Update All
          </Button>
          <Button
            onClick={() =>
              (window as any).toast?.("Generating comprehensive report...", {
                kind: "info",
                title: "Report",
              })
            }
            variant="outline"
            className="h-11 px-6 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <IconEye size={16} className="mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Upload Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  Total Files
                </p>
                <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                  {uploadedFiles.length}
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center">
                <span className="text-2xl">📁</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600 dark:text-green-400">
                  This Week
                </p>
                <p className="text-2xl font-bold text-green-700 dark:text-green-300">
                  12
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center">
                <span className="text-2xl">📈</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600 dark:text-purple-400">
                  Total Size
                </p>
                <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                  4.7 MB
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center">
                <span className="text-2xl">💾</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 border-amber-200 dark:border-amber-800/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-amber-600 dark:text-amber-400">
                  Pending
                </p>
                <p className="text-2xl font-bold text-amber-700 dark:text-amber-300">
                  3
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center">
                <span className="text-2xl">⏳</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upload Area */}
      <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/50">
        <CardHeader className="bg-gradient-to-r from-amber-50/50 to-orange-50/50 dark:from-amber-900/20 dark:to-orange-900/20 border-b border-white/20 dark:border-gray-700/50 p-4 sm:p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Upload Files
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Drag and drop files or click to browse
          </p>
        </CardHeader>
        <CardContent>
          <div
            className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${
              dragActive
                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-3xl">📤</span>
              </div>
              <div>
                <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Drop files here or click to upload
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Supports PDF, PNG, JPG, CSV files up to 10MB
                </p>
              </div>
              <Button
                onClick={() =>
                  (window as any).toast?.("Opening file picker...", {
                    kind: "info",
                  })
                }
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                Choose Files
              </Button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Assign to Client
              </label>
              <select
                value={selectedClient}
                onChange={(e) => setSelectedClient(e.target.value)}
                className="w-full h-11 px-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Select a client...</option>
                {clients.map((client) => (
                  <option key={client.id} value={client.id}>
                    {client.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-end gap-3">
              <Button
                onClick={() =>
                  (window as any).toast?.(
                    `Assigned files to ${selectedClient || "selected client"}`,
                    { kind: "success", title: "Assignment" }
                  )
                }
                variant="outline"
                className="h-11 px-6 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                Assign
              </Button>
              <Button
                onClick={() =>
                  (window as any).toast?.("Processing uploads now...", {
                    kind: "info",
                    title: "Updating",
                  })
                }
                className="h-11 px-6 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white"
              >
                Update Now
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* File List */}
      <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/50">
        <CardHeader className="bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-900/20 dark:to-indigo-900/20 border-b border-white/20 dark:border-gray-700/50 p-4 sm:p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Recent Uploads
          </h2>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto table-scroll">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-800 border-b">
                <tr>
                  <th className="text-left p-4 font-medium text-gray-900 dark:text-white">
                    File
                  </th>
                  <th className="text-left p-4 font-medium text-gray-900 dark:text-white">
                    Client
                  </th>
                  <th className="text-left p-4 font-medium text-gray-900 dark:text-white">
                    Type
                  </th>
                  <th className="text-left p-4 font-medium text-gray-900 dark:text-white">
                    Size
                  </th>
                  <th className="text-left p-4 font-medium text-gray-900 dark:text-white">
                    Date
                  </th>
                  <th className="text-left p-4 font-medium text-gray-900 dark:text-white">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {uploadedFiles.map((file) => (
                  <tr
                    key={file.id}
                    className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            file.type === "PDF"
                              ? "bg-red-100 dark:bg-red-900/30"
                              : file.type === "Image"
                              ? "bg-green-100 dark:bg-green-900/30"
                              : "bg-blue-100 dark:bg-blue-900/30"
                          }`}
                        >
                          <span className="text-lg">
                            {file.type === "PDF"
                              ? "📄"
                              : file.type === "Image"
                              ? "🖼️"
                              : "📊"}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            {file.name}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {file.type}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-medium">
                          {file.client
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <span className="text-sm text-gray-900 dark:text-white">
                          {file.client}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          file.type === "PDF"
                            ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                            : file.type === "Image"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                        }`}
                      >
                        {file.type}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-gray-500 dark:text-gray-400">
                      {file.size}
                    </td>
                    <td className="p-4 text-sm text-gray-500 dark:text-gray-400">
                      {file.date}
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() =>
                            (window as any).toast?.(`Preview ${file.name}`, {
                              kind: "info",
                            })
                          }
                          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          title="Preview File"
                        >
                          <IconEye size={16} />
                        </button>
                        <button
                          onClick={() =>
                            (window as any).toast?.(
                              `Downloading ${file.name}...`,
                              { kind: "info" }
                            )
                          }
                          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          title="Download File"
                        >
                          <IconDownload size={16} />
                        </button>
                        <button
                          onClick={() =>
                            (window as any).toast?.(`Deleted ${file.name}`, {
                              kind: "warning",
                              title: "Removed",
                            })
                          }
                          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          title="Delete File"
                        >
                          <IconTrash size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
