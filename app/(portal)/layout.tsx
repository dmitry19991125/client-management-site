"use client";

import { MobileSidebar } from "@/components/ui/MobileSidebar";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      <nav
        aria-label="Primary navigation"
        className="sticky top-0 z-10 w-full border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg"
      >
        <div className="mx-auto max-w-[1920px] px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 h-12 xs:h-14 sm:h-16 md:h-18 lg:h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-xl xs:rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl">
                CP
              </span>
            </div>
            <div>
              <a
                href="/portal"
                className="font-bold text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {t("portal.title")}
              </a>
              <p className="hidden xs:block text-xs sm:text-sm text-gray-500 dark:text-gray-400 -mt-1">
                {t("portal.subtitle")}
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-1 xs:gap-2 sm:gap-3 md:gap-4 lg:gap-5">
            <a
              href="/portal"
              className="group px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6 py-2 xs:py-2.5 sm:py-3 md:py-3.5 lg:py-4 rounded-lg xs:rounded-xl text-xs xs:text-sm sm:text-sm md:text-sm lg:text-base font-semibold text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-200 hover:scale-105"
            >
              <span className="mr-2 group-hover:scale-110 transition-transform">
                📊
              </span>
              {t("portal.dashboard")}
            </a>
            <a
              href="/portal/chat"
              className="group px-5 py-3 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 dark:hover:from-green-900/20 dark:hover:to-blue-900/20 transition-all duration-200 hover:scale-105"
            >
              <span className="mr-2 group-hover:scale-110 transition-transform">
                💬
              </span>
              {t("portal.chat")}
            </a>
            <a
              href="/portal/payments"
              className="group px-5 py-3 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 dark:hover:from-emerald-900/20 dark:hover:to-teal-900/20 transition-all duration-200 hover:scale-105"
            >
              <span className="mr-2 group-hover:scale-110 transition-transform">
                💳
              </span>
              {t("portal.payments")}
            </a>
            <a
              href="/portal/referrals"
              className="group px-5 py-3 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-900/20 dark:hover:to-pink-900/20 transition-all duration-200 hover:scale-105"
            >
              <span className="mr-2 group-hover:scale-110 transition-transform">
                🎯
              </span>
              {t("portal.referrals")}
            </a>
            <div className="ml-6 pl-6 border-l border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 via-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm font-bold">JD</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                    John Doe
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {t("portal.user.premium")}
                  </div>
                </div>
                <LanguageToggle />
              </div>
            </div>
          </div>
          <div className="flex sm:hidden items-center gap-2">
            <LanguageToggle />
            <MobileSidebar
              title={t("portal.title")}
              headerIcon={
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">CP</span>
                </div>
              }
            >
              <div className="z-30 fixed w-full bg-[#1c1b3b]">
                <nav className="p-4 space-y-2 ">
                  <a
                    href="/portal"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-200 group"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform">
                      📊
                    </span>
                    <span className="font-medium">{t("portal.dashboard")}</span>
                  </a>
                  <a
                    href="/portal/chat"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 dark:hover:from-green-900/20 dark:hover:to-blue-900/20 transition-all duration-200 group"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform">
                      💬
                    </span>
                    <span className="font-medium">{t("portal.chat")}</span>
                  </a>
                  <a
                    href="/portal/payments"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 dark:hover:from-emerald-900/20 dark:hover:to-teal-900/20 transition-all duration-200 group"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform">
                      💳
                    </span>
                    <span className="font-medium">{t("portal.payments")}</span>
                  </a>
                  <a
                    href="/portal/referrals"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-900/20 dark:hover:to-pink-900/20 transition-all duration-200 group"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform">
                      🎯
                    </span>
                    <span className="font-medium">{t("portal.referrals")}</span>
                  </a>
                </nav>

                {/* Language Toggle Section */}
                <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {t("common.language")}
                    </span>
                    <LanguageToggle />
                  </div>
                </div>

                {/* User Profile Section */}
                <div className="mt-auto border-t border-gray-200 dark:border-gray-700 p-4">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 via-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                        <span className="text-white text-sm font-bold">JD</span>
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        John Doe
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {t("portal.user.premium")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MobileSidebar>
          </div>
        </div>
      </nav>
      <div className="pb-10">{children}</div>
    </div>
  );
}
