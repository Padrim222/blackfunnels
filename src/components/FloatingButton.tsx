import { Button } from "@/components/ui/button";
import { ArrowUpCircle } from "lucide-react";

export const FloatingButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-fade-in">
      <Button
        onClick={scrollToTop}
        size="lg"
        className="rounded-full shadow-lg bg-primary hover:bg-primary/90 transition-all duration-300 p-6"
      >
        <ArrowUpCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};