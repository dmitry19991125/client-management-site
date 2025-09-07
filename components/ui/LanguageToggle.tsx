"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 xs:gap-2 px-2 xs:px-3 py-1 xs:py-1.5 sm:py-2 rounded-lg xs:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label={t("common.language")}
      >
        <span className="text-sm xs:text-base sm:text-lg">🌐</span>
        <span className="text-xs xs:text-sm sm:text-sm font-medium text-gray-700 dark:text-gray-300">
          {language === "en" ? "EN" : "ES"}
        </span>
        <span className="text-xs xs:text-sm text-gray-500 dark:text-gray-400">
          {isOpen ? "▲" : "▼"}
        </span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full right-0 mt-1 xs:mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg xs:rounded-xl shadow-lg z-20 min-w-[120px] xs:min-w-[140px]">
            <button
              onClick={() => {
                setLanguage("en");
                setIsOpen(false);
              }}
              className={`w-full px-3 xs:px-4 py-2 xs:py-2.5 text-left text-xs xs:text-sm font-medium transition-colors ${
                language === "en"
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
            >
              🇺🇸 {t("common.english")}
            </button>
            <button
              onClick={() => {
                setLanguage("es");
                setIsOpen(false);
              }}
              className={`w-full px-3 xs:px-4 py-2 xs:py-2.5 text-left text-xs xs:text-sm font-medium transition-colors ${
                language === "es"
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
            >
              🇪🇸 {t("common.spanish")}
            </button>
          </div>
        </>
      )}
    </div>
  );
}


