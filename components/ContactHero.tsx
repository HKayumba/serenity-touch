import { Calendar } from "lucide-react";
import React from "react";

function ContactHero() {
  return (
    <>
      <div className="py-20 ">
        <div className="max-w-[650px] mx-auto text-center">
          <span className=" flex items-center justify-center gap-1.5 text-sm text-[var(--secondary)] font-semibold mb-2">
            <Calendar className="w-6 h-6 text-[var(--secondary)]" />
            Get in Touch
          </span>
          <h1 className="text-4xl text-[var(--primary)] font-bold mb-4">
            Contact Us
          </h1>
        </div>
      </div>
    </>
  );
}

export default ContactHero;
