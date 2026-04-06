"use client";

import { useRef } from "react";
import { motion, useInView, type Transition } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface SectionWrapperProps {
  id: string;
  ariaLabelledBy?: string;
  className?: string;
  delay?: number;
  children: React.ReactNode;
}

export default function SectionWrapper({
  id,
  ariaLabelledBy,
  className = "",
  delay = 0,
  children,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const reducedMotion = useReducedMotion();

  return (
    <section
      id={id}
      ref={ref}
      aria-labelledby={ariaLabelledBy}
      className={`section-padding max-w-6xl mx-auto w-full scroll-mt-20 ${className}`}
    >
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 24 }}
        animate={
          isInView || reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
        }
        transition={{ duration: 0.6, delay, ease: "easeOut" } as Transition}
      >
        {children}
      </motion.div>
    </section>
  );
}
