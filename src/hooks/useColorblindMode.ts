"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "portfolio-colorblind";

export function useColorblindMode() {
  const [enabled, setEnabled] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem(STORAGE_KEY) === "true";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (enabled) {
      root.classList.add("colorblind-mode");
    } else {
      root.classList.remove("colorblind-mode");
    }
    localStorage.setItem(STORAGE_KEY, String(enabled));
  }, [enabled]);

  const toggle = () => setEnabled((v) => !v);

  return { enabled, toggle };
}
