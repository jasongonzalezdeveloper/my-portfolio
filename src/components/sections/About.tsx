"use client";

import { useTranslation } from "react-i18next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CodeBlock from "@/components/ui/CodeBlock";

export default function About() {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="about" ariaLabelledBy="about-heading">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="space-y-6">
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl font-bold text-[#e8f0fe]"
          >
            {t("about.heading")}
            <span aria-hidden="true" className="text-[#00d4ff]">.</span>
          </h2>

          <div className="space-y-4 text-[#7a8ba8] leading-relaxed">
            <p>{t("about.paragraph_1")}</p>
            <p>{t("about.paragraph_2")}</p>
            <p>
              {t("about.paragraph_3")}
            </p>
          </div>

          {/* Accent divider */}
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-[#00d4ff]/30 to-transparent" />
            <span className="text-[#00d4ff] text-xs font-semibold tracking-widest uppercase">
              Costa Rica
            </span>
          </div>
        </div>

        {/* Animated code block */}
        <CodeBlock />
      </div>
    </SectionWrapper>
  );
}
