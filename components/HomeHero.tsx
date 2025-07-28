import React from "react";
import { Button } from "./ui/button";

function HomeHero() {
  return (
    <>
      <div className="pt-20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-6xl font-bold text-primary mb-12">
            Discover Your Inner Peace
          </h1>
          <p>
            Experience the ultimate sanctuary where luxury meets wellness. Our
            expert therapists and transformative treatments will restore harmony
            to your mind, body, and spirit.
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <Button>Book Now</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeHero;
