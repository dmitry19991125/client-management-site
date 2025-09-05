"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { IconCreditCard, IconDownload, IconEye } from "@/components/ui/Icons";

export default function PortalPayments() {
  const [status] = useState<"Paid" | "Pending">("Pending");
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<
    "payments" | "deposits" | "withdrawals"
  >("payments");
  const [amount, setAmount] = useState("");
  const [selectedDepositMethod, setSelectedDepositMethod] = useState<
    string | null
  >(null);

  const paymentMethods = [
    {
      id: "paypal",
      name: "PayPal",
      icon: IconCreditCard,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "zelle",
      name: "Zelle",
      icon: IconDownload,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: "cashapp",
      name: "Cash App",
      icon: IconEye,
      color: "from-green-500 to-green-600",
    },
    {
      id: "chime",
      name: "Chime",
      icon: IconDownload,
      color: "from-teal-500 to-teal-600",
    },
    {
      id: "ath",
      name: "ATH Móvil",
      icon: IconDownload,
      color: "from-green-500 to-green-600",
    },
  ];

  const depositMethods = [
    {
      id: "paypal",
      name: "PayPal",
      icon: IconCreditCard,
      color: "from-blue-500 to-blue-600",
      minAmount: 1,
      maxAmount: 10000,
      fee: "0%",
      processingTime: "Instant",
    },
    {
      id: "zelle",
      name: "Zelle",
      icon: IconDownload,
      color: "from-purple-500 to-purple-600",
      minAmount: 10,
      maxAmount: 5000,
      fee: "0%",
      processingTime: "Instant",
    },
    {
      id: "cashapp",
      name: "Cash App",
      icon: IconEye,
      color: "from-green-500 to-green-600",
      minAmount: 1,
      maxAmount: 2500,
      fee: "0%",
      processingTime: "Instant",
    },
    {
      id: "chime",
      name: "Chime",
      icon: IconDownload,
      color: "from-teal-500 to-teal-600",
      minAmount: 1,
      maxAmount: 10000,
      fee: "0%",
      processingTime: "Instant",
    },
    {
      id: "ath",
      name: "ATH Móvil",
      icon: IconDownload,
      color: "from-green-500 to-green-600",
      minAmount: 1,
      maxAmount: 5000,
      fee: "0%",
      processingTime: "Instant",
    },
  ];

  const withdrawalMethods = [
    {
      id: "paypal",
      name: "PayPal",
      icon: IconCreditCard,
      color: "from-blue-500 to-blue-600",
      minAmount: 1,
      maxAmount: 10000,
      fee: "$1.00",
      processingTime: "Instant",
    },
    {
      id: "zelle",
      name: "Zelle",
      icon: IconDownload,
      color: "from-purple-500 to-purple-600",
      minAmount: 10,
      maxAmount: 5000,
      fee: "$1.00",
      processingTime: "Instant",
    },
    {
      id: "cashapp",
      name: "Cash App",
      icon: IconEye,
      color: "from-green-500 to-green-600",
      minAmount: 1,
      maxAmount: 2500,
      fee: "$1.00",
      processingTime: "Instant",
    },
    {
      id: "chime",
      name: "Chime",
      icon: IconDownload,
      color: "from-teal-500 to-teal-600",
      minAmount: 1,
      maxAmount: 10000,
      fee: "$1.00",
      processingTime: "Instant",
    },
    {
      id: "ath",
      name: "ATH Móvil",
      icon: IconDownload,
      color: "from-green-500 to-green-600",
      minAmount: 1,
      maxAmount: 5000,
      fee: "$1.00",
      processingTime: "Instant",
    },
  ];

  return (
    <div className="mx-auto max-w-[1440px] px-4 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8 bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 min-h-screen">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Financial Center
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
          Manage your payments, deposits, and withdrawals
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-1 border border-white/20 dark:border-gray-700/50">
          {[
            { id: "payments", label: "Payments", icon: "💳" },
            { id: "deposits", label: "Deposits", icon: "💰" },
            { id: "withdrawals", label: "Withdrawals", icon: "🏧" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-blue-500 text-white shadow-lg"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Payments Tab */}
      {activeTab === "payments" && (
        <>
          {/* Status Card */}
          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/50">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      status === "Paid"
                        ? "bg-green-100 dark:bg-green-900/30"
                        : "bg-amber-100 dark:bg-amber-900/30"
                    }`}
                  >
                    <span
                      className={`text-lg sm:text-xl ${
                        status === "Paid" ? "text-green-600" : "text-amber-600"
                      }`}
                    >
                      {status === "Paid" ? "✅" : "⏳"}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                      Current Status
                    </h3>
                    <p
                      className={`text-sm font-medium ${
                        status === "Paid" ? "text-green-600" : "text-amber-600"
                      }`}
                    >
                      {status}
                    </p>
                  </div>
                </div>
                <div className="text-center sm:text-right">
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                    $120.00
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Monthly
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/50">
            <CardHeader className="bg-gradient-to-r from-green-50/50 to-emerald-50/50 dark:from-green-900/20 dark:to-emerald-900/20 border-b border-white/20 dark:border-gray-700/50 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                Payment Methods
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                Choose your preferred payment method
              </p>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className={`relative p-4 sm:p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 backdrop-blur-sm ${
                      selectedMethod === method.id
                        ? "border-blue-500 bg-gradient-to-r from-blue-50/80 to-blue-100/60 dark:from-blue-900/30 dark:to-blue-800/20 shadow-xl ring-4 ring-blue-500/20 scale-105"
                        : "border-white/30 dark:border-gray-600/50 bg-gradient-to-r from-white/60 to-gray-50/60 dark:from-gray-700/60 dark:to-gray-800/60 hover:from-white/80 hover:to-gray-50/80 dark:hover:from-gray-700/80 dark:hover:to-gray-800/80 hover:border-blue-300 dark:hover:border-blue-500 shadow-md hover:shadow-xl hover:scale-105 transform"
                    }`}
                    onClick={() => setSelectedMethod(method.id)}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-r ${method.color} flex items-center justify-center`}
                      >
                        {(() => {
                          const IconComponent = method.icon;
                          return <IconComponent size={24} color="white" />;
                        })()}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                          {method.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                          Secure payment processing
                        </p>
                      </div>
                    </div>
                    {selectedMethod === method.id && (
                      <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-500 flex items-center justify-center">
                          <span className="text-white text-xs sm:text-sm">
                            ✓
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Payment History */}
          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/50">
            <CardHeader className="bg-gradient-to-r from-amber-50/50 to-orange-50/50 dark:from-amber-900/20 dark:to-orange-900/20 border-b border-white/20 dark:border-gray-700/50 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                Payment History
              </h2>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    date: "Dec 15, 2024",
                    method: "PayPal",
                    amount: "$120.00",
                    status: "Paid",
                  },
                  {
                    date: "Nov 15, 2024",
                    method: "Zelle",
                    amount: "$120.00",
                    status: "Paid",
                  },
                  {
                    date: "Oct 15, 2024",
                    method: "Cash App",
                    amount: "$120.00",
                    status: "Paid",
                  },
                ].map((payment, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 rounded-lg bg-gradient-to-r from-white/60 to-gray-50/60 dark:from-gray-700/60 dark:to-gray-800/60 backdrop-blur-sm border border-white/30 dark:border-gray-600/50 shadow-md hover:shadow-lg transition-all duration-200 gap-3 sm:gap-0"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <span className="text-green-600 text-xs sm:text-sm">
                          ✓
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">
                          {payment.date}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                          {payment.method}
                        </p>
                      </div>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                        {payment.amount}
                      </p>
                      <p className="text-xs sm:text-sm text-green-600">
                        {payment.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </>
      )}

      {/* Deposits Tab */}
      {activeTab === "deposits" && (
        <>
          {/* Deposit Form */}
          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/50">
            <CardHeader className="bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-900/20 dark:to-indigo-900/20 border-b border-white/20 dark:border-gray-700/50 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                Deposit Funds
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                Add money to your account using various methods
              </p>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-6">
                {/* Amount Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Amount to Deposit
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      $
                    </span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full pl-8 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Deposit Methods */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Select Deposit Method
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 custom-scrollbar">
                    {depositMethods.map((method) => (
                      <div
                        key={method.id}
                        className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 backdrop-blur-sm ${
                          selectedDepositMethod === method.id
                            ? "border-blue-500 bg-gradient-to-r from-blue-50/80 to-blue-100/60 dark:from-blue-900/30 dark:to-blue-800/20 shadow-lg"
                            : "border-white/30 dark:border-gray-600/50 bg-gradient-to-r from-white/60 to-gray-50/60 dark:from-gray-700/60 dark:to-gray-800/60 hover:from-white/80 hover:to-gray-50/80 dark:hover:from-gray-700/80 dark:hover:to-gray-800/80 hover:border-gray-300 dark:hover:border-gray-500 shadow-md hover:shadow-lg"
                        }`}
                        onClick={() => setSelectedDepositMethod(method.id)}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-lg bg-gradient-to-r ${method.color} flex items-center justify-center`}
                          >
                            {(() => {
                              const IconComponent = method.icon;
                              return <IconComponent size={20} color="white" />;
                            })()}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                              {method.name}
                            </h3>
                            <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1 mt-1">
                              <p>
                                Min: ${method.minAmount} | Max: $
                                {method.maxAmount}
                              </p>
                              <p>
                                Fee: {method.fee} | Time:{" "}
                                {method.processingTime}
                              </p>
                            </div>
                          </div>
                        </div>
                        {selectedDepositMethod === method.id && (
                          <div className="absolute top-2 right-2">
                            <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                              <span className="text-white text-xs">✓</span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deposit Button */}
                <Button
                  onClick={() =>
                    (window as any).toast?.(
                      `Processing ${amount ? `$${amount}` : "deposit"} via ${
                        selectedDepositMethod || "selected method"
                      }`,
                      { kind: "success", title: "Deposit Started" }
                    )
                  }
                  disabled={!amount || !selectedDepositMethod}
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  <IconDownload size={16} className="mr-2" />
                  Deposit Funds
                </Button>
              </div>
            </CardContent>
          </Card>
        </>
      )}

      {/* Withdrawals Tab */}
      {activeTab === "withdrawals" && (
        <>
          {/* Withdrawal Form */}
          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/50">
            <CardHeader className="bg-gradient-to-r from-green-50/50 to-emerald-50/50 dark:from-green-900/20 dark:to-emerald-900/20 border-b border-white/20 dark:border-gray-700/50 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                Withdraw Funds
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                Withdraw money from your account to your preferred method
              </p>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-6">
                {/* Amount Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Amount to Withdraw
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      $
                    </span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full pl-8 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Available balance: $2,450.00
                  </p>
                </div>

                {/* Withdrawal Methods */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Select Withdrawal Method
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 custom-scrollbar">
                    {withdrawalMethods.map((method) => (
                      <div
                        key={method.id}
                        className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 backdrop-blur-sm ${
                          selectedDepositMethod === method.id
                            ? "border-blue-500 bg-gradient-to-r from-blue-50/80 to-blue-100/60 dark:from-blue-900/30 dark:to-blue-800/20 shadow-xl ring-4 ring-blue-500/20 scale-105"
                            : "border-white/30 dark:border-gray-600/50 bg-gradient-to-r from-white/60 to-gray-50/60 dark:from-gray-700/60 dark:to-gray-800/60 hover:from-white/80 hover:to-gray-50/80 dark:hover:from-gray-700/80 dark:hover:to-gray-800/80 hover:border-blue-300 dark:hover:border-blue-500 shadow-md hover:shadow-xl hover:scale-105 transform"
                        }`}
                        onClick={() => setSelectedDepositMethod(method.id)}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-lg bg-gradient-to-r ${method.color} flex items-center justify-center`}
                          >
                            {(() => {
                              const IconComponent = method.icon;
                              return <IconComponent size={20} color="white" />;
                            })()}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                              {method.name}
                            </h3>
                            <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1 mt-1">
                              <p>
                                Min: ${method.minAmount} | Max: $
                                {method.maxAmount}
                              </p>
                              <p>
                                Fee: {method.fee} | Time:{" "}
                                {method.processingTime}
                              </p>
                            </div>
                          </div>
                        </div>
                        {selectedDepositMethod === method.id && (
                          <div className="absolute top-2 right-2">
                            <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center animate-pulse">
                              <span className="text-white text-xs">✓</span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Withdrawal Button */}
                <Button
                  onClick={() =>
                    (window as any).toast?.(
                      `Processing ${amount ? `$${amount}` : "withdrawal"} via ${
                        selectedDepositMethod || "selected method"
                      }`,
                      { kind: "warning", title: "Withdrawal Initiated" }
                    )
                  }
                  disabled={!amount || !selectedDepositMethod}
                  className="w-full h-12 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  <IconDownload size={16} className="mr-2" />
                  Withdraw Funds
                </Button>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
