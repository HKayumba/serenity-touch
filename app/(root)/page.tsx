import HomeHero from "@/components/HomeHero";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardTitle,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { whyUs } from "@/data";
import { featuredTreatments } from "@/data";
import { testimonials } from "@/data";
import { Star } from "lucide-react";

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
                      <item.icon className="text-[var(--secondary)]" />
                      <span className="text-sm font-semibold text-[var(--primary)]">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTreatments.map((treatment, index) => (
              <div className="p-2" key={treatment.id}>
                <Card
                  className={`border border-b-4 border-primary rounded-xl shadow-md p-4 ${
                    index === 1
                      ? "border-t-30 shadow-2xl"
                      : "border-t-4 shadow-lg"
                  }`}
                >
                  <CardHeader className="justify-end p-2 ">
                    <div className="rounded-full px-6 bg-[var(--secondary)] text-white text-sm font-semibold">
                      {treatment.tag}
                    </div>
                  </CardHeader>
                  <CardTitle className="text-center text-xl font-bold text-[var(--primary)]">
                    {treatment.title}
                  </CardTitle>
                  <CardContent className="text-[var(--foreground)]">
                    <p>{treatment.description}</p>
                    <div className="flex justify-between mb-4 mt-6">
                      <span>Duration: {treatment.duration}</span>
                      <div className="flex items-center">
                        <span className="text-xl font-semibold">$</span>
                        <span className="font-semibold">{treatment.price}</span>
                      </div>
                    </div>
                    <Button className="w-full bg-[var(--primary)]/80 text-white">
                      Book This Treatment
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button className="bg-[var(--primary)] text-white">
              View All Treatments
            </Button>
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
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="aspect-square items-center justify-center p-6">
                        <div className="flex flex-row gap-1 items-center justify-center mb-4">
                          {Array.from(
                            { length: testimonial.rating },
                            (_, i) => (
                              <Star key={i} className="text-yellow-500 w-5 h-5" />
                            )
                          )}
                        </div>

                        <p className="italic text-[var(--foreground)]">
                          &rdquo;{testimonial.feedback}&rdquo;
                        </p>
                        <div className="flex gap-2 mt-8 justify-center items-center">
                          <div className="w-12 h-12 rounded-full overflow-hidden">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              width={90}
                              height={90}
                              className="object-cover object-center w-full h-full"
                            />
                          </div>
                          <div className="">
                            <p className="font-semibold text-[var(--primary)]">
                              {testimonial.name}
                            </p>
                            <p className="text-sm text-[var(--foreground)]">
                              {testimonial.occupation}
                            </p>
                          </div>
                        </div>
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
            <div className="p-2 h-full">
              <Card className="border border-t-4 border-b-4 border-primary rounded-lg shadow-md h-full flex flex-col">
                <CardHeader className="justify-center items-center">
                  <div className="bg-[var(--secondary)] text-white rounded-full py-2 px-6 text-sm font-semibold">
                    <p>New Client Special</p>
                  </div>
                </CardHeader>

                <CardTitle className="text-3xl font-bold text-center text-[var(--primary)]">
                  Welcome Package
                </CardTitle>

                <CardContent>
                  <div className="flex text-center items-center justify-center mb-4 text-[var(--primary)]">
                    <span className="text-2xl font-bold">25%</span>
                    <span className="text-3xl font-bold">OFF</span>
                  </div>
                  <div className="text-center justify-center items-center">
                    <p className="mb-5">
                      Your first spa experience includes a 90-minute signature
                      massage and luxury facial treatment.
                    </p>
                    <span className="text-sm line-through mb-4">
                      Regular Price: $330
                    </span>
                    <p className="text-2xl font-bold m-4 text-[var(--primary)]">
                      Your Price: $247
                    </p>
                  </div>
                  <div className="text-center mt-4">
                    <Button className="w-full">
                      Claim Your Welcome Package
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="text-center justify-center text-sm">
                  Valid for new clients only. Cannot be combined with other
                  offers.
                </CardFooter>
              </Card>
            </div>
            <div className="p-2 h-full">
              <Card className="border border-t-4 border-b-4 border-primary rounded-lg shadow-md h-full flex flex-col">
                <CardHeader className="justify-center items-center">
                  <div className="bg-[var(--secondary)] text-white rounded-full py-2 px-6 text-sm font-semibold">
                    <p>Membership Program</p>
                  </div>
                </CardHeader>
                <CardTitle className="text-3xl font-bold text-center text-[var(--primary)]">
                  Serenity Circle
                </CardTitle>

                <CardContent>
                  <div className="text-center items-center justify-center">
                    <div className="flex text-center items-center justify-center mb-4 text-[var(--primary)]">
                      <span className="text-3xl font-bold">$80</span>
                      <span className="text-sm">/month</span>
                    </div>
                    <p className="mb-5">
                      Unlimited access to our relaxation areas, 20% off all
                      treatments, and priority booking.
                    </p>
                  </div>
                  <div className="justify-start">
                    <div className="flex gap-1">
                      <span className="mr-2 text-[var(--secondary)]">✓</span>
                      <span className="text-sm">
                        Monthly 60-minute massage included
                      </span>
                    </div>
                    <div className="flex gap-1">
                      <span className="mr-2 text-[var(--secondary)]">✓</span>
                      <span className="text-sm">
                        20% discount on all additional services
                      </span>
                    </div>
                    <div className="flex gap-1">
                      <span className="mr-2 text-[var(--secondary)]">✓</span>
                      <span className="text-sm">
                        Complimentary wellness consultations
                      </span>
                    </div>
                    <div className="flex gap-1">
                      <span className="mr-2 text-[var(--secondary)]">✓</span>
                      <span className="text-sm">
                        Guest passes for friends & family
                      </span>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <Button className="bg-[var(--secondary)] w-full hover:bg-[var(--secondary)]/80">
                      Join Serenity Circle
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="text-center justify-center text-sm">
                  No contract required. Cancel anytime.
                </CardFooter>
              </Card>
            </div>
          </div>
          <div className="text-center mt-10">
            <Button className="">Contact Us For Custom Packages</Button>
          </div>
        </div>
      </section>
    </>
  );
}
