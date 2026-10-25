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
    <section className="bg-teal-50 px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-zinc-900 md:text-4xl">
          Why Choose Wanderlust
        </h2>
        <p className="mt-2 text-center text-xs text-teal-700/80 md:text-sm">
          Your trusted partner for exceptional travel experiences
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border border-teal-100 bg-white/80 p-8 text-left"
            >
              <Image
                src={feature.icon}
                alt=""
                width={48}
                height={48}
                className="size-8 w-auto"
              />
              <h3 className="mt-4 text-lg font-bold text-zinc-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-500 md:text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
