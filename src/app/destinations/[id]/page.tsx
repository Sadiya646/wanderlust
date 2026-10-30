import { Suspense } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  CircleCheck,
  MapPin,
  Pencil,
  Star,
  Trash2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import EditDestinationDialog from "@/components/EditDestinationDialog";

type Destination = {
  _id: string;
  name: string;
  country: string;
  imageUrl: string;
  category?: string;
  price?: number;
  rating?: number;
  reviews?: number;
  duration?: string;
  departureDate?: string;
  description?: string;
};

const highlights = [
  "Luxury beachfront accommodation",
  "Traditional Balinese spa treatment",
  "Sunrise trek to Mount Batur",
  "Visit Uluwatu Temple at sunset",
  "Private beach dinner experience",
  "English-speaking local guide",
];

const perks = [
  "Free cancellation up to 7 days",
  "Travel insurance included",
  "24/7 customer support",
];

async function DestinationDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(`http://localhost:8000/destination/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch destination details");
  }

  const data: Destination = await res.json();

  return (
    <>
      {/* Navigation & Actions Header */}
      <div className="flex items-center justify-between border-b border-slate-200/80 pb-6">
        <Link
          href="/destinations"
          className="group inline-flex items-center gap-2.5 text-base font-medium text-slate-700 transition-colors hover:text-teal-600"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white transition-all group-hover:border-teal-300 group-hover:bg-teal-50">
            <ArrowLeft className="size-4 text-slate-600 transition-transform group-hover:-translate-x-0.5 group-hover:text-teal-600" />
          </div>
          Back to Destinations
        </Link>

        <div className="flex items-center gap-3">

            
      <EditDestinationDialog destination={data} />

          <Button
            variant="outline"
            size="sm"
            className="h-10 gap-2 rounded-xl border-slate-200 px-5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-600"
          >
            <Trash2 className="size-4 text-red-500" />
            Cancel
          </Button>
        </div>
      </div>

      {/* Hero Showcase Image */}
      <div className="relative mt-8 overflow-hidden rounded-3xl shadow-2xl group">
        <img
          src={data.imageUrl}
          alt={data.name}
          className="h-[480px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

        {/* Floating Category Tag */}
        <div className="absolute bottom-6 left-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-md px-4 py-2 text-xs font-bold uppercase tracking-widest text-teal-700 shadow-md">
            <Sparkles className="size-3.5 text-teal-600" />
            {data.category || "Featured Destination"}
          </span>
        </div>
      </div>

      {/* Main Details & Booking Grid */}
      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_380px]">
        {/* Main Details */}
        <div className="space-y-10">
          <div>
            {/* Country Pill */}
            <div className="inline-flex items-center gap-2 rounded-lg bg-teal-50 px-3.5 py-1.5 text-sm font-semibold text-teal-700">
              <MapPin className="size-4 text-teal-600" />
              {data.country}
            </div>

            {/* Destination Name */}
            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              {data.name}
            </h1>

            {/* Rating & Duration Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 shadow-sm">
                <Star className="size-5 fill-amber-400 text-amber-400" />
                <span className="text-base font-bold text-slate-900">
                  {data.rating ?? 4.9}
                </span>
                <span className="text-sm font-medium text-slate-500">
                  ({data.reviews ?? 234} reviews)
                </span>
              </div>

              <div className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 shadow-sm">
                <CalendarDays className="size-5 text-teal-600" />
                {data.duration ?? "7 Days / 6 Nights"}
              </div>
            </div>
          </div>

          {/* Overview Box */}
          <div className="rounded-3xl border border-slate-100 bg-slate-50/80 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">Overview</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600 font-normal">
              {data.description ??
                `Discover the magic of ${data.name} with pristine beaches, ancient temples, and vibrant culture. Experience luxury resorts, tropical landscapes, and unforgettable sunsets.`}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Trip Highlights
            </h2>
            <p className="mt-2 text-base text-slate-500">
              Everything included in your trip experience for a hassle-free vacation.
            </p>

            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-center gap-3.5 rounded-2xl border border-slate-100 bg-white p-4 text-base font-semibold text-slate-800 shadow-sm transition hover:border-teal-200 hover:shadow-md"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                    <Check className="size-4" />
                  </div>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Booking Sticky Card */}
        <div>
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl shadow-slate-200/50 lg:sticky lg:top-8">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
                Starting from
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                <ShieldCheck className="size-4" /> Guaranteed Best Price
              </span>
            </div>

            <div className="mt-4 flex items-baseline gap-1.5">
              <span className="text-5xl font-black text-slate-900 tracking-tight">
                ${data.price ?? 1299}
              </span>
              <span className="text-base font-medium text-slate-500">
                / person
              </span>
            </div>

            <div className="mt-8 space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Select Departure Date
              </label>
              <Input
                type="date"
                defaultValue={data.departureDate ?? "2026-05-15"}
                aria-label="Departure date"
                className="h-12 rounded-2xl border-slate-200 bg-slate-50 text-base font-semibold text-slate-800 focus-visible:ring-sky-500"
              />
            </div>

            <Button className="mt-6 h-13 w-full rounded-2xl bg-sky-600 text-lg font-bold text-white shadow-lg shadow-sky-600/25 transition-all hover:bg-sky-700 hover:shadow-xl hover:shadow-sky-600/35">
              Book Now
              <ArrowRight className="ml-2 size-5" data-icon="inline-end" />
            </Button>

            <div className="mt-8 border-t border-slate-100 pt-6">
              <ul className="space-y-3.5">
                {perks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                  >
                    <CircleCheck className="size-5 shrink-0 text-teal-600" />
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <span className="sr-only">Category: {data.category}</span>
        </div>
      </div>
    </>
  );
}

function DetailsSkeleton() {
  return (
    <div aria-hidden="true">
      {/* Skeleton Toolbar */}
      <div className="flex items-center justify-between border-b border-slate-200/80 pb-6">
        <div className="h-6 w-44 animate-pulse rounded-lg bg-slate-200" />
        <div className="flex items-center gap-3">
          <div className="h-10 w-24 animate-pulse rounded-xl bg-slate-200" />
          <div className="h-10 w-28 animate-pulse rounded-xl bg-slate-200" />
        </div>
      </div>

      {/* Skeleton Image */}
      <div className="mt-8 h-[480px] animate-pulse rounded-3xl bg-slate-200" />

      {/* Skeleton Details + Booking */}
      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_380px]">
        <div className="space-y-8">
          <div className="h-6 w-28 animate-pulse rounded-lg bg-slate-200" />
          <div className="h-14 w-3/4 animate-pulse rounded-2xl bg-slate-200" />
          <div className="flex gap-4">
            <div className="h-11 w-36 animate-pulse rounded-2xl bg-slate-200" />
            <div className="h-11 w-44 animate-pulse rounded-2xl bg-slate-200" />
          </div>
          <div className="h-36 w-full animate-pulse rounded-3xl bg-slate-200" />
          <div className="h-8 w-48 animate-pulse rounded-lg bg-slate-200" />
          <div className="grid gap-4 sm:grid-cols-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-14 animate-pulse rounded-2xl bg-slate-200" />
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
          <div className="h-4 w-32 animate-pulse rounded-lg bg-slate-200" />
          <div className="mt-4 h-12 w-40 animate-pulse rounded-2xl bg-slate-200" />
          <div className="mt-8 h-4 w-40 animate-pulse rounded-lg bg-slate-200" />
          <div className="mt-2.5 h-12 w-full animate-pulse rounded-2xl bg-slate-200" />
          <div className="mt-6 h-13 w-full animate-pulse rounded-2xl bg-slate-200" />
          <div className="mt-8 space-y-3.5 border-t border-slate-100 pt-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-6 animate-pulse rounded-lg bg-slate-200" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const DestinationDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <Suspense fallback={<DetailsSkeleton />}>
        <DestinationDetails params={params} />
      </Suspense>
    </main>
  );
};

export default DestinationDetailsPage;