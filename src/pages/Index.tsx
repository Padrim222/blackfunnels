import { Navigation } from "@/components/Navigation";
import { AffiliateBar } from "@/components/AffiliateBar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Experts } from "@/components/Experts";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AffiliateBar />
      <Navigation />
      <Hero />
      <Features />
      <Experts />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;