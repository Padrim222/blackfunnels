
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-black pt-20" role="banner">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/lovable-uploads/a496932e-c280-4501-955e-7df0f16ed56f.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: "0.5"
        }}
      />
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
          opacity: '0.3'
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-16 sm:pb-32 text-center z-10">
        <h1 
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 animate-fade-in"
          aria-label="Tudo que você precisa, agora em uma ferramenta"
        >
          Tudo que você precisa, agora em <span className="text-primary hover:opacity-90 transition-opacity">1 ferramenta</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 max-w-3xl mx-auto animate-slide-in">
          Foque no que você ama em vez de se preocupar com ferramentas e tecnologia. Tenha tudo que você precisa para ter sucesso online em um só lugar.
        </p>
        <div className="flex justify-center animate-fade-in" style={{ animationDelay: "200ms" }}>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-base sm:text-lg transform transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-primary/50 focus:outline-none w-full sm:w-auto"
            aria-label="Começar Teste Grátis"
            onClick={scrollToPricing}
          >
            Começar Teste Grátis
          </Button>
        </div>
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <div className="text-center transform transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl sm:text-4xl font-bold text-white mb-2">100+</h3>
            <p className="text-sm sm:text-base text-gray-400">Templates Prontos</p>
          </div>
          <div className="text-center transform transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl sm:text-4xl font-bold text-white mb-2">50k+</h3>
            <p className="text-sm sm:text-base text-gray-400">Usuários Ativos</p>
          </div>
          <div className="text-center transform transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl sm:text-4xl font-bold text-white mb-2">99.9%</h3>
            <p className="text-sm sm:text-base text-gray-400">Uptime Garantido</p>
          </div>
          <div className="text-center transform transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl sm:text-4xl font-bold text-white mb-2">24/7</h3>
            <p className="text-sm sm:text-base text-gray-400">Suporte Premium</p>
          </div>
        </div>
      </div>
    </div>
  );
};
