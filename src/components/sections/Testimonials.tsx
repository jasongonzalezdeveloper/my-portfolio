"use client";

import { useTranslation } from "react-i18next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import type { TestimonialItem } from "@/types";

// No real testimonials yet. Add entries here once a client/colleague
// provides a real quote — do not fabricate placeholder content.
const TESTIMONIALS: TestimonialItem[] = [];

export default function Testimonials() {
  const { t } = useTranslation();

  if (TESTIMONIALS.length === 0) return null;

  return (
    <SectionWrapper id="testimonials" ariaLabelledBy="testimonials-heading">
      <h2
        id="testimonials-heading"
        className="text-3xl sm:text-4xl font-bold text-text mb-12 text-center"
      >
        {t("testimonials.heading")}
        <span aria-hidden="true" className="text-accent">.</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map((item) => (
          <GlassCard key={item.id} className="flex flex-col h-full">
            <p className="text-text-muted text-sm leading-relaxed flex-1 mb-4">
              &ldquo;{t(item.quoteKey)}&rdquo;
            </p>
            <div>
              <p className="text-text font-semibold text-sm">{item.name}</p>
              <p className="text-text-muted text-xs">
                {item.role} · {item.company}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
