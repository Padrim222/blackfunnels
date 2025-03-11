
import { Button } from "@/components/ui/button";
import { Sparkles, Zap } from "lucide-react";

export const Hero = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-black pt-20 overflow-hidden" role="banner">
      {/* Enhanced background with animated elements */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/a496932e-c280-4501-955e-7df0f16ed56f.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: "0.6"
        }}
      />
      
      {/* Animated grid overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 87, 10, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
          opacity: '0.5'
        }}
      />
      
      {/* Dynamic neon elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-[60%] right-[15%] w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute bottom-[10%] left-[20%] w-24 h-24 bg-primary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0.7s" }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-16 sm:pb-32 text-center z-10">
        <h1 
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in relative"
          aria-label="Tudo que você precisa, agora em uma ferramenta"
        >
          Tudo que você precisa, agora em{" "}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-pulse">
              1 ferramenta
            </span>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ping"></span>
          </span>
          <Sparkles className="absolute -top-6 -right-6 w-12 h-12 text-primary/50 animate-pulse hidden md:block" />
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 max-w-3xl mx-auto animate-slide-in backdrop-blur-sm bg-black/30 p-4 rounded-lg">
          Foque no que você ama em vez de se preocupar com ferramentas e tecnologia. Tenha tudo que você precisa para ter sucesso online em um só lugar.
        </p>
        
        <div className="flex justify-center animate-fade-in" style={{ animationDelay: "200ms" }}>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-base sm:text-lg transform transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-primary/30 focus:ring-2 focus:ring-primary/50 focus:outline-none w-full sm:w-auto group"
            aria-label="Começar Teste Grátis"
            onClick={scrollToPricing}
          >
            <span className="group-hover:scale-105 transition-transform duration-300 flex items-center">
              Começar Teste Grátis
              <Zap className="ml-2 h-5 w-5 group-hover:animate-pulse" />
            </span>
          </Button>
        </div>
        
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
          {[
            { value: "100+", label: "Templates Prontos" },
            { value: "50k+", label: "Usuários Ativos" },
            { value: "99.9%", label: "Uptime Garantido" },
            { value: "24/7", label: "Suporte Premium" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center transform transition-all duration-500 hover:scale-110 bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-primary/10 hover:border-primary/30 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2 group-hover:animate-pulse">
                {stat.value}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
