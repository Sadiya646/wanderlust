import Image from "next/image";

const features = [
  {
    icon: "/images/ShieldCheck.png",
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: "/images/MapTrifold.png",
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: "/images/Headset.png",
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-teal-50/70 px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
            Why Travel With Us
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
            Why Choose Wanderlust?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-zinc-500 md:text-base">
            Your trusted partner for safe, comfortable, and unforgettable
            travel experiences.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-2xl border border-teal-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg md:p-8"
            >
              <div className="flex size-14 items-center justify-center rounded-xl bg-teal-50 transition-colors duration-300 group-hover:bg-teal-100">
                <Image
                  src={feature.icon}
                  alt=""
                  width={36}
                  height={36}
                  className="size-9 object-contain"
                />
              </div>

              <h3 className="mt-6 text-lg font-bold text-zinc-900">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                {feature.description}
              </p>

              <div className="mt-6 h-1 w-10 rounded-full bg-teal-500 transition-all duration-300 group-hover:w-16" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
