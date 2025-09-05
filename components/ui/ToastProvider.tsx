"use client";
import {
  createContext,
  use,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type ToastKind = "info" | "success" | "error" | "warning";

type Toast = {
  id: number;
  kind: ToastKind;
  title?: string;
  message: string;
  durationMs: number;
};

type ToastContextValue = {
  show: (
    message: string,
    opts?: { kind?: ToastKind; title?: string; durationMs?: number }
  ) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

function useToastInternal(): ToastContextValue {
  const ctx = use(ToastContext);
  if (!ctx) throw new Error("ToastProvider is missing in the tree");
  return ctx;
}

export function useToast() {
  return useToastInternal();
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const nextIdRef = useRef(1);

  const remove = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const show = useCallback<ToastContextValue["show"]>(
    (message, opts) => {
      const id = nextIdRef.current++;
      const toast: Toast = {
        id,
        message,
        kind: opts?.kind ?? "info",
        title: opts?.title,
        durationMs: Math.max(1500, Math.min(8000, opts?.durationMs ?? 2500)),
      };
      setToasts((prev) => [...prev, toast]);
      window.setTimeout(() => remove(id), toast.durationMs);
    },
    [remove]
  );

  useEffect(() => {
    (window as any).toast = show;
    return () => {
      if ((window as any).toast === show) (window as any).toast = undefined;
    };
  }, [show]);

  const value = useMemo<ToastContextValue>(() => ({ show }), [show]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed top-5 right-5 z-[60] flex flex-col gap-2 w-[calc(100%-2rem)] max-w-sm items-end">
        {toasts.map((t) => (
          <div
            key={t.id}
            role="status"
            className={`rounded-xl p-3 shadow-2xl border backdrop-blur-md text-sm will-change-transform
              ${
                t.kind === "success"
                  ? "bg-emerald-600/90 text-white border-emerald-400/50"
                  : ""
              }
              ${
                t.kind === "error"
                  ? "bg-rose-600/90 text-white border-rose-400/50"
                  : ""
              }
              ${
                t.kind === "warning"
                  ? "bg-amber-500/90 text-black border-amber-300/60 animate-[slideIn_.25s_ease-out]"
                  : ""
              }
              ${
                t.kind === "info"
                  ? "bg-gray-900/90 text-white border-white/10"
                  : ""
              }
            `}
          >
            {t.title && <div className="font-semibold mb-0.5">{t.title}</div>}
            <div>{t.message}</div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(16px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </ToastContext.Provider>
  );
}
