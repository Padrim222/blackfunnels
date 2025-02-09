
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-background/95 backdrop-blur-sm border-b border-muted z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/788104cd-669a-452e-8908-5c6a46a78150.png" 
                alt="Logo Black Funnels" 
                className="h-8 w-auto"
              />
              <span className="text-lg font-heading font-bold">BlackFunnels</span>
            </div>
            <div className="hidden md:flex items-center ml-8 space-x-4">
              <Button 
                variant="ghost" 
                className="text-foreground hover:text-primary"
                onClick={() => scrollToSection("features")}
              >
                Vantagens
              </Button>
              <Button 
                variant="ghost" 
                className="text-foreground hover:text-primary"
                onClick={() => scrollToSection("experts")}
              >
                Funis
              </Button>
              <Button 
                variant="ghost" 
                className="text-foreground hover:text-primary"
                onClick={() => scrollToSection("integration")}
              >
                Integrações
              </Button>
              <Button 
                variant="ghost" 
                className="text-foreground hover:text-primary"
                onClick={() => scrollToSection("pricing")}
              >
                Preços
              </Button>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              className="bg-black hover:bg-black/90 text-white relative group overflow-hidden"
              style={{
                boxShadow: '0 0 25px rgba(209, 70, 239, 0.5)',
                transition: 'all 0.3s ease'
              }}
            >
              <span className="relative z-10">Black Partners</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#D946EF] to-[#8B5CF6] opacity-20 group-hover:opacity-30 transition-opacity" />
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Iniciar 14 dias grátis
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-foreground -mr-2"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-b border-muted animate-fade-in">
          <div className="px-4 pt-2 pb-3 space-y-2">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-foreground hover:text-primary"
              onClick={() => scrollToSection("features")}
            >
              Vantagens
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-foreground hover:text-primary"
              onClick={() => scrollToSection("experts")}
            >
              Funis
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-foreground hover:text-primary"
              onClick={() => scrollToSection("integration")}
            >
              Integrações
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-foreground hover:text-primary"
              onClick={() => scrollToSection("pricing")}
            >
              Preços
            </Button>
            <div className="pt-2 space-y-2">
              <Button 
                className="w-full bg-black hover:bg-black/90 text-white relative group overflow-hidden"
                style={{
                  boxShadow: '0 0 25px rgba(209, 70, 239, 0.5)',
                  transition: 'all 0.3s ease'
                }}
              >
                <span className="relative z-10">Black Partners</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#D946EF] to-[#8B5CF6] opacity-20 group-hover:opacity-30 transition-opacity" />
              </Button>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-white"
              >
                Iniciar 14 dias grátis
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

