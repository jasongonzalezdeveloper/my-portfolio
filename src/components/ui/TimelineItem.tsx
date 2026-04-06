"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import TechBadge from "./TechBadge";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { ExperienceItem } from "@/types";

interface TimelineItemProps {
  item: ExperienceItem;
  index: number;
}

export default function TimelineItem({ item, index }: TimelineItemProps) {
  const { t } = useTranslation();
  const reducedMotion = useReducedMotion();
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative"
    >
      {/* Timeline dot */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#00d4ff]
                   border-2 border-[#080d1a] shadow-[0_0_8px_rgba(0,212,255,0.5)]
                   hidden md:block top-8 z-10"
      />

      <div
        className={`md:w-[45%] ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
      >
        <GlassCard
          className="hover:border-[#00d4ff]/25 transition-colors duration-300"
        >
          {/* Header */}
          <div className="mb-4">
            <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
              <h3 className="text-lg font-bold text-[#e8f0fe]">
                {item.company}
              </h3>
              <span className="text-xs text-[#7a8ba8] font-mono whitespace-nowrap">
                <time>{item.startDate}</time>
                <span aria-hidden="true"> – </span>
                <span className="sr-only"> to </span>
                <time>{item.endDate}</time>
              </span>
            </div>
            <p className="text-[#00d4ff] font-semibold text-sm">
              {t(item.role as Parameters<typeof t>[0])}
            </p>
            {item.via && (
              <p className="text-[#7a8ba8] text-xs mt-0.5">
                {t(item.via as Parameters<typeof t>[0])}
              </p>
            )}
            {item.note && (
              <p className="text-[#f59e0b]/70 text-xs mt-1 italic">
                {t(item.note as Parameters<typeof t>[0])}
              </p>
            )}
          </div>

          {/* Bullets */}
          <ul role="list" className="space-y-2 mb-4">
            {item.bulletKeys.map((key) => (
              <li
                key={key}
                className="flex gap-2 text-sm text-[#7a8ba8] leading-relaxed"
              >
                <span aria-hidden="true" className="text-[#00d4ff] mt-1 shrink-0 text-xs">▸</span>
                <span>{t(key as Parameters<typeof t>[0])}</span>
              </li>
            ))}
          </ul>

          {/* Tech stack */}
          <ul
            role="list"
            aria-label="Technologies used"
            className="flex flex-wrap gap-2"
          >
            {item.techStack.map((tech) => (
              <li key={tech}>
                <TechBadge label={tech} variant="cyan" />
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </motion.div>
  );
}
