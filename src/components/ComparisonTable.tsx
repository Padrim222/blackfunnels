import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface Feature {
  feature: string;
  otherPrice: string;
  included: boolean;
  platforms: {
    google: boolean;
    meta: boolean;
    other: boolean;
  };
}

const features: Feature[] = [
  {
    feature: "Chat",
    otherPrice: "R$547/mês",
    included: true,
    platforms: {
      google: true,
      meta: true,
      other: true
    }
  },
  {
    feature: "Gerenciamento de reputação",
    otherPrice: "R$397/mês",
    included: true,
    platforms: {
      google: true,
      meta: true,
      other: true
    }
  },
  {
    feature: "Trackeamento Analytics",
    otherPrice: "R$297/mês",
    included: true,
    platforms: {
      google: true,
      meta: true,
      other: true
    }
  },
  {
    feature: "Comunidade",
    otherPrice: "R$497/mês",
    included: true,
    platforms: {
      google: true,
      meta: true,
      other: true
    }
  },
  {
    feature: "Assinatura de Documentos",
    otherPrice: "R$197/mês",
    included: true,
    platforms: {
      google: true,
      meta: true,
      other: true
    }
  },
  {
    feature: "CRM e Gerenciamento de Pipeline",
    otherPrice: "R$597/mês",
    included: true,
    platforms: {
      google: true,
      meta: true,
      other: true
    }
  },
  {
    feature: "Funil de vendas",
    otherPrice: "R$1.897/mês",
    included: true,
    platforms: {
      google: true,
      meta: true,
      other: true
    }
  },
  {
    feature: "Construtor de website",
    otherPrice: "R$147/mês",
    included: true,
    platforms: {
      google: true,
      meta: true,
      other: true
    }
  },
  {
    feature: "Pesquisas e Formulários",
    otherPrice: "R$297/mês",
    included: true,
    platforms: {
      google: true,
      meta: true,
      other: true
    }
  }
];

export const ComparisonTable = () => {
  const navigate = useNavigate();

  const totalOtherPrice = features.reduce((acc, feature) => {
    const price = parseFloat(feature.otherPrice.replace('R$', '').replace('/mês', '').replace('.', '').replace(',', '.'));
    return acc + price;
  }, 0);

  return (
    <div className="py-24 sm:py-32 pattern-diagonal">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary animate-fade-in">
            SUBSTITUA TODAS AS SUAS FERRAMENTAS
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl animate-slide-in">
            Economize tempo e dinheiro cancelando todas as outras ferramentas
          </p>
        </div>

        <div className="mt-16 bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 animate-scale">
          <div className="grid grid-cols-4 gap-4 bg-black/60 p-6 border-b border-gray-800">
            <div className="text-xl font-semibold text-white">Ferramenta</div>
            <div className="text-xl font-semibold text-white text-center">Substitui</div>
            <div className="text-xl font-semibold text-white">Custo Atual</div>
            <div className="text-xl font-semibold text-white text-center">
              <img src="/lovable-uploads/a0e078b8-5770-4945-883e-76cee0cb39ca.png" alt="Black Funnels" className="h-8 ml-auto" />
            </div>
          </div>

          <div className="divide-y divide-gray-800/50">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="grid grid-cols-4 gap-4 items-center p-6 hover:bg-black/40 transition-colors"
              >
                <div className="text-lg font-medium text-white">
                  {feature.feature}
                </div>
                <div className="flex justify-center space-x-3">
                  {feature.platforms.google && (
                    <div className="w-10 h-10 bg-[#4285F4] rounded-full flex items-center justify-center animate-float">
                      <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                    </div>
                  )}
                  {feature.platforms.meta && (
                    <div className="w-10 h-10 bg-[#FF5722] rounded-full flex items-center justify-center animate-float" style={{ animationDelay: "0.2s" }}>
                      <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                    </div>
                  )}
                  {feature.platforms.other && (
                    <div className="w-10 h-10 bg-[#E0E0E0] rounded-full flex items-center justify-center animate-float" style={{ animationDelay: "0.4s" }}>
                      <div className="w-6 h-6 bg-black/20 rounded-full"></div>
                    </div>
                  )}
                </div>
                <div className="text-lg text-gray-300">
                  {feature.otherPrice}
                </div>
                <div className="flex justify-center">
                  {feature.included && (
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                      <Check className="text-green-500 h-5 w-5" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <Card className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10 animate-fade-in">
            <div className="flex items-center justify-between gap-x-4">
              <h3 className="text-lg font-semibold leading-8 text-white">
                Outras Ferramentas
              </h3>
            </div>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-white">
                R${totalOtherPrice.toLocaleString('pt-BR')}
              </span>
              <span className="text-sm font-semibold leading-6 text-gray-300">/mensal</span>
            </p>
          </Card>

          <Card className="ring-2 ring-primary rounded-3xl p-8 xl:p-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center justify-between gap-x-4">
              <h3 className="text-lg font-semibold leading-8 text-white">
                Black Funnels
              </h3>
            </div>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-white">R$297</span>
              <span className="text-sm font-semibold leading-6 text-gray-300">/mensal</span>
            </p>
          </Card>
        </div>

        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="inline-block bg-black/60 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-gray-800">
            <p className="text-white font-semibold">Oferta por Tempo Limitado</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Garanta 14 dias grátis
          </h2>
          <p className="text-xl text-primary mb-8">
            Economize mais de R${(totalOtherPrice - 297).toLocaleString('pt-BR')}/mês
          </p>
          <Button 
            onClick={() => navigate("/signup")}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full"
          >
            Iniciar 14 dias grátis
          </Button>
        </div>
      </div>
    </div>
  );
};