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
        className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105 shadow-sm"
        aria-label={t("common.language")}
      >
        <span className="text-lg">🌐</span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {language === "en" ? "EN" : "ES"}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400 transition-transform duration-200">
          {isOpen ? "▲" : "▼"}
        </span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full right-0 mt-2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-xl shadow-2xl z-20 min-w-[140px] animate-[fadeIn_0.2s_ease-out]">
            <button
              onClick={() => {
                setLanguage("en");
                setIsOpen(false);
              }}
              className={`w-full px-4 py-3 text-left text-sm font-medium transition-all duration-200 rounded-lg ${
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
              className={`w-full px-4 py-3 text-left text-sm font-medium transition-all duration-200 rounded-lg ${
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
      
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}


