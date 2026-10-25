import { Navbar } from "@/components/navbar";
import { Banner } from "@/components/banner";
import { CallToAction } from "@/components/cta";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
