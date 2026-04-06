"use client";

import { useState, useEffect, useRef } from "react";

type Phase = "typing" | "pausing" | "deleting" | "switching";

export function useTypingAnimation(
  strings: string[],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 1800
): string {
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");
  const [stringIndex, setStringIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (strings.length === 0) return;

    const current = strings[stringIndex] ?? "";

    const schedule = (fn: () => void, delay: number) => {
      timeoutRef.current = setTimeout(fn, delay);
    };

    if (phase === "typing") {
      if (displayText.length < current.length) {
        schedule(
          () => setDisplayText(current.slice(0, displayText.length + 1)),
          typingSpeed
        );
      } else {
        schedule(() => setPhase("pausing"), pauseDuration);
      }
    } else if (phase === "pausing") {
      schedule(() => setPhase("deleting"), 0);
    } else if (phase === "deleting") {
      if (displayText.length > 0) {
        schedule(
          () => setDisplayText((t) => t.slice(0, -1)),
          deletingSpeed
        );
      } else {
        schedule(() => setPhase("switching"), 0);
      }
    } else if (phase === "switching") {
      const next = (stringIndex + 1) % strings.length;
      schedule(() => {
        setStringIndex(next);
        setPhase("typing");
      }, 0);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayText, phase, stringIndex, strings, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
}
