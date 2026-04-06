"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import "@/lib/i18n";
import i18n from "i18next";
import type { SupportedLocale, LanguageContextValue } from "@/types";

const STORAGE_KEY = "portfolio-locale";

function detectInitialLocale(): SupportedLocale {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem(STORAGE_KEY) as SupportedLocale | null;
  if (stored === "en" || stored === "es") return stored;
  if (navigator.language.startsWith("es")) return "es";
  return "en";
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<SupportedLocale>(() =>
    detectInitialLocale()
  );

  // Sync i18n and html[lang] whenever locale changes
  useEffect(() => {
    void i18n.changeLanguage(locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const toggleLocale = useCallback(() => {
    const next: SupportedLocale = locale === "en" ? "es" : "en";
    setLocale(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
