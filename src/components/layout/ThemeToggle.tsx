"use client";

import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/ThemeContext";
import { useHasMounted } from "@/hooks/useHasMounted";

export default function ThemeToggle() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const mounted = useHasMounted();

  const isDark = mounted ? theme === "dark" : true;

  return (
    <button
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={isDark ? t("a11y.theme_to_light") : t("a11y.theme_to_dark")}
      title={isDark ? t("a11y.theme_to_light") : t("a11y.theme_to_dark")}
      className="flex items-center justify-center w-10 h-10 rounded-full border
                 border-border text-text-muted transition-colors duration-200
                 hover:text-accent hover:border-accent/30 min-h-[44px] min-w-[44px]"
    >
      {isDark ? (
        /* Sun icon — click to switch to light */
        <svg
          aria-hidden="true"
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      ) : (
        /* Moon icon — click to switch to dark */
        <svg
          aria-hidden="true"
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      )}
    </button>
  );
}
