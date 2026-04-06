"use client";

import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="border-t border-[#00d4ff]/8 py-8 px-6 text-center"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[#7a8ba8]">
        <p>
          © {year}{" "}
          <span className="text-[#e8f0fe] font-medium">
            Jason González García
          </span>
          . {t("footer.rights")}
        </p>
        <p>{t("footer.built_with")}</p>
      </div>
    </footer>
  );
}
