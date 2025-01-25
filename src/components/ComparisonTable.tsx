import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

interface Feature {
  feature: string;
  otherPrice: string;
  included: boolean;
}

const features: Feature[] = [
  {
    feature: "CRM e Gerenciamento de Pipeline",
    otherPrice: "R$500/mês",
    included: true,
  },
  {
    feature: "Funil de vendas",
    otherPrice: "R$1.500/mês",
    included: true,
  },
  {
    feature: "Construtor de website",
    otherPrice: "R$100/mês",
    included: true,
  },
  {
    feature: "Pesquisas e Formulários",
    otherPrice: "R$250/mês",
    included: true,
  },
  {
    feature: "E-mail Marketing",
    otherPrice: "R$500/mês",
    included: true,
  },
  {
    feature: "Chat SMS Marketing",
    otherPrice: "R$500/mês",
    included: true,
  },
  {
    feature: "Reservas e agendamentos",
    otherPrice: "R$150/mês",
    included: true,
  },
  {
    feature: "Automações e fluxos",
    otherPrice: "R$500/mês",
    included: true,
  },
  {
    feature: "Cursos e Produtos",
    otherPrice: "Taxas e transações",
    included: true,
  },
];

export const ComparisonTable = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            SUBSTITUA TODAS AS SUAS FERRAMENTAS
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Economize tempo e dinheiro cancelando todas as outras ferramentas
          </p>
        </div>

        <div className="mt-16 bg-gradient-to-b from-gray-800/30 to-transparent rounded-xl overflow-hidden">
          <div className="grid grid-cols-4 gap-4 bg-gray-800/50 p-6">
            <div className="text-xl font-semibold text-white">Ferramenta</div>
            <div className="text-xl font-semibold text-white text-center">Replaces</div>
            <div className="text-xl font-semibold text-white">Custo Atual</div>
            <div className="text-xl font-semibold text-white text-center">
              <img src="/lovable-uploads/a0e078b8-5770-4945-883e-76cee0cb39ca.png" alt="Black Funnels" className="h-8 ml-auto" />
            </div>
          </div>

          <div>
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="grid grid-cols-4 gap-4 items-center p-6 border-b border-gray-700/50 hover:bg-gray-800/20 transition-colors"
              >
                <div className="text-lg font-medium text-white">
                  {feature.feature}
                </div>
                <div className="flex justify-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                  </div>
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                  </div>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-gray-800/20 rounded-full"></div>
                  </div>
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
          <Card className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10">
            <div className="flex items-center justify-between gap-x-4">
              <h3 className="text-lg font-semibold leading-8 text-white">
                Outras Ferramentas
              </h3>
            </div>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-white">R$6.800</span>
              <span className="text-sm font-semibold leading-6 text-gray-300">/mensal</span>
            </p>
          </Card>

          <Card className="ring-2 ring-primary rounded-3xl p-8 xl:p-10">
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

        <div className="mt-16 text-center">
          <div className="inline-block bg-black px-4 py-2 rounded-full mb-4">
            <p className="text-white font-semibold">Oferta Limitada</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Garanta 14 dias grátis
          </h2>
          <p className="text-xl text-primary">
            Economize mais de R$6.500,00/mês
          </p>
        </div>
      </div>
    </div>
  );
};