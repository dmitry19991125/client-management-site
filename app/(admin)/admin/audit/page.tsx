"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import {
  IconUsers,
  IconUpload,
  IconCreditCard,
  IconEye,
  IconTrash,
  IconFileText,
} from "@/components/ui/Icons";

type ToastFunction = (
  message: string,
  options?: { kind: string; title: string }
) => void;
declare global {
  interface Window {
    toast?: ToastFunction;
  }
}

export default function AdminAudit() {
  const router = useRouter();
  const [selectedActor, setSelectedActor] = useState("all");
  const [selectedAction, setSelectedAction] = useState("all");

  const auditLogs = [
    {
      id: 1,
      actor: "admin",
      actorName: "John Admin",
      action: "created client",
      entity: "alice",
      entityName: "Alice Johnson",
      date: "2025-01-15",
      time: "14:30:25",
      ip: "192.168.1.100",
      userAgent: "Mozilla/5.0...",
      details: "Client account created with email alice@example.com",
    },
    {
      id: 2,
      actor: "admin",
      actorName: "John Admin",
      action: "uploaded report",
      entity: "bob",
      entityName: "Bob Smith",
      date: "2025-01-15",
      time: "13:45:12",
      ip: "192.168.1.100",
      userAgent: "Mozilla/5.0...",
      details: "Q4_Report.pdf uploaded to client portfolio",
    },
    {
      id: 3,
      actor: "system",
      actorName: "System",
      action: "payment processed",
      entity: "carol",
      entityName: "Carol Davis",
      date: "2025-01-15",
      time: "12:15:33",
      ip: "system",
      userAgent: "PayPal Webhook",
      details: "Payment of $200.00 processed successfully",
    },
    {
      id: 4,
      actor: "admin",
      actorName: "Jane Admin",
      action: "updated client",
      entity: "david",
      entityName: "David Wilson",
      date: "2025-01-14",
      time: "16:22:45",
      ip: "192.168.1.101",
      userAgent: "Mozilla/5.0...",
      details: "Client plan upgraded from Basic to Premium",
    },
    {
      id: 5,
      actor: "admin",
      actorName: "John Admin",
      action: "deleted file",
      entity: "alice",
      entityName: "Alice Johnson",
      date: "2025-01-14",
      time: "11:30:18",
      ip: "192.168.1.100",
      userAgent: "Mozilla/5.0...",
      details: "Old_Report.pdf removed from client files",
    },
  ];

  const filteredLogs = auditLogs.filter((log) => {
    const matchesActor = selectedActor === "all" || log.actor === selectedActor;
    const matchesAction =
      selectedAction === "all" || log.action.includes(selectedAction);
    return matchesActor && matchesAction;
  });

  const getActionIcon = (action: string) => {
    if (action.includes("created")) return IconUsers;
    if (action.includes("uploaded")) return IconUpload;
    if (action.includes("payment")) return IconCreditCard;
    if (action.includes("updated")) return IconEye;
    if (action.includes("deleted")) return IconTrash;
    return IconFileText;
  };

  const getActionColor = (action: string) => {
    if (action.includes("created"))
      return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
    if (action.includes("uploaded"))
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
    if (action.includes("payment"))
      return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
    if (action.includes("updated"))
      return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400";
    if (action.includes("deleted"))
      return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
    return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
  };

  return (
    <div className="px-4 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8 bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Audit Logs
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Track all system activities and user actions
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            onClick={() =>
              window.toast?.("Exporting logs as CSV...", {
                kind: "info",
                title: "Export",
              })
            }
            className="h-11 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium transition-all duration-200 transform hover:scale-105"
          >
            <span className="mr-2">📊</span>
            Export Logs
          </Button>
          <Button
            onClick={() =>
              window.toast?.("Opening advanced search filters...", {
                kind: "info",
                title: "Search",
              })
            }
            variant="outline"
            className="h-11 px-6 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <span className="mr-2">🔍</span>
            Advanced Search
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  Total Events
                </p>
                <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                  {auditLogs.length}
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center">
                <span className="text-2xl">📋</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600 dark:text-green-400">
                  Today
                </p>
                <p className="text-2xl font-bold text-green-700 dark:text-green-300">
                  {auditLogs.filter((log) => log.date === "2025-01-15").length}
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center">
                <span className="text-2xl">📅</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600 dark:text-purple-400">
                  Admin Actions
                </p>
                <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                  {auditLogs.filter((log) => log.actor === "admin").length}
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 border-amber-200 dark:border-amber-800/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-amber-600 dark:text-amber-400">
                  System Events
                </p>
                <p className="text-2xl font-bold text-amber-700 dark:text-amber-300">
                  {auditLogs.filter((log) => log.actor === "system").length}
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center">
                <span className="text-2xl">⚙️</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/50">
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <select
                value={selectedActor}
                onChange={(e) => setSelectedActor(e.target.value)}
                className="w-full h-11 px-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 select-with-icon select-filter hover:shadow-lg hover:scale-105"
              >
                <option value="all">All Actors</option>
                <option value="admin">Admin</option>
                <option value="system">System</option>
                <option value="user">User</option>
              </select>
            </div>
            <div className="flex-1">
              <select
                value={selectedAction}
                onChange={(e) => setSelectedAction(e.target.value)}
                className="w-full h-11 px-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 select-with-icon select-filter hover:shadow-lg hover:scale-105"
              >
                <option value="all">All Actions</option>
                <option value="created">Created</option>
                <option value="uploaded">Uploaded</option>
                <option value="payment">Payment</option>
                <option value="updated">Updated</option>
                <option value="deleted">Deleted</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Audit Logs Table */}
      <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/50">
        <CardHeader className="bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-900/20 dark:to-indigo-900/20 border-b border-white/20 dark:border-gray-700/50 p-4 sm:p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Activity Log
          </h2>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto table-scroll">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-800 border-b">
                <tr>
                  <th className="text-left p-4 font-medium text-gray-900 dark:text-white">
                    Actor
                  </th>
                  <th className="text-left p-4 font-medium text-gray-900 dark:text-white">
                    Action
                  </th>
                  <th className="text-left p-4 font-medium text-gray-900 dark:text-white">
                    Entity
                  </th>
                  <th className="text-left p-4 font-medium text-gray-900 dark:text-white">
                    Details
                  </th>
                  <th className="text-left p-4 font-medium text-gray-900 dark:text-white">
                    Date & Time
                  </th>
                  <th className="text-left p-4 font-medium text-gray-900 dark:text-white">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredLogs.map((log) => (
                  <tr
                    key={log.id}
                    className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            log.actor === "admin"
                              ? "bg-gradient-to-br from-blue-500 to-purple-600"
                              : "bg-gradient-to-br from-gray-500 to-gray-600"
                          }`}
                        >
                          {log.actor === "admin" ? (
                            <IconUsers size={20} color="white" />
                          ) : (
                            <IconEye size={20} color="white" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            {log.actorName}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {log.actor}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getActionColor(
                          log.action
                        )}`}
                      >
                        {(() => {
                          const IconComponent = getActionIcon(log.action);
                          return <IconComponent size={16} className="mr-1" />;
                        })()}{" "}
                        {log.action}
                      </span>
                    </td>
                    <td className="p-4">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {log.entityName}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {log.entity}
                        </p>
                      </div>
                    </td>
                    <td className="p-4">
                      <p className="text-sm text-gray-600 dark:text-gray-300 max-w-xs truncate">
                        {log.details}
                      </p>
                    </td>
                    <td className="p-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {log.date}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {log.time}
                        </p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() =>
                            window.toast?.(`Viewing details for #${log.id}`, {
                              kind: "info",
                            })
                          }
                          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          title="View Details"
                        >
                          <IconEye
                            size={16}
                            className="text-gray-500 dark:text-gray-400"
                          />
                        </button>
                        <button
                          onClick={() =>
                            window.toast?.("Copied details", {
                              kind: "success",
                            })
                          }
                          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          title="Copy Details"
                        >
                          <IconFileText
                            size={16}
                            className="text-gray-500 dark:text-gray-400"
                          />
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
