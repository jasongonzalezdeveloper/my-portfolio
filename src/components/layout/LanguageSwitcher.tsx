"use client";

import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";
import { useHasMounted } from "@/hooks/useHasMounted";

export default function LanguageSwitcher() {
  const { locale, toggleLocale } = useLanguage();
  const { t } = useTranslation();
  const mounted = useHasMounted();

  // Before hydration, render a neutral placeholder that matches SSR output
  const displayLocale = mounted ? locale : "en";
  const label = displayLocale === "en" ? t("a11y.toggle_language") : t("a11y.toggle_language_es");

  return (
    <button
      onClick={toggleLocale}
      aria-label={label}
      aria-pressed={mounted ? locale === "es" : false}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border
                 text-sm font-medium text-text-muted hover:text-accent hover:border-accent/30
                 transition-colors duration-200 min-h-[44px] min-w-[44px]"
    >
      <span aria-hidden="true" className="text-base leading-none">
        {displayLocale === "en" ? "🇬🇧" : "🇨🇷"}
      </span>
      <span className="font-semibold tracking-wide">
        {displayLocale === "en" ? "EN" : "ES"}
      </span>
    </button>
  );
}
