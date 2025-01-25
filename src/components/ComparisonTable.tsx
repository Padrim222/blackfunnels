import { Check } from "lucide-react";

type ComparisonItem = {
  feature: string;
  otherPrice: string;
  included: boolean;
};

const comparisonItems: ComparisonItem[] = [
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
    <div className="bg-background py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            WHAT YOU CAN REPLACE
          </h2>
          <p className="text-xl text-foreground mb-4">
            Finally cancel all the other expensive tools you're overpaying for
          </p>
          <p className="text-lg text-muted-foreground">Features</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-muted">
                <th className="py-4 text-left text-foreground">Replaces</th>
                <th className="py-4 text-left text-foreground">
                  Outra Ferramenta a partir de
                </th>
                <th className="py-4 text-center text-foreground">Black Funnels</th>
              </tr>
            </thead>
            <tbody>
              {comparisonItems.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-muted hover:bg-muted/5"
                >
                  <td className="py-4 text-foreground">{item.feature}</td>
                  <td className="py-4 text-foreground">{item.otherPrice}</td>
                  <td className="py-4 text-center">
                    {item.included && (
                      <Check className="h-6 w-6 text-primary mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
              <tr className="border-b border-muted bg-black/50">
                <td className="py-4 font-bold text-foreground">Total</td>
                <td className="py-4 font-bold text-foreground">R$ 6.800,00</td>
                <td className="py-4 font-bold text-center text-primary">R$297</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-black px-4 py-2 rounded-full mb-4">
            <p className="text-white font-semibold">Oferta Limitada</p>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Garanta 14 dias grátis
          </h3>
          <p className="text-xl text-primary">
            Economize mais de R$6.500,00/mês
          </p>
        </div>
      </div>
    </div>
  );
};