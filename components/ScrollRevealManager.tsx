"use client";

import { useEffect } from "react";

export default function ScrollRevealManager() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("section, [data-reveal]")
    );

    elements.forEach((el, index) => {
      el.classList.add("reveal-item");
      // Allow manual override with data-reveal-delay (ms). Otherwise, apply a small stagger.
      if (!el.style.getPropertyValue("--reveal-delay")) {
        const manualDelay = el.getAttribute("data-reveal-delay");
        const delayMs = manualDelay ? Number(manualDelay) : Math.min(index * 80, 400);
        el.style.setProperty("--reveal-delay", `${isNaN(delayMs) ? 0 : delayMs}ms`);
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}

