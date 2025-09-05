export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <nav
        aria-label="Primary navigation"
        className="sticky top-0 z-10 w-full border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg"
      >
        <div className="mx-auto max-w-[1920px] px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">CP</span>
            </div>
            <div>
              <a
                href="/portal"
                className="font-bold text-2xl text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Client Portal
              </a>
              <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
                Professional Dashboard
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/portal"
              className="group px-5 py-3 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-200 hover:scale-105"
            >
              <span className="mr-2 group-hover:scale-110 transition-transform">
                📊
              </span>
              Dashboard
            </a>
            <a
              href="/portal/chat"
              className="group px-5 py-3 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 dark:hover:from-green-900/20 dark:hover:to-blue-900/20 transition-all duration-200 hover:scale-105"
            >
              <span className="mr-2 group-hover:scale-110 transition-transform">
                💬
              </span>
              Chat
            </a>
            <a
              href="/portal/payments"
              className="group px-5 py-3 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 dark:hover:from-emerald-900/20 dark:hover:to-teal-900/20 transition-all duration-200 hover:scale-105"
            >
              <span className="mr-2 group-hover:scale-110 transition-transform">
                💳
              </span>
              Payments
            </a>
            <a
              href="/portal/referrals"
              className="group px-5 py-3 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-900/20 dark:hover:to-pink-900/20 transition-all duration-200 hover:scale-105"
            >
              <span className="mr-2 group-hover:scale-110 transition-transform">
                🎯
              </span>
              Invite Friends
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
                    Premium Client
                  </div>
                </div>
                <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <span className="text-gray-500 dark:text-gray-400">⚙️</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="pb-10">{children}</div>
    </div>
  );
}
