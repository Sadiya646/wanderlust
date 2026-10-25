
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function CallToAction() {
  return (
    <section className="relative isolate flex min-h-[400px] w-full items-center justify-center overflow-hidden px-4 py-20 md:min-h-[480px]">
      {/* Full-width background image */}
      <Image
        src="/images/CTA.png"
        alt="Explore your next travel destination"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />

      {/* Soft black overlay */}
      <div className="absolute inset-0 -z-10 bg-black/40" />

      {/* Content */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl leading-tight font-bold text-white md:text-5xl">
          Ready To Start Your Journey?
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/90 md:text-base">
          Join thousands of travelers who have discovered the world with us.
        </p>

        <a
          href="#"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-zinc-900 transition hover:bg-teal-500 hover:text-white"
        >
          BOOK YOUR TRIP TODAY
          <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}
