"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useColorblindMode } from "@/hooks/useColorblindMode";

export default function ColorblindToggle() {
  const { t } = useTranslation();
  const { enabled, toggle } = useColorblindMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const active = mounted && enabled;

  return (
    <button
      onClick={toggle}
      aria-pressed={active}
      aria-label={active ? t("a11y.colorblind_off") : t("a11y.colorblind_on")}
      title={active ? t("a11y.colorblind_off") : t("a11y.colorblind_on")}
      className={`flex items-center justify-center w-10 h-10 rounded-full border
                  transition-colors duration-200 text-sm
                  ${active
                    ? "border-[#f59e0b]/50 bg-[#f59e0b]/10 text-[#f59e0b]"
                    : "border-white/10 text-[#7a8ba8] hover:text-[#00d4ff] hover:border-[#00d4ff]/30"
                  }`}
    >
      {/* Eye icon */}
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
        {active ? (
          /* Eye with slash — mode active */
          <>
            <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
            <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
            <line x1="1" y1="1" x2="23" y2="23" />
          </>
        ) : (
          /* Normal eye */
          <>
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </>
        )}
      </svg>
    </button>
  );
}
