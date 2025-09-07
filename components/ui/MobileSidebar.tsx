"use client";

import { useEffect, useRef, useState } from "react";

type MobileSidebarProps = {
  title: string;
  triggerAriaLabel?: string;
  closeAriaLabel?: string;
  headerIcon?: React.ReactNode;
  children: React.ReactNode;
};

export function MobileSidebar({
  title,
  triggerAriaLabel = "Open menu",
  closeAriaLabel = "Close menu",
  headerIcon,
  children,
}: MobileSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", onKeyDown);
    }
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const focusable = panelRef.current?.querySelector<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    focusable?.focus();
    return () => previouslyFocused?.focus();
  }, [isOpen]);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        aria-label={triggerAriaLabel}
        onClick={() => {
          setIsOpen(true);
        }}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105"
      >
        <span className="text-gray-700 dark:text-gray-300 text-lg">
          ☰
        </span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsOpen(false)}
          />
          <aside
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            className="fixed top-0 left-0 h-full w-80 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-r border-gray-200/50 dark:border-gray-800/50 z-50 shadow-2xl flex flex-col animate-[slideIn_0.3s_ease-out]"
          >
            <div className="h-16 px-6 flex items-center justify-between border-b border-gray-200/50 dark:border-gray-800/50 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20">
              <div className="flex items-center gap-3">
                {headerIcon}
                <span className="font-bold text-lg text-gray-900 dark:text-white">
                  {title}
                </span>
              </div>
              <button
                type="button"
                aria-label={closeAriaLabel}
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105"
              >
                <span className="text-gray-600 dark:text-gray-400 text-lg">✕</span>
              </button>
            </div>
            <div className="overflow-y-auto min-h-0 flex-1">{children}</div>
          </aside>

          <style jsx global>{`
            @keyframes slideIn {
              from {
                transform: translateX(-100%);
              }
              to {
                transform: translateX(0);
              }
            }
          `}</style>
        </>
      )}
    </div>
  );
}
