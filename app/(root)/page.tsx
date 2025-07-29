import HomeHero from "@/components/HomeHero";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { whyUs } from "@/data";

export default function Home() {
  return (
    <>
      {/* This is the main page of the application */}
      {/* HomeHero component displays the main hero section of the homepage */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-[url('/images/home.jpg')] bg-cover bg-center opacity-80"></div>
        <div className="relative z-10">
          <HomeHero />
        </div>
      </section>

      {/* About us section */}
      <section className="px-6 md:px-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 py-20 gap-4">
          <div className="pt-10">
            <h2 className="text-3xl font-bold text-primary mb-10">
              SerenityTouch Spa & Wellness
            </h2>
            <p className="mb-4">
              At SerenityTouch Spa & Wellness, we believe that true beauty and
              wellness come from the harmony between mind, body, and spirit. Our
              expert therapists combine ancient healing traditions with modern
              luxury to create transformative experiences that nourish your
              entire being.
            </p>
            <p>
              Each treatment is thoughtfully designed using only the finest
              natural ingredients and premium products. Our serene environment
              provides the perfect sanctuary to escape the stresses of daily
              life and reconnect with your inner peace.
            </p>
          </div>
          <div>
            <Image
              src="/images/relaxing-spa.jpg"
              alt="SerenityTouch Spa"
              width={500}
              height={500}
              className=" w-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
      <section className="px-6 md:px-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-3 py-20 gap-8">
          <div>
            <Card className="p-4 border border-t-4 border-b-4 border-primary rounded-lg shadow-md ">
              <CardTitle className="text-2xl font-bold text-primary">
                Card Title
              </CardTitle>
              <CardContent>This is a description of the card.</CardContent>
            </Card>
          </div>
          <div>
            <Card className="p-4 border border-t-4 border-b-4 border-primary rounded-lg shadow-md">
              <CardTitle className="text-2xl font-bold text-primary">
                Card Title
              </CardTitle>
              <CardContent>This is a description of the card.</CardContent>
            </Card>
          </div>
          <div>
            <Card className="p-4 border border-t-4 border-b-4 border-primary rounded-lg shadow-md">
              <CardTitle className="text-2xl font-bold text-primary">
                Working Hours
              </CardTitle>
              <CardContent>This is a description of the card.</CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="px-6 md:px-[100px] py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image
              src="/images/why-us.jpg"
              alt="Why Choose Us"
              width={500}
              height={500}
              className="w-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="pt-10">
            <h2 className="text-3xl font-bold text-primary mb-10">
              Why Choose Us
            </h2>
            <p>
              At SerenityTouch Spa & Wellness, we are dedicated to providing our
              clients with the highest level of service and care. Our skilled
              therapists are trained in a variety of techniques to ensure a
              personalized experience that meets your unique needs.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              {whyUs.map((item) => (
                <Card key={item.id} className="p-4">
                  <CardTitle>
                    <div className="grid grid-cols-1 gap-2">
                      {item.icon}
                      <span className="text-sm font-semibold">
                        {item.title}
                      </span>
                    </div>
                  </CardTitle>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Treatments */}
      <section className="px-6 md:px-[100px] py-20">
        <div className="items-center justify-center">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
            <h2 className="text-3xl font-bold text-primary mb-8">
              Featured Treatments
            </h2>
            <p>
              Experience our most sought-after treatments designed to deliver
              exceptional results and pure relaxation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-2">1</div>
            <div className="p-2">2</div>
            <div className="p-2">3</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 md:px-[100px] py-20">
        <div className="mx-auto text-center items-center justify-center">
          <Carousel
            opts={{
              align: "center",
            }}
            className="w-full"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Exclusive Offers */}
      <section className="px-6 md:px-[100px] py-20">
        <div className="items-center justify-center">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
            <h2 className="text-3xl font-bold text-primary mb-8">
              Exclusive Offers
            </h2>
            <p>
              Take advantage of our limited-time packages designed to give you
              the ultimate luxury spa experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-2">1</div>
            <div className="p-2">2</div>
          </div>
          <div className="text-center mt-10">
            <Button className="">Contact Us For Custom Packages</Button>
          </div>
        </div>
      </section>
    </>
  );
}
