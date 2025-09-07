"use client";

import { MobileSidebar } from "@/components/ui/MobileSidebar";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen grid grid-cols-1 sm:grid-cols-[200px_1fr] md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr]">
      <header className="sm:hidden sticky top-0 z-10 w-full border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg">
        <div className="mx-auto max-w-[1920px] px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 h-12 xs:h-14 sm:h-16 md:h-18 lg:h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-xl xs:rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl">
                A
              </span>
            </div>
            <div>
              <div className="font-bold text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-900 dark:text-white">
                {t("admin.title")}
              </div>
              <div className="hidden xs:block text-xs sm:text-sm text-gray-500 dark:text-gray-400 -mt-1">
                {t("admin.subtitle")}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <MobileSidebar
              title={t("admin.title")}
              headerIcon={
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">A</span>
                </div>
              }
            >
              <div className="bg-[#1c1b3b] fixed w-full">
                <nav className="p-3 space-y-1">
                  <a
                    href="/admin"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <span>📊</span>
                    <span className="font-medium">{t("admin.dashboard")}</span>
                  </a>
                  <a
                    href="/admin/messages"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <span>💬</span>
                    <span className="font-medium">{t("admin.messages")}</span>
                  </a>
                  <a
                    href="/admin/customers"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <span>👥</span>
                    <span className="font-medium">{t("admin.customers")}</span>
                  </a>
                  <a
                    href="/admin/uploads"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <span>📁</span>
                    <span className="font-medium">{t("admin.uploads")}</span>
                  </a>
                  <a
                    href="/admin/payments"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <span>💳</span>
                    <span className="font-medium">{t("admin.payments")}</span>
                  </a>
                  <a
                    href="/admin/audit"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <span>📋</span>
                    <span className="font-medium">{t("admin.audit")}</span>
                  </a>
                </nav>
                <div className="mt-auto border-t border-gray-200 dark:border-gray-800 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                      <span className="text-white text-xs font-medium">AD</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        Admin User
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {t("admin.user.email")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MobileSidebar>
          </div>
        </div>
      </header>
      <aside className="hidden sm:block border-r bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 sticky top-0 h-screen">
        <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-xl xs:rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl">
              A
            </span>
          </div>
          <div>
            <div className="font-bold text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-900 dark:text-white">
              {t("admin.title")}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {t("admin.subtitle")}
            </div>
          </div>
        </div>
        <nav className="space-y-2">
          <a
            href="/admin"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <span className="text-lg">📊</span>
            {t("admin.dashboard")}
          </a>
          <a
            href="/admin/messages"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <span className="text-lg">💬</span>
            {t("admin.messages")}
          </a>
          <a
            href="/admin/customers"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <span className="text-lg">👥</span>
            {t("admin.customers")}
          </a>
          <a
            href="/admin/uploads"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <span className="text-lg">📁</span>
            {t("admin.uploads")}
          </a>
          <a
            href="/admin/payments"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <span className="text-lg">💳</span>
            {t("admin.payments")}
          </a>
          <a
            href="/admin/audit"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <span className="text-lg">📋</span>
            {t("admin.audit")}
          </a>
        </nav>
        <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="px-4 py-3 mb-3">
            <LanguageToggle />
          </div>
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
              <span className="text-white text-xs font-medium">AD</span>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                Admin User
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {t("admin.user.email")}
              </div>
            </div>
          </div>
        </div>
      </aside>
      <main className="min-w-0">{children}</main>
    </div>
  );
}
