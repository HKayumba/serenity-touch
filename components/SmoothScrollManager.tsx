"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SmoothScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    // Smoothly scroll to top on route change
    if (typeof window !== "undefined") {
      window.requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }, [pathname]);

  return null;
}

