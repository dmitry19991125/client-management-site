export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[240px_1fr]">
      <aside className="border-r bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm p-6 space-y-6 sticky top-0 h-screen">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
            <span className="text-white font-bold">A</span>
          </div>
          <div>
            <div className="font-bold text-lg text-gray-900 dark:text-white">
              Admin Panel
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Management Dashboard
            </div>
          </div>
        </div>
        <nav className="space-y-2">
          <a
            href="/admin"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <span className="text-lg">📊</span>
            Dashboard
          </a>
          <a
            href="/admin/messages"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <span className="text-lg">💬</span>
            Messages
          </a>
          <a
            href="/admin/customers"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <span className="text-lg">👥</span>
            Customers
          </a>
          <a
            href="/admin/uploads"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <span className="text-lg">📁</span>
            Uploads
          </a>
          <a
            href="/admin/payments"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <span className="text-lg">💳</span>
            Payments
          </a>
          <a
            href="/admin/audit"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <span className="text-lg">📋</span>
            Audit
          </a>
        </nav>
        <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
              <span className="text-white text-xs font-medium">AD</span>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                Admin User
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                admin@example.com
              </div>
            </div>
          </div>
        </div>
      </aside>
      <main>{children}</main>
    </div>
  );
}
