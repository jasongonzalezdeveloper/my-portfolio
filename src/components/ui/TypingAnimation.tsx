"use client";

import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface TypingAnimationProps {
  roles: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export default function TypingAnimation({
  roles,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 1800,
}: TypingAnimationProps) {
  const reducedMotion = useReducedMotion();
  const animated = useTypingAnimation(
    reducedMotion ? [] : roles,
    typingSpeed,
    deletingSpeed,
    pauseDuration
  );

  const display = reducedMotion ? (roles[0] ?? "") : animated;

  return (
    <span className="text-accent font-semibold">
      {display}
      {!reducedMotion && (
        <span
          aria-hidden="true"
          className="inline-block ml-0.5 w-0.5 h-[1.1em] bg-accent align-middle"
          style={{ animation: "cursorBlink 1s step-end infinite" }}
        />
      )}
    </span>
  );
}
