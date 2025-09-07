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
          console.log("MobileSidebar button clicked, current state:", isOpen);
          setIsOpen(true);
        }}
        className="p-1 xs:p-1.5 sm:p-2 rounded-md xs:rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <span className="text-gray-700 dark:text-gray-300 text-sm xs:text-base sm:text-lg">
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
            className="fixed top-0 left-0 h-full w-64 xs:w-72 sm:w-80 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 z-50 shadow-xl flex flex-col animate-[slideIn_0.25s_ease]"
          >
            <div className="h-12 xs:h-14 sm:h-16 md:h-18 lg:h-20 px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                {headerIcon}
                <span className="font-bold text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-900 dark:text-white">
                  {title}
                </span>
              </div>
              <button
                type="button"
                aria-label={closeAriaLabel}
                onClick={() => setIsOpen(false)}
                className="p-1 xs:p-1.5 sm:p-2 rounded-md xs:rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                ✕
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
