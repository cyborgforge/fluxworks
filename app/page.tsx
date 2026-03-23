import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home/hero-section";
import { MarqueeSection } from "@/components/home/marquee-section";
import { BuildSection } from "@/components/home/build-section";
import { ProductsSection } from "@/components/home/products-section";
import { StatsSection } from "@/components/home/stats-section";
import { WhySection } from "@/components/home/why-section";
import { CTASection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <div className="pt-16">
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <BuildSection />
      <ProductsSection />
      <StatsSection />
      <WhySection />
      <CTASection />
      <Footer />
    </div>
  );
}
