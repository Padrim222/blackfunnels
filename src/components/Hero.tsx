import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Tudo que você precisa, agora em <span className="text-primary">1 ferramenta</span>
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
          Foque no que você ama em vez de se preocupar com ferramentas e tecnologia. Tenha tudo que você precisa para ter sucesso online em um só lugar.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg">
            Começar Teste Grátis
          </Button>
          <Button size="lg" variant="outline" className="text-white text-lg">
            Saiba Mais
          </Button>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white">100+</h3>
            <p className="text-gray-400">Templates</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white">50k+</h3>
            <p className="text-gray-400">Usuários</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white">99.9%</h3>
            <p className="text-gray-400">Uptime</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white">24/7</h3>
            <p className="text-gray-400">Suporte</p>
          </div>
        </div>
      </div>
    </div>
  );
};
