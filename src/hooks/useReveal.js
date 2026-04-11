// src/hooks/useReveal.js
// ─────────────────────────────────────────────────────────────
// Centralized scroll-reveal hook. Replaces the duplicated
// IntersectionObserver logic that was in every section.
// Returns a ref + a className helper.
// ─────────────────────────────────────────────────────────────

import { useEffect, useRef, useState } from "react";

export function useReveal({ threshold = 0.15, once = true } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return { ref, isVisible };
}

// Stagger helper — delays for child reveals
export const staggerDelay = (index, base = 80) => `${index * base}ms`;
