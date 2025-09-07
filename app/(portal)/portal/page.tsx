"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LastUpdated } from "@/components/LastUpdated";
import { ChartPreview } from "@/components/ChartPreview";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  IconDownload,
  IconMessageCircle,
  IconCreditCard,
  IconEye,
  IconUpload,
} from "@/components/ui/Icons";

export default function PortalDashboard() {
  const [username] = useState("Demo Client");
  const [activeTab, setActiveTab] = useState("overview");
  const [isLoading, setIsLoading] = useState(false);
  const [portfolioValue, setPortfolioValue] = useState(24580);
  const [growthRate, setGrowthRate] = useState(12.5);
  const [activeAction, setActiveAction] = useState<number | null>(null);
  const router = useRouter();
  const { t } = useLanguage();

  const chartConfig = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Portfolio Value",
        data: [100, 120, 115, 140, 160, 180, 175, 190, 210, 200, 220, 245.8],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Market Index",
        data: [100, 105, 102, 108, 112, 118, 115, 120, 125, 122, 128, 132],
        borderColor: "#10b981",
        backgroundColor: "rgba(16, 185, 129, 0.1)",
        fill: false,
        tension: 0.4,
        borderDash: [5, 5],
      },
    ],
  };

  const quickActions = [
    {
      icon: IconDownload,
      label: t("portal.view.reports"),
      href: "/portal",
    },
    {
      icon: IconMessageCircle,
      label: t("portal.chat.support"),
      href: "/portal/chat",
    },
    {
      icon: IconCreditCard,
      label: t("portal.make.payment"),
      href: "/portal/payments",
    },
    {
      icon: IconEye,
      label: t("portal.performance"),
      href: "/portal",
    },
  ] as const;

  const recentActivities = [
    {
      type: "report",
      message: "Q4 2024 Report uploaded",
      time: "2 hours ago",
      icon: IconDownload,
    },
    {
      type: "payment",
      message: "Monthly payment received",
      time: "1 day ago",
      icon: IconCreditCard,
    },
    {
      type: "update",
      message: "Portfolio rebalanced",
      time: "3 days ago",
      icon: IconUpload,
    },
    {
      type: "chat",
      message: "Support chat initiated",
      time: "1 week ago",
      icon: IconMessageCircle,
    },
  ];

  const performanceMetrics = [
    {
      label: "YTD Return",
      value: "+18.2%",
      color: "text-green-600",
      icon: "🚀",
    },
    { label: "Risk Score", value: "Low", color: "text-blue-600", icon: "🛡️" },
    {
      label: "Diversification",
      value: "High",
      color: "text-purple-600",
      icon: "🌐",
    },
    {
      label: "Liquidity",
      value: "Medium",
      color: "text-amber-600",
      icon: "💧",
    },
  ];

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setPortfolioValue((prev) => prev + (Math.random() - 0.5) * 100);
      setGrowthRate((prev) => prev + (Math.random() - 0.5) * 2);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="mx-auto max-w-[1440px] px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 py-3 xs:py-4 sm:py-6 md:py-8 lg:py-10 space-y-3 xs:space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 min-h-screen">
      {/* Enhanced Hero Section */}
      <div className="relative overflow-hidden rounded-2xl xs:rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-4 xs:p-6 sm:p-8 md:p-10 lg:p-12 text-white shadow-2xl">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-600/20"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-xl xs:rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                    {username.charAt(0)}
                  </span>
                </div>
                <div>
                  <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                    {t("portal.welcome")}, {username}
                  </h1>
                  <p className="text-blue-100 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl">
                    {t("portal.journey")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6 text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>{t("portal.portfolio.active")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span>{t("portal.market.open")}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <LastUpdated date={new Date().toISOString()} />
              <button
                onClick={handleRefresh}
                disabled={isLoading}
                className="mt-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl transition-all duration-200 disabled:opacity-50"
              >
                {isLoading ? "🔄" : "🔄"} {t("portal.refresh")}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {quickActions.map((action, index) => (
          <button
            key={index}
            type="button"
            aria-pressed={activeAction === index}
            onClick={() => {
              setActiveAction(index);
              router.push(action.href);
            }}
            className={`group p-4 sm:p-6 rounded-2xl shadow-lg transition-all duration-200 border hover:scale-105 backdrop-blur-sm 
              ${
                activeAction === index
                  ? "ring-2 ring-blue-500 bg-white dark:bg-gray-800 border-white/40 dark:border-gray-600"
                  : "bg-white/80 dark:bg-gray-800/80 border-white/20 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800"
              }
            `}
          >
            <div className="text-center space-y-2 sm:space-y-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center text-xl sm:text-2xl group-hover:scale-110 transition-transform">
                <action.icon size={24} color="#6366f1" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                {action.label}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Enhanced Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200 border-l-4 border-l-green-500 border border-white/20 dark:border-gray-700/50">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">
                  {t("portal.total.value")}
                </p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  ${portfolioValue.toLocaleString()}
                </p>
                <p className="text-xs sm:text-sm text-green-600">
                  +${(portfolioValue * 0.01).toFixed(0)} {t("portal.today")}
                </p>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <IconEye size={24} color="#10b981" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200 border-l-4 border-l-blue-500 border border-white/20 dark:border-gray-700/50">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">
                  {t("portal.growth.rate")}
                </p>
                <p className="text-xl sm:text-2xl font-bold text-blue-600">
                  +{growthRate.toFixed(1)}%
                </p>
                <p className="text-xs sm:text-sm text-blue-600">
                  {t("portal.benchmark")}
                </p>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <IconDownload size={24} color="#3b82f6" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200 border-l-4 border-l-purple-500 border border-white/20 dark:border-gray-700/50">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">
                  {t("portal.last.update")}
                </p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Today
                </p>
                <p className="text-xs sm:text-sm text-purple-600">
                  {t("portal.auto.updated")}
                </p>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <IconUpload size={24} color="#8b5cf6" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200 border-l-4 border-l-amber-500 border border-white/20 dark:border-gray-700/50">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">
                  {t("portal.risk.level")}
                </p>
                <p className="text-xl sm:text-2xl font-bold text-amber-600">
                  Low
                </p>
                <p className="text-xs sm:text-sm text-amber-600">
                  {t("portal.conservative")}
                </p>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <span className="text-amber-600 text-lg sm:text-xl">🛡️</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6">
        {performanceMetrics.map((metric, index) => (
          <div
            key={index}
            className="p-3 sm:p-4 bg-gradient-to-br from-white/80 to-blue-50/80 dark:from-gray-800/80 dark:to-slate-700/80 backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-600/50 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl">{metric.icon}</span>
              <div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {metric.label}
                </p>
                <p
                  className={`font-semibold text-sm sm:text-base ${metric.color}`}
                >
                  {metric.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Charts Section */}
      <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/50">
        <CardHeader className="border-b border-white/20 dark:border-gray-700/50 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 sm:p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                {t("portal.performance.title")}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                {t("portal.performance.subtitle")}
              </p>
            </div>
            <div className="flex gap-2">
              {[
                { id: "overview", label: t("portal.overview") },
                { id: "detailed", label: t("portal.detailed") },
                { id: "comparison", label: t("portal.comparison") }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                      : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div className="h-[300px] sm:h-[400px]">
            <ChartPreview config={chartConfig} />
          </div>
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-gray-500 dark:text-gray-400 gap-2 sm:gap-0">
            <span>{t("portal.data.updated")}</span>
            <span>{t("portal.data.source")}</span>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Reports Section */}
      <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/50">
        <CardHeader className="border-b border-white/20 dark:border-gray-700/50 bg-gradient-to-r from-green-50/50 to-blue-50/50 dark:from-green-900/20 dark:to-blue-900/20 p-4 sm:p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                {t("portal.reports.title")}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                {t("portal.reports.subtitle")}
              </p>
            </div>
            <button className="px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm sm:text-base">
              {t("portal.view.all")}
            </button>
          </div>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: "📊",
                title: "Q4 2024 Report",
                date: "2 days ago",
                status: "New",
                color: "blue",
              },
              {
                icon: "📈",
                title: "Performance Analysis",
                date: "1 week ago",
                status: "Updated",
                color: "green",
              },
              {
                icon: "📋",
                title: "Investment Summary",
                date: "2 weeks ago",
                status: "Available",
                color: "purple",
              },
            ].map((report, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative">
                  <div
                    className={`aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-${report.color}-50 to-${report.color}-100 dark:from-${report.color}-900/20 dark:to-${report.color}-800/20 border border-${report.color}-200 dark:border-${report.color}-800/30 group-hover:scale-105 transition-transform duration-200`}
                  >
                    <div className="h-full flex items-center justify-center">
                      <span className="text-4xl">{report.icon}</span>
                    </div>
                  </div>
                  <div
                    className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium bg-${report.color}-100 text-${report.color}-700 dark:bg-${report.color}-900/50 dark:text-${report.color}-300`}
                  >
                    {report.status}
                  </div>
                </div>
                <h3 className="mt-3 font-medium text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  {report.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {report.date}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activities */}
      <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/50">
        <CardHeader className="border-b border-white/20 dark:border-gray-700/50 bg-gradient-to-r from-amber-50/50 to-orange-50/50 dark:from-amber-900/20 dark:to-orange-900/20 p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
            {t("portal.activities.title")}
          </h2>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div className="space-y-3 sm:space-y-4">
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-white/60 to-gray-50/60 dark:from-gray-700/60 dark:to-gray-800/60 backdrop-blur-sm hover:from-white/80 hover:to-gray-50/80 dark:hover:from-gray-700/80 dark:hover:to-gray-800/80 transition-all duration-200 border border-white/30 dark:border-gray-600/50"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <activity.icon size={20} color="#3b82f6" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">
                    {activity.message}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    {activity.time}
                  </p>
                </div>
                <button className="px-2 sm:px-3 py-1 text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors">
                  View
                </button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Historical Data */}
      <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg border border-white/20 dark:border-gray-700/50">
        <CardHeader className="border-b border-white/20 dark:border-gray-700/50 bg-gradient-to-r from-purple-50/50 to-pink-50/50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
            {t("portal.historical.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            {t("portal.historical.subtitle")}
          </p>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div className="space-y-3 sm:space-y-4">
            {[
              {
                period: "Q3 2024",
                growth: "+8.2%",
                status: "Above Target",
                color: "green",
              },
              {
                period: "Q2 2024",
                growth: "+5.7%",
                status: "On Target",
                color: "blue",
              },
              {
                period: "Q1 2024",
                growth: "+3.1%",
                status: "Below Target",
                color: "amber",
              },
            ].map((quarter, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 rounded-xl bg-gradient-to-r from-white/60 to-gray-50/60 dark:from-gray-700/60 dark:to-gray-800/60 backdrop-blur-sm border border-white/30 dark:border-gray-600/50 gap-3 sm:gap-0"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <div
                    className={`w-3 h-3 rounded-full bg-${quarter.color}-500`}
                  ></div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">
                      {quarter.period} Performance
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                      {quarter.status}
                    </p>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <p
                    className={`font-semibold text-sm sm:text-base text-${quarter.color}-600`}
                  >
                    {quarter.growth}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    Growth
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
