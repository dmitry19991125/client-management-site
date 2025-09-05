"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import {
  IconDownload,
  IconEye,
  IconCreditCard,
  IconMail,
} from "@/components/ui/Icons";

export default function AdminPayments() {
  const router = useRouter();
  const [selectedPeriod, setSelectedPeriod] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const payments = [
    {
      id: 1,
      user: "Alice Johnson",
      email: "alice@example.com",
      method: "PayPal",
      amount: 120.0,
      status: "Paid",
      date: "2024-01-15",
      transactionId: "TXN-001",
      avatar: "AJ",
    },
    {
      id: 2,
      user: "Bob Smith",
      email: "bob@example.com",
      method: "ATH Móvil",
      amount: 85.0,
      status: "Pending",
      date: "2024-01-14",
      transactionId: "TXN-002",
      avatar: "BS",
    },
    {
      id: 3,
      user: "Carol Davis",
      email: "carol@example.com",
      method: "PayPal",
      amount: 200.0,
      status: "Paid",
      date: "2024-01-13",
      transactionId: "TXN-003",
      avatar: "CD",
    },
    {
      id: 4,
      user: "David Wilson",
      email: "david@example.com",
      method: "ATH Móvil",
      amount: 150.0,
      status: "Failed",
      date: "2024-01-12",
      transactionId: "TXN-004",
      avatar: "DW",
    },
  ];

  const filteredPayments = payments.filter((payment) => {
    const matchesPeriod =
      selectedPeriod === "all" ||
      (selectedPeriod === "today" && payment.date === "2024-01-15") ||
      (selectedPeriod === "week" &&
        ["2024-01-15", "2024-01-14", "2024-01-13", "2024-01-12"].includes(
          payment.date
        ));
    const matchesStatus =
      selectedStatus === "all" ||
      payment.status.toLowerCase() === selectedStatus;
    return matchesPeriod && matchesStatus;
  });

  const totalRevenue = payments
    .filter((p) => p.status === "Paid")
    .reduce((sum, p) => sum + p.amount, 0);
  const pendingAmount = payments
    .filter((p) => p.status === "Pending")
    .reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="px-4 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8 bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Payment Management
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Monitor transactions and payment status
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            onClick={() =>
              alert(
                "Process Payments functionality would handle pending payments"
              )
            }
            className="h-11 px-6 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium transition-all duration-200 transform hover:scale-105"
          >
            <IconDownload size={16} className="mr-2" />
            Process Payments
          </Button>
          <Button
            onClick={() =>
              alert(
                "Export Report functionality would generate payment reports"
              )
            }
            variant="outline"
            className="h-11 px-6 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <IconEye size={16} className="mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600 dark:text-green-400">
                  Total Revenue
                </p>
                <p className="text-2xl font-bold text-green-700 dark:text-green-300">
                  ${totalRevenue.toFixed(2)}
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center">
                <IconDownload size={24} color="white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  Successful
                </p>
                <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                  {payments.filter((p) => p.status === "Paid").length}
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center">
                <span className="text-2xl">✅</span>
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
                  ${pendingAmount.toFixed(2)}
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center">
                <span className="text-2xl">⏳</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-red-200 dark:border-red-800/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-red-600 dark:text-red-400">
                  Failed
                </p>
                <p className="text-2xl font-bold text-red-700 dark:text-red-300">
                  {payments.filter((p) => p.status === "Failed").length}
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-red-500 flex items-center justify-center">
                <span className="text-2xl">❌</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="w-full h-11 px-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 select-with-icon select-period hover:shadow-lg hover:scale-105"
              >
                <option value="all">All Time</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
              </select>
            </div>
            <div className="flex-1">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full h-11 px-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 select-with-icon select-status hover:shadow-lg hover:scale-105"
              >
                <option value="all">All Status</option>
                <option value="paid">Paid</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payments Table */}
      <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/50">
        <CardHeader className="bg-gradient-to-r from-amber-50/50 to-orange-50/50 dark:from-amber-900/20 dark:to-orange-900/20 border-b border-white/20 dark:border-gray-700/50 p-4 sm:p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Transaction History
          </h2>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto table-scroll">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-800 border-b">
                <tr>
                  <th className="text-left p-4 font-medium text-gray-900 dark:text-white">
                    Customer
                  </th>
                  <th className="text-left p-4 font-medium text-gray-900 dark:text-white">
                    Method
                  </th>
                  <th className="text-left p-4 font-medium text-gray-900 dark:text-white">
                    Amount
                  </th>
                  <th className="text-left p-4 font-medium text-gray-900 dark:text-white">
                    Status
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
                {filteredPayments.map((payment) => (
                  <tr
                    key={payment.id}
                    className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium">
                          {payment.avatar}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            {payment.user}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {payment.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            payment.method === "PayPal"
                              ? "bg-blue-100 dark:bg-blue-900/30"
                              : "bg-green-100 dark:bg-green-900/30"
                          }`}
                        >
                          <IconCreditCard
                            size={16}
                            color={
                              payment.method === "PayPal"
                                ? "#3b82f6"
                                : "#10b981"
                            }
                          />
                        </span>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {payment.method}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <p className="text-lg font-bold text-gray-900 dark:text-white">
                        ${payment.amount.toFixed(2)}
                      </p>
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          payment.status === "Paid"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                            : payment.status === "Pending"
                            ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
                            : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                        }`}
                      >
                        {payment.status === "Paid"
                          ? "✅"
                          : payment.status === "Pending"
                          ? "⏳"
                          : "❌"}{" "}
                        {payment.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-gray-500 dark:text-gray-400">
                      {payment.date}
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() =>
                            alert(`View details for ${payment.transactionId}`)
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
                            alert(`Retry payment for ${payment.user}`)
                          }
                          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          title="Retry Payment"
                        >
                          <IconDownload
                            size={16}
                            className="text-gray-500 dark:text-gray-400"
                          />
                        </button>
                        <button
                          onClick={() =>
                            alert(`Send receipt to ${payment.email}`)
                          }
                          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          title="Send Receipt"
                        >
                          <IconMail size={16} className="text-gray-400" />
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
