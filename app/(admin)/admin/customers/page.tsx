"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { IconUsers, IconMail } from "@/components/ui/Icons";

export default function AdminCustomers() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const customers = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      status: "Active",
      avatar: "AJ",
      joinDate: "2024-01-15",
      lastActive: "2 hours ago",
      plan: "Premium",
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@example.com",
      status: "Invited",
      avatar: "BS",
      joinDate: "2024-01-20",
      lastActive: "Never",
      plan: "Basic",
    },
    {
      id: 3,
      name: "Carol Davis",
      email: "carol@example.com",
      status: "Active",
      avatar: "CD",
      joinDate: "2024-01-10",
      lastActive: "1 day ago",
      plan: "Premium",
    },
  ];

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      selectedStatus === "all" ||
      customer.status.toLowerCase() === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="px-4 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 min-h-screen">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Customer Management
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            Manage your clients and their subscriptions
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            onClick={() =>
              (window as any).toast?.("Open add-client modal", {
                kind: "info",
                title: "Add Client",
              })
            }
            className="h-11 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium transition-all duration-200 transform hover:scale-105"
          >
            <IconUsers size={16} className="mr-2" />
            Add Client
          </Button>
          <Button
            onClick={() =>
              (window as any).toast?.("Open bulk invite", {
                kind: "info",
                title: "Bulk Invite",
              })
            }
            variant="outline"
            className="h-11 px-6 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <IconMail size={16} className="mr-2" />
            Bulk Invite
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/50">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  Total Clients
                </p>
                <p className="text-xl sm:text-2xl font-bold text-blue-700 dark:text-blue-300">
                  {customers.length}
                </p>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-500 flex items-center justify-center">
                <span className="text-lg sm:text-2xl">👥</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/50">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600 dark:text-green-400">
                  Active
                </p>
                <p className="text-xl sm:text-2xl font-bold text-green-700 dark:text-green-300">
                  {customers.filter((c) => c.status === "Active").length}
                </p>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-green-500 flex items-center justify-center">
                <span className="text-lg sm:text-2xl">✅</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/50">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-amber-600 dark:text-amber-400">
                  Pending
                </p>
                <p className="text-xl sm:text-2xl font-bold text-amber-700 dark:text-amber-300">
                  {customers.filter((c) => c.status === "Invited").length}
                </p>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500 flex items-center justify-center">
                <span className="text-lg sm:text-2xl">⏳</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/50">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600 dark:text-purple-400">
                  Premium
                </p>
                <p className="text-xl sm:text-2xl font-bold text-purple-700 dark:text-purple-300">
                  {customers.filter((c) => c.plan === "Premium").length}
                </p>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-purple-500 flex items-center justify-center">
                <span className="text-lg sm:text-2xl">💎</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/50">
        <CardHeader className="bg-gradient-to-r from-indigo-50/50 to-purple-50/50 dark:from-indigo-900/20 dark:to-purple-900/20 border-b border-white/20 dark:border-gray-700/50 p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
            Search & Filters
          </h2>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search customers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-11 px-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="h-11 px-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 select-with-icon select-status hover:shadow-lg hover:scale-105"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="invited">Invited</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Customer Table */}
      <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/50">
        <CardHeader className="bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-900/20 dark:to-indigo-900/20 border-b border-white/20 dark:border-gray-700/50 p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
            Customer List
          </h2>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto table-scroll">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-gray-50/80 to-blue-50/60 dark:from-gray-800/80 dark:to-blue-900/20 border-b border-white/20 dark:border-gray-700/50">
                <tr>
                  <th className="text-left p-4 font-medium text-gray-900 dark:text-white">
                    Customer
                  </th>
                  <th className="text-left p-4 font-medium text-gray-900 dark:text-white">
                    Status
                  </th>
                  <th className="text-left p-4 font-medium text-gray-900 dark:text-white">
                    Plan
                  </th>
                  <th className="text-left p-4 font-medium text-gray-900 dark:text-white">
                    Last Active
                  </th>
                  <th className="text-left p-4 font-medium text-gray-900 dark:text-white">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.map((customer) => (
                  <tr
                    key={customer.id}
                    className="border-b border-white/20 dark:border-gray-700/50 hover:bg-gradient-to-r hover:from-white/60 hover:to-gray-50/60 dark:hover:from-gray-700/60 dark:hover:to-gray-800/60 transition-all duration-200"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium">
                          {customer.avatar}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            {customer.name}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {customer.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          customer.status === "Active"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
                        }`}
                      >
                        {customer.status === "Active" ? "✅" : "⏳"}{" "}
                        {customer.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          customer.plan === "Premium"
                            ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400"
                            : "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400"
                        }`}
                      >
                        {customer.plan === "Premium" ? "💎" : "📦"}{" "}
                        {customer.plan}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-gray-500 dark:text-gray-400">
                      {customer.lastActive}
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() =>
                            (window as any).toast?.(
                              `Editing ${customer.name}`,
                              { kind: "info" }
                            )
                          }
                          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          title="Edit Customer"
                        >
                          <span className="text-gray-500 dark:text-gray-400">
                            ✏️
                          </span>
                        </button>
                        <button
                          onClick={() =>
                            (window as any).toast?.(
                              `Email sent to ${customer.email}`,
                              { kind: "success", title: "Email" }
                            )
                          }
                          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          title="Send Email"
                        >
                          <span className="text-gray-500 dark:text-gray-400">
                            📧
                          </span>
                        </button>
                        <button
                          onClick={() =>
                            router.push(`/portal?client=${customer.id}`)
                          }
                          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          title="View Customer Portal"
                        >
                          <span className="text-gray-500 dark:text-gray-400">
                            👁️
                          </span>
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
