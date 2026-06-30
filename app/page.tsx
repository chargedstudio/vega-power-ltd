import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyVega } from "@/components/WhyVega";
import { SavingsEstimator } from "@/components/SavingsEstimator";
import { Proof } from "@/components/Proof";
import { ServiceAreas } from "@/components/ServiceAreas";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <WhyVega />
        <SavingsEstimator />
        <Proof />
        <ServiceAreas />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
