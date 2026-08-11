"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { LearningItem } from "@/types";

interface LearningCardProps {
  item: LearningItem;
  index: number;
}

export default function LearningCard({ item, index }: LearningCardProps) {
  const { t } = useTranslation();
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: reducedMotion ? 0 : index * 0.08 }}
      className="scroll-snap-center flex-shrink-0 w-64 sm:w-auto"
    >
      <GlassCard className="h-full hover:border-accent/20 transition-colors duration-300 flex flex-col">
        {/* Icon */}
        <span aria-hidden="true" className="text-4xl mb-4 block">
          {item.icon}
        </span>

        {/* In Progress tag */}
        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold text-accent tracking-widest uppercase mb-3">
          <span
            aria-hidden="true"
            className="inline-block w-1.5 h-1.5 rounded-full bg-accent"
            style={{ animation: reducedMotion ? "none" : "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite" }}
          />
          {t("learning.working_on_it")}
        </span>

        <h3 className="text-text font-bold mb-2">
          {t(item.titleKey as Parameters<typeof t>[0])}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed flex-1">
          {t(item.descriptionKey as Parameters<typeof t>[0])}
        </p>
      </GlassCard>
    </motion.div>
  );
}
