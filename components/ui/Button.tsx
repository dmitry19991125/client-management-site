"use client";
import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
};

export function Button({
  className = "",
  variant = "default",
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 transition-colors focus:outline-none disabled:opacity-60 disabled:pointer-events-none";
  const variants: Record<string, string> = {
    default:
      "bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90",
    outline:
      "border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800",
    ghost: "hover:bg-gray-100 dark:hover:bg-gray-800",
  };
  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
