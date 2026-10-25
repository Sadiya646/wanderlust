"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "\"The Bali Trip Was Absolutely Magical! Every Detail Was Flawless. The Villas Were Luxurious And The Cultural Experiences Were Unforgettable.\"",
    name: "Michael Chen",
    location: "Singapore",
    image: "/images/traveler-1.svg",
  },
  {
    quote:
      "\"Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!\"",
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "/images/traveler-2.svg",
  },
  {
    quote:
      "\"Lagos To Lloret Was Beyond My Dreams. The Beaches Were Idyllic And Every Transfer Was Seamless. I Have Already Booked My Next Trip!\"",
    name: "Amara Okafor",
    location: "Lagos, Nigeria",
    image: "/images/traveler-3.svg",
  },
  {
    quote:
      "\"Kyoto In Cherry Blossom Season Was Pure Poetry. The Ryokan Stay And Tea Ceremony Felt Truly Authentic. Worth Every Penny!\"",
    name: "Yuki Tanaka",
    location: "Tokyo, Japan",
    image: "/images/traveler-4.svg",
  },
  {
    quote:
      "\"Barcelona Felt Like A Homecoming. Our Guide Found Hidden Tapas Bars I Would Never Have Discovered Alone. Simply Perfect.\"",
    name: "Elena Rodriguez",
    location: "Madrid, Spain",
    image: "/images/traveler-5.svg",
  },
  {
    quote:
      "\"The Jeju Island Getaway Was The Reset I Needed. Crystal Clear Waters, Friendly Locals, And Zero Stress. Wanderlust Delivered!\"",
    name: "David Kim",
    location: "Seoul, South Korea",
    image: "/images/traveler-6.svg",
  },
];

const PAGE_SIZE = 2;

export function Testimonials() {
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(testimonials.length / PAGE_SIZE);
  const visible = testimonials.slice(
    page * PAGE_SIZE,
    page * PAGE_SIZE + PAGE_SIZE
  );

  return (
    <section className="bg-white px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-bold text-zinc-900 md:text-4xl">
              What Travelers Say
            </h2>
            <p className="mt-2 text-xs text-zinc-500 md:text-sm">
              Real experiences from our happy travelers
            </p>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Previous travelers"
              onClick={() =>
                setPage((page - 1 + pageCount) % pageCount)
              }
              className="flex size-10 items-center justify-center rounded-full border border-teal-200 text-teal-600 hover:bg-teal-50"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next travelers"
              onClick={() => setPage((page + 1) % pageCount)}
              className="flex size-10 items-center justify-center rounded-full border border-teal-200 text-teal-600 hover:bg-teal-50"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        <div key={page} className="mt-8 grid gap-4 md:grid-cols-2">
          {visible.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex border border-zinc-200 bg-white"
            >
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm leading-relaxed font-semibold text-teal-600">
                  {testimonial.quote}
                </p>
                <div className="mt-auto pt-6">
                  <div className="text-sm font-medium text-teal-600">
                    &mdash; {testimonial.name}
                  </div>
                  <div className="mt-0.5 text-[11px] text-zinc-400">
                    {testimonial.location}
                  </div>
                </div>
              </div>
              <div className="relative w-36 shrink-0 md:w-44">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  sizes="176px"
                  className="object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
