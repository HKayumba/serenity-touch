import ServicesHero from "@/components/ServicesHero";
import {
  Card,
  CardTitle,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { services } from "@/data";
import Link from "next/link";

function page() {
  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 bg-[url('/images/services.jpg')] bg-cover bg-center opacity-90"></div>
        <div className="relative z-10">
          <ServicesHero />
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 md:px-[100px] py-20">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-lg text-[var(--secondary)] mb-16">
            Discover the perfect treatment for your needs from our extensive
            menu.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((item) => (
            <Card
              key={item.id}
              className="border-l-4 border-l-[var(--primary)] border-b-4 border-b-[var(--primary)] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </CardHeader>
              <CardTitle className="text-lg font-semibold px-4">
                {item.title}
              </CardTitle>
              <CardContent className="text-sm text-muted-foreground">
                {item.description}
              </CardContent>
              <CardFooter className="flex justify-between items-center px-4 py-2">
                <div className="flex items-center space-x-2">
                  <span>From</span>
                  <span className="font-bold text-2xl">{item.price}</span>
                </div>

                <Button variant="outline">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/*cta section*/}
      <section className="px-6 md:px-[100px] py-20">
        <div className="items-center text-center max-w-[800px] mx-auto">
          <h2 className="text-3xl font-bold text-[var(--primary)] mb-4">
            Need More Information?
          </h2>
          <p className="mb-6 text-lg">
            Our team is ready to answer any questions you might have about our
            services, pricing, or scheduling.
          </p>
          <Link href="/contact" className="cursor-pointer">
            <Button
              variant="outline"
              className="border-[var(--primary)] text-[var(--primary)]"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default page;
