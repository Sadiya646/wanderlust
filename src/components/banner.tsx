
import Image from "next/image";
import {
  ArrowRight,
  MapPin,
  CalendarDays,
  Wallet,
  Users,
  ChevronDown,
} from "lucide-react";

const searchFields = [
  {
    label: "LOCATION",
    value: "Where to go?",
    icon: MapPin,
  },
  {
    label: "DATE / DURATION",
    value: "Anytime · 3 Days",
    icon: CalendarDays,
  },
  {
    label: "YOUR BUDGET",
    value: "$0 - $2000",
    icon: Wallet,
  },
  {
    label: "TRAVELERS",
    value: "2 People",
    icon: Users,
  },
];

export function Banner() {
  return (
    <section className="relative flex min-h-[600px] flex-col items-center justify-center overflow-hidden px-5 pb-36 pt-20 text-center md:pb-32">
      <Image
        src="/images/Banner (1).png"
        alt="Beautiful travel destination"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />

      <div className="absolute inset-0 -z-10 bg-black/35" />

      <h1 className="max-w-2xl text-4xl leading-tight font-bold text-white md:text-6xl">
        Discover Your Next Adventure
      </h1>

      <p className="mt-5 max-w-lg text-sm leading-7 text-white/90 md:text-base">
        Explore breathtaking destinations and create unforgettable memories
        with our curated experiences.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#destinations"
          className="flex items-center gap-2 rounded-full bg-teal-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-400"
        >
          EXPLORE NOW
          <ArrowRight className="size-4" />
        </a>

        <a
          href="#destinations"
          className="rounded-full border border-white/60 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
        >
          VIEW DESTINATIONS
        </a>
      </div>

      {/* Search panel */}
      <div className="absolute inset-x-4 bottom-4 z-10 mx-auto max-w-6xl rounded-2xl border border-white/50 bg-white/95 p-3 shadow-2xl backdrop-blur-xl md:bottom-6 md:p-4">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-[1.2fr_1.3fr_1fr_0.9fr_auto] md:items-center md:gap-2">
          {searchFields.map((field) => {
            const Icon = field.icon;

            return (
              <button
                key={field.label}
                type="button"
                className="group flex min-w-0 items-center gap-3 rounded-xl border border-zinc-200 bg-white px-3 py-3 text-left transition hover:border-teal-500 hover:bg-teal-50/50 md:px-4 md:py-4"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition group-hover:bg-teal-100">
                  <Icon className="size-5" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold tracking-[0.12em] text-zinc-500 md:text-[11px]">
                    {field.label}
                  </p>

                  <p className="mt-1 truncate text-xs font-semibold text-zinc-800 md:text-sm">
                    {field.value}
                  </p>
                </div>

                <ChevronDown className="hidden size-4 shrink-0 text-zinc-400 md:block" />
              </button>
            );
          })}

          <button
            type="button"
            className="col-span-2 flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-teal-600/20 transition hover:bg-teal-700 md:col-span-1"
          >
            <MapPin className="size-4" />
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
