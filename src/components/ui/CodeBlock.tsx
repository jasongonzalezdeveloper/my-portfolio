"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const STACK_LINES = [
  { key: "frontend", values: ["React", "Next.js", "TypeScript", "Angular"] },
  { key: "styling", values: ["Tailwind CSS", "SCSS", "Bootstrap", "Framer Motion"] },
  { key: "backend", values: ["Node.js", "Spring Boot"] },
  { key: "devops", values: ["Docker", "AWS", "GitHub Actions"] },
  { key: "testing", values: ["Jest", "Cypress"] },
];

export default function CodeBlock() {
  const { t } = useTranslation();
  const reducedMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="glass rounded-xl p-6 font-mono text-sm leading-relaxed overflow-hidden"
    >
      {/* Window chrome */}
      <div className="flex gap-1.5 mb-4">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28ca41]" />
      </div>

      {/* Comment */}
      <motion.p
        initial={reducedMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-[#7a8ba8] mb-1"
      >
        {t("about.code_comment")}
      </motion.p>

      <p className="text-[#e8f0fe] mb-1">
        <span className="text-[#c792ea]">const</span>{" "}
        <span className="text-[#82aaff]">stack</span>{" "}
        <span className="text-[#e8f0fe]">= {"{"}</span>
      </p>

      <motion.div
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: reducedMotion ? 0 : 0.1 } },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pl-4 space-y-0.5"
      >
        {STACK_LINES.map(({ key, values }) => (
          <motion.p
            key={key}
            variants={{
              hidden: { opacity: 0, x: 16 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
            }}
          >
            <span className="text-[#00d4ff]">{key}</span>
            <span className="text-[#e8f0fe]">: [</span>
            {values.map((v, i) => (
              <span key={v}>
                <span className="text-[#f59e0b]">&quot;{v}&quot;</span>
                {i < values.length - 1 && (
                  <span className="text-[#e8f0fe]">, </span>
                )}
              </span>
            ))}
            <span className="text-[#e8f0fe]">],</span>
          </motion.p>
        ))}
      </motion.div>

      <p className="text-[#e8f0fe]">{"}"}</p>
    </div>
  );
}
