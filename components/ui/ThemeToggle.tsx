"use client";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setMounted(true);
    const stored = (typeof window !== "undefined" &&
      localStorage.getItem("theme")) as "light" | "dark" | null;
    const initial =
      stored ||
      (window.matchMedia?.("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  if (!mounted) return null;

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className="fixed bottom-5 right-5 z-50 h-12 w-12 rounded-full border-2 border-white/20 dark:border-gray-700/50 backdrop-blur-md bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 dark:from-amber-500 dark:via-yellow-500 dark:to-orange-500 flex items-center justify-center shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 hover:scale-110 active:scale-95 group"
      title="Toggle theme"
    >
      {theme === "dark" ? (
        <span className="text-white text-xl group-hover:rotate-180 transition-transform duration-500">
          ☀️
        </span>
      ) : (
        <span className="text-white text-xl group-hover:rotate-180 transition-transform duration-500">
          🌙
        </span>
      )}
      {/* Active ring indicator */}
      <div className="absolute inset-0 rounded-full border-2 border-amber-300/50 dark:border-yellow-300/50 animate-pulse"></div>
    </button>
  );
}
