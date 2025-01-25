import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative bg-black pt-20" role="banner">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/lovable-uploads/a496932e-c280-4501-955e-7df0f16ed56f.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: "0.3"
        }}
      />
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, hsla(277, 75%, 84%, 1) 0%, hsla(297, 50%, 51%, 1) 100%)`,
          opacity: '0.1'
        }}
      />
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.3) 2px, transparent 0)`,
          backgroundSize: '30px 30px',
          opacity: '0.4'
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center z-10">
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