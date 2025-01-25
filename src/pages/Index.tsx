import { Navigation } from "@/components/Navigation";
import { AffiliateBar } from "@/components/AffiliateBar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Experts } from "@/components/Experts";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Results } from "@/components/Results";
import { Integration } from "@/components/Integration";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FloatingButton } from "@/components/FloatingButton";
import { Roadmap } from "@/components/Roadmap";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AffiliateBar />
      <Navigation />
      <div className="pattern-dots">
        <Hero />
      </div>
      <div className="pattern-grid">
        <Features />
      </div>
      <div className="pattern-diagonal">
        <Results />
      </div>
      <div className="pattern-waves">
        <Experts />
      </div>
      <div className="pattern-grid">
        <Integration />
      </div>
      <div className="pattern-diagonal">
        <Roadmap />
      </div>
      <div className="pattern-dots">
        <ComparisonTable />
      </div>
      <div className="pattern-waves">
        <Pricing />
      </div>
      <div className="pattern-grid">
        <FAQ />
      </div>
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Index;