"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Translation files
const translations = {
  en: {
    // Portal Header
    "portal.title": "Client Portal",
    "portal.subtitle": "Professional Dashboard",
    "portal.dashboard": "Dashboard",
    "portal.chat": "Chat",
    "portal.payments": "Payments",
    "portal.referrals": "Invite Friends",
    "portal.user.premium": "Premium Client",
    "portal.user.basic": "Basic Client",

    // Portal Dashboard
    "portal.welcome": "Welcome back",
    "portal.journey": "Your financial journey continues here",
    "portal.portfolio.active": "Portfolio Active",
    "portal.market.open": "Market Open",
    "portal.refresh": "Refresh",
    "portal.view.reports": "View Reports",
    "portal.chat.support": "Chat Support",
    "portal.make.payment": "Make Payment",
    "portal.performance": "Performance",
    "portal.total.value": "Total Value",
    "portal.today": "today",
    "portal.growth.rate": "Growth Rate",
    "portal.benchmark": "vs +8.2% benchmark",
    "portal.last.update": "Last Update",
    "portal.auto.updated": "Auto-updated every 4 hours",
    "portal.risk.level": "Risk Level",
    "portal.conservative": "Conservative strategy",
    "portal.performance.title": "Portfolio Performance",
    "portal.performance.subtitle": "Track your investment growth over time",
    "portal.overview": "Overview",
    "portal.detailed": "Detailed",
    "portal.comparison": "Comparison",
    "portal.data.updated": "Data updated every 15 minutes",
    "portal.data.source": "Source: Real-time market data",
    "portal.reports.title": "Latest Reports & Documents",
    "portal.reports.subtitle": "Your most recent investment reports and documents",
    "portal.view.all": "View All",
    "portal.activities.title": "Recent Activities",
    "portal.historical.title": "Historical Performance",
    "portal.historical.subtitle": "View past performance and trends",

    // Admin Header
    "admin.title": "Admin Panel",
    "admin.subtitle": "Management Dashboard",
    "admin.dashboard": "Dashboard",
    "admin.messages": "Messages",
    "admin.customers": "Customers",
    "admin.uploads": "Uploads",
    "admin.payments": "Payments",
    "admin.audit": "Audit",
    "admin.user.email": "admin@example.com",

    // Admin Dashboard
    "admin.dashboard.title": "Admin Dashboard",
    "admin.dashboard.subtitle": "Welcome back! Here's what's happening with your platform.",
    "admin.stats.clients": "Total Clients",
    "admin.stats.subscriptions": "Active Subscriptions",
    "admin.stats.payments": "Pending Payments",
    "admin.stats.revenue": "Monthly Revenue",
    "admin.recent.activity": "Recent Activity",
    "admin.quick.actions": "Quick Actions",
    "admin.add.client": "Add Client",
    "admin.upload.report": "Upload Report",
    "admin.view.payments": "View Payments",
    "admin.analytics": "Analytics",

    // Login
    "login.welcome": "Welcome Back",
    "login.subtitle": "Sign in to your account",
    "login.google": "Continue with Google",
    "login.or": "Or",
    "login.email": "Email address",
    "login.password": "Password",
    "login.signin": "Sign In",
    "login.signing": "Signing in...",
    "login.noaccount": "Don't have an account?",
    "login.signup": "Sign up",

    // Common
    "common.language": "Language",
    "common.english": "English",
    "common.spanish": "Español",
  },
  es: {
    // Portal Header
    "portal.title": "Portal del Cliente",
    "portal.subtitle": "Panel Profesional",
    "portal.dashboard": "Panel",
    "portal.chat": "Chat",
    "portal.payments": "Pagos",
    "portal.referrals": "Invitar Amigos",
    "portal.user.premium": "Cliente Premium",
    "portal.user.basic": "Cliente Básico",

    // Portal Dashboard
    "portal.welcome": "Bienvenido de nuevo",
    "portal.journey": "Tu viaje financiero continúa aquí",
    "portal.portfolio.active": "Portafolio Activo",
    "portal.market.open": "Mercado Abierto",
    "portal.refresh": "Actualizar",
    "portal.view.reports": "Ver Reportes",
    "portal.chat.support": "Soporte de Chat",
    "portal.make.payment": "Realizar Pago",
    "portal.performance": "Rendimiento",
    "portal.total.value": "Valor Total",
    "portal.today": "hoy",
    "portal.growth.rate": "Tasa de Crecimiento",
    "portal.benchmark": "vs +8.2% referencia",
    "portal.last.update": "Última Actualización",
    "portal.auto.updated": "Actualizado automáticamente cada 4 horas",
    "portal.risk.level": "Nivel de Riesgo",
    "portal.conservative": "Estrategia conservadora",
    "portal.performance.title": "Rendimiento del Portafolio",
    "portal.performance.subtitle": "Rastrea el crecimiento de tus inversiones en el tiempo",
    "portal.overview": "Resumen",
    "portal.detailed": "Detallado",
    "portal.comparison": "Comparación",
    "portal.data.updated": "Datos actualizados cada 15 minutos",
    "portal.data.source": "Fuente: Datos de mercado en tiempo real",
    "portal.reports.title": "Últimos Reportes y Documentos",
    "portal.reports.subtitle": "Tus reportes y documentos de inversión más recientes",
    "portal.view.all": "Ver Todo",
    "portal.activities.title": "Actividades Recientes",
    "portal.historical.title": "Rendimiento Histórico",
    "portal.historical.subtitle": "Ver rendimiento pasado y tendencias",

    // Admin Header
    "admin.title": "Panel de Administración",
    "admin.subtitle": "Panel de Gestión",
    "admin.dashboard": "Panel",
    "admin.messages": "Mensajes",
    "admin.customers": "Clientes",
    "admin.uploads": "Subidas",
    "admin.payments": "Pagos",
    "admin.audit": "Auditoría",
    "admin.user.email": "admin@ejemplo.com",

    // Admin Dashboard
    "admin.dashboard.title": "Panel de Administración",
    "admin.dashboard.subtitle": "¡Bienvenido de nuevo! Aquí está lo que está pasando con tu plataforma.",
    "admin.stats.clients": "Total de Clientes",
    "admin.stats.subscriptions": "Suscripciones Activas",
    "admin.stats.payments": "Pagos Pendientes",
    "admin.stats.revenue": "Ingresos Mensuales",
    "admin.recent.activity": "Actividad Reciente",
    "admin.quick.actions": "Acciones Rápidas",
    "admin.add.client": "Agregar Cliente",
    "admin.upload.report": "Subir Reporte",
    "admin.view.payments": "Ver Pagos",
    "admin.analytics": "Analíticas",

    // Login
    "login.welcome": "Bienvenido de Nuevo",
    "login.subtitle": "Inicia sesión en tu cuenta",
    "login.google": "Continuar con Google",
    "login.or": "O",
    "login.email": "Dirección de correo",
    "login.password": "Contraseña",
    "login.signin": "Iniciar Sesión",
    "login.signing": "Iniciando sesión...",
    "login.noaccount": "¿No tienes una cuenta?",
    "login.signup": "Regístrate",

    // Common
    "common.language": "Idioma",
    "common.english": "English",
    "common.spanish": "Español",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when changed
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
