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
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in", "opacity-100");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    document.querySelectorAll(".scroll-animation").forEach((element) => {
      element.classList.add("opacity-0");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <AffiliateBar />
      <Navigation />
      <div className="pattern-dots scroll-animation">
        <Hero />
      </div>
      <div className="pattern-grid scroll-animation">
        <Features />
      </div>
      <div className="pattern-diagonal scroll-animation">
        <Results />
      </div>
      <div className="pattern-waves scroll-animation">
        <Experts />
      </div>
      <div className="pattern-grid scroll-animation">
        <Integration />
      </div>
      <div className="pattern-diagonal scroll-animation">
        <Roadmap />
      </div>
      <div className="pattern-dots scroll-animation">
        <ComparisonTable />
      </div>
      <div className="pattern-waves scroll-animation">
        <Pricing />
      </div>
      <div className="pattern-grid scroll-animation">
        <FAQ />
      </div>
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Index;