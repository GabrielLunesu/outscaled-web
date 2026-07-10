import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustedLogos } from "@/components/TrustedLogos";
import { WhyEcomOS } from "@/components/WhyEcomOS";
import { BuiltByAsking } from "@/components/BuiltByAsking";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { Integrations } from "@/components/Integrations";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <TrustedLogos />
        <WhyEcomOS />
        <BuiltByAsking />
        <Testimonials />
        <Pricing />
        <HowItWorks />
        <FAQ />
        <Integrations />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
