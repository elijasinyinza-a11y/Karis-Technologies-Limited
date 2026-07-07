"use client";

import { useEffect, useRef, useState } from "react";

// easeOutCubic — settles rather than snapping.
const ease = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Counts from 0 to `target` once, when the returned ref scrolls into view.
 * Respects prefers-reduced-motion by jumping straight to the target.
 */
export function useCountUp(target: number, duration = 1400) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setValue(target * ease(p));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, value };
}

// Format a live count to match its target's precision (e.g. 2.4 vs 1,250).
export function formatCount(value: number, target: number): string {
  if (!Number.isInteger(target)) return value.toFixed(1);
  return Math.round(value).toLocaleString("en-US");
}
