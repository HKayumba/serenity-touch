import { Sparkles } from "lucide-react";
import React from "react";

function ServicesHero() {
  return (
    <>
      <div className="py-20 ">
        <div className="max-w-[650px] mx-auto text-center">
          <span className=" flex items-center justify-center gap-1.5 text-sm text-white font-semibold mb-2">
            <Sparkles className="w-6 h-6 text-primary-foreground" />
            Luxury Treatments
          </span>
          <h1 className="text-4xl text-[var(--primary)] font-bold mb-4">
            Our Services
          </h1>
          <p className="text-lg text-white">
            Indulge in our comprehensive range of luxury spa treatments,
            carefully designed to nurture your well-being and restore your
            natural radiance.
          </p>
        </div>
      </div>
    </>
  );
}

export default ServicesHero;
