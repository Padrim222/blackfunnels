import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const TrialButton = () => {
  const { toast } = useToast();

  const handleClick = () => {
    toast({
      title: "Teste Grátis",
      description: "Iniciando seu período de teste gratuito...",
    });
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="bg-primary hover:bg-primary/90 text-lg transform transition-all duration-300 hover:scale-105"
    >
      Começar Teste Grátis
      <ArrowRight className="ml-2 h-5 w-5" />
    </Button>
  );
};