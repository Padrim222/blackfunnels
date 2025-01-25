import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

export const FloatingButton = () => {
  const { toast } = useToast();

  const handleClick = () => {
    toast({
      title: "Fale Conosco",
      description: "Entre em contato para saber mais sobre nossos planos!",
    });
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-8 right-8 rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 z-50"
    >
      <Plus className="w-6 h-6" />
    </Button>
  );
};