import { Navbar } from "@/components/navbar";
import { Banner } from "@/components/banner";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}
