
import { Button } from "@/components/ui/button";
import { ArrowUpCircle, MessageCircle } from "lucide-react";

export const FloatingButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5521969982660', '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4 animate-fade-in">
      <Button
        onClick={openWhatsApp}
        size="lg"
        className="rounded-full shadow-lg bg-green-500 hover:bg-green-600 transition-all duration-300 p-6"
        aria-label="Suporte no WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
      <Button
        onClick={scrollToTop}
        size="lg"
        className="rounded-full shadow-lg bg-primary hover:bg-primary/90 transition-all duration-300 p-6"
        aria-label="Voltar ao topo"
      >
        <ArrowUpCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};
