import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

function HomeHero() {
  return (
    <>
      <div className="pt-40">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-6xl font-bold text-[var(--primary)] mb-12">
            Discover Your Inner Peace
          </h1>
          <p className="text-white text-lg">
            Experience the ultimate sanctuary where luxury meets wellness. Our
            expert therapists and transformative treatments will restore harmony
            to your mind, body, and spirit.
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <Button>Book Now</Button>
            <Link href="/services" className="cursor-pointer">
              <Button
                variant="outline"
                className="text-[var(--primary)] border-var[(--primary)] hover:bg-[var(--primary)] hover:text-white"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeHero;
