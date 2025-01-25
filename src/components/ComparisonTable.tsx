import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

interface Feature {
  feature: string;
  otherPrice: string;
  included: boolean;
}

const features: Feature[] = [
  {
    feature: "CRM e Gerenciamento de Pipeline",
    otherPrice: "R$500 mensal",
    included: true,
  },
  {
    feature: "Funil de vendas ilimitados",
    otherPrice: "R$1.500 mensal",
    included: true,
  },
  {
    feature: "Construtor de website",
    otherPrice: "R$100 mensal",
    included: true,
  },
  {
    feature: "Pesquisas e Formulários",
    otherPrice: "R$250 mensal",
    included: true,
  },
  {
    feature: "E-mail Marketing",
    otherPrice: "R$500 mensal",
    included: true,
  },
  {
    feature: "Chat SMS Marketing",
    otherPrice: "R$500 mensal",
    included: true,
  },
  {
    feature: "Reservas e agendamentos",
    otherPrice: "R$150 mensal",
    included: true,
  },
  {
    feature: "Automações e fluxos",
    otherPrice: "R$500 mensal",
    included: true,
  },
  {
    feature: "Cursos e Produtos",
    otherPrice: "Taxas, transação e hospedagem",
    included: true,
  },
  {
    feature: "Discador e Rastreamento de chamada",
    otherPrice: "R$450 mensal",
    included: true,
  },
  {
    feature: "Gerenciamento de reputação",
    otherPrice: "R$1.500 mensal",
    included: true,
  },
  {
    feature: "Trackeamento e Analytics",
    otherPrice: "R$250 mensal",
    included: true,
  },
  {
    feature: "Comunidade",
    otherPrice: "R$500 mensal",
    included: true,
  },
  {
    feature: "Assinatura de Documentos",
    otherPrice: "R$100 mensal",
    included: true,
  },
];

export const ComparisonTable = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">SUBSTITUA TODAS AS SUAS FERRAMENTAS</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Economize tempo e dinheiro cancelando todas as outras ferramentas
          </p>
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

        <div className="mt-16 space-y-8">
          {features.map((feature, index) => (
            <div key={index} className="border-t border-gray-700 pt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold text-white">{feature.feature}</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-300">{feature.otherPrice}</p>
                </div>
                <div className="flex items-center">
                  {feature.included && <Check className="text-primary h-5 w-5" />}
                </div>
              </div>
            </div>
          ))}
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