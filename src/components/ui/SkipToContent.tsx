"use client";

import { useTranslation } from "react-i18next";

export default function SkipToContent() {
  const { t } = useTranslation();

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999]
                 focus:px-4 focus:py-2 focus:rounded focus:font-semibold focus:text-sm
                 focus:bg-accent focus:text-bg"
    >
      {t("a11y.skip_to_content")}
    </a>
  );
}
