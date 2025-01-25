import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div 
      className="relative bg-black pt-20" 
      role="banner"
      style={{
        backgroundImage: "url('/lovable-uploads/5b35da98-2a4c-4d95-a041-c390af18e09a.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 
          className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in"
          aria-label="Tudo que você precisa, agora em uma ferramenta"
        >
          Tudo que você precisa, agora em <span className="text-primary hover:opacity-90 transition-opacity">1 ferramenta</span>
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto animate-slide-in">
          Foque no que você ama em vez de se preocupar com ferramentas e tecnologia. Tenha tudo que você precisa para ter sucesso online em um só lugar.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "200ms" }}>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-lg transform transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-primary/50 focus:outline-none"
            aria-label="Começar Teste Grátis"
          >
            Começar Teste Grátis
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-white text-lg transform transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-white/50 focus:outline-none"
            aria-label="Saiba Mais"
          >
            Saiba Mais
          </Button>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <div className="text-center transform transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold text-white">100+</h3>
            <p className="text-gray-400">Templates</p>
          </div>
          <div className="text-center transform transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold text-white">50k+</h3>
            <p className="text-gray-400">Usuários</p>
          </div>
          <div className="text-center transform transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold text-white">99.9%</h3>
            <p className="text-gray-400">Uptime</p>
          </div>
          <div className="text-center transform transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold text-white">24/7</h3>
            <p className="text-gray-400">Suporte</p>
          </div>
        </div>
      </div>
    </div>
  );
};