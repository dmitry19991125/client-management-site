"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import {
  IconUsers,
  IconCreditCard,
  IconAlertTriangle,
  IconDownload,
} from "@/components/ui/Icons";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AdminDashboard() {
  const { t } = useLanguage();
  const stats = [
    {
      title: t("admin.stats.clients"),
      value: "24",
      change: "+12%",
      icon: IconUsers,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: t("admin.stats.subscriptions"),
      value: "18",
      change: "+8%",
      icon: IconCreditCard,
      color: "from-green-500 to-green-600",
    },
    {
      title: t("admin.stats.payments"),
      value: "3",
      change: "-2",
      icon: IconAlertTriangle,
      color: "from-amber-500 to-amber-600",
    },
    {
      title: t("admin.stats.revenue"),
      value: "$2,160",
      change: "+15%",
      icon: IconDownload,
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <div className="px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 py-3 xs:py-4 sm:py-6 md:py-8 lg:py-10 space-y-3 xs:space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 bg-gradient-to-br from-slate-50 via-red-50 to-rose-100 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 min-h-screen">
      {/* Header */}
      <div>
        <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-1 xs:mb-2 sm:mb-3 md:mb-4 lg:mb-5">
          {t("admin.dashboard.title")}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl">
          {t("admin.dashboard.subtitle")}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200 border border-white/20 dark:border-gray-700/50"
          >
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                    {stat.title}
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                    {stat.change}
                  </p>
                </div>
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                >
                  <stat.icon size={24} color="white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/50">
          <CardHeader className="bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-900/20 dark:to-indigo-900/20 border-b border-white/20 dark:border-gray-700/50 p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
              {t("admin.recent.activity")}
            </h2>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  action: "New client registered",
                  user: "Alice Johnson",
                  time: "2 min ago",
                  type: "success",
                },
                {
                  action: "Payment received",
                  user: "Bob Smith",
                  time: "15 min ago",
                  type: "success",
                },
                {
                  action: "Report uploaded",
                  user: "Carol Davis",
                  time: "1 hour ago",
                  type: "info",
                },
                {
                  action: "Support ticket opened",
                  user: "David Wilson",
                  time: "2 hours ago",
                  type: "warning",
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-white/60 to-gray-50/60 dark:from-gray-700/60 dark:to-gray-800/60 backdrop-blur-sm border border-white/30 dark:border-gray-600/50"
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      activity.type === "success"
                        ? "bg-green-500"
                        : activity.type === "warning"
                        ? "bg-amber-500"
                        : "bg-blue-500"
                    }`}
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {activity.user} • {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/50">
          <CardHeader className="bg-gradient-to-r from-green-50/50 to-emerald-50/50 dark:from-green-900/20 dark:to-emerald-900/20 border-b border-white/20 dark:border-gray-700/50 p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
              {t("admin.quick.actions")}
            </h2>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <button className="p-3 sm:p-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-200 text-center shadow-lg hover:shadow-xl transform hover:scale-105">
                <div className="text-xl sm:text-2xl mb-2">👤</div>
                <div className="text-xs sm:text-sm font-medium">
                  {t("admin.add.client")}
                </div>
              </button>
              <button className="p-3 sm:p-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transition-all duration-200 text-center shadow-lg hover:shadow-xl transform hover:scale-105">
                <div className="text-xl sm:text-2xl mb-2">📊</div>
                <div className="text-xs sm:text-sm font-medium">
                  {t("admin.upload.report")}
                </div>
              </button>
              <button className="p-3 sm:p-4 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 transition-all duration-200 text-center shadow-lg hover:shadow-xl transform hover:scale-105">
                <div className="text-xl sm:text-2xl mb-2">💰</div>
                <div className="text-xs sm:text-sm font-medium">
                  {t("admin.view.payments")}
                </div>
              </button>
              <button className="p-3 sm:p-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 transition-all duration-200 text-center shadow-lg hover:shadow-xl transform hover:scale-105">
                <div className="text-xl sm:text-2xl mb-2">📈</div>
                <div className="text-xs sm:text-sm font-medium">
                  {t("admin.analytics")}
                </div>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
