
"use client";

import Image from "next/image";
import { Star } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "The Bali Trip Was Absolutely Magical! Every Detail Was Flawless. The Villas Were Luxurious And The Cultural Experiences Were Unforgettable.",
    name: "Michael Chen",
    location: "Singapore",
    image: "/images/traveler-1.svg",
  },
  {
    quote:
      "Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!",
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "/images/traveler-2.svg",
  },
  {
    quote:
      "Lagos To Lloret Was Beyond My Dreams. The Beaches Were Idyllic And Every Transfer Was Seamless. I Have Already Booked My Next Trip!",
    name: "Amara Okafor",
    location: "Lagos, Nigeria",
    image: "/images/traveler-3.svg",
  },
  {
    quote:
      "Kyoto In Cherry Blossom Season Was Pure Poetry. The Ryokan Stay And Tea Ceremony Felt Truly Authentic. Worth Every Penny!",
    name: "Yuki Tanaka",
    location: "Tokyo, Japan",
    image: "/images/traveler-4.svg",
  },
  {
    quote:
      "Barcelona Felt Like A Homecoming. Our Guide Found Hidden Tapas Bars I Would Never Have Discovered Alone. Simply Perfect.",
    name: "Elena Rodriguez",
    location: "Madrid, Spain",
    image: "/images/traveler-5.svg",
  },
  {
    quote:
      "The Jeju Island Getaway Was The Reset I Needed. Crystal Clear Waters, Friendly Locals, And Zero Stress. Wanderlust Delivered!",
    name: "David Kim",
    location: "Seoul, South Korea",
    image: "/images/traveler-6.svg",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          {/* Section heading and navigation */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 md:text-4xl">
                What Travelers Say
              </h2>

              <p className="mt-2 text-xs text-zinc-500 md:text-sm">
                Real experiences from our happy travelers
              </p>
            </div>

            <div className="flex shrink-0 gap-3">
              <CarouselPrevious className="static size-10 translate-y-0 border-teal-200 text-teal-600 hover:bg-teal-50 hover:text-teal-700" />

              <CarouselNext className="static size-10 translate-y-0 border-teal-200 text-teal-600 hover:bg-teal-50 hover:text-teal-700" />
            </div>
          </div>

          {/* Carousel cards */}
          <CarouselContent className="-ml-4 mt-8">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.name}
                className="flex pl-4 md:basis-1/2"
              >
                <article className="flex min-h-64 w-full overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex min-w-0 flex-1 flex-col p-5 md:p-6">
                    <div className="mb-4 flex gap-1 text-amber-400">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          className="size-4 fill-current"
                        />
                      ))}
                    </div>

                    <p className="text-sm leading-7 font-medium text-zinc-600">
                      “{testimonial.quote}”
                    </p>

                    <div className="mt-auto pt-6">
                      <p className="text-sm font-semibold text-teal-700">
                        {testimonial.name}
                      </p>

                      <p className="mt-1 text-xs text-zinc-400">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>

                  <div className="relative min-h-full w-28 shrink-0 sm:w-36 md:w-40">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="(max-width: 640px) 112px, 160px"
                      className="object-cover"
                    />
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
