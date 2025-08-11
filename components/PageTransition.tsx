"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const [key, setKey] = useState(pathname);

  useEffect(() => {
    // Update key on path change to retrigger the CSS animation
    setKey(pathname);
  }, [pathname]);

  return (
    <div key={key} className="page-fade">
      {children}
    </div>
  );
}

