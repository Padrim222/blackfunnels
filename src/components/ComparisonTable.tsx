import { Check } from "lucide-react";

type ComparisonItem = {
  feature: string;
  otherPrice: string;
  included: boolean;
  icons: string[];
};

const comparisonItems: ComparisonItem[] = [
  {
    feature: "CRM e Gerenciamento de Pipeline",
    otherPrice: "R$500 mensal",
    included: true,
    icons: [
      "/lovable-uploads/902dade8-d2e4-41e0-9ebf-45fbf47378b9.png",
      "/lovable-uploads/adc4f8e6-2b0a-45b9-a53c-69f71b6d743c.png",
      "/lovable-uploads/3d21b87a-24eb-41b2-b6f0-b1e146dc62c0.png"
    ]
  },
  {
    feature: "Funil de vendas ilimitados",
    otherPrice: "R$1.500 mensal",
    included: true,
    icons: [
      "/lovable-uploads/f2e8eae1-423b-4059-9e9a-49275d52ccb9.png",
      "/lovable-uploads/7b1e4499-e0ab-4c58-a182-86504adf8f5d.png",
      "/lovable-uploads/17c4014d-8ffa-4f18-bcd8-12967418fb92.png"
    ]
  },
  {
    feature: "Construtor de website",
    otherPrice: "R$100 mensal",
    included: true,
    icons: [
      "/lovable-uploads/a911b0af-fcee-4e78-92ce-3992ed4c9e3e.png",
      "/lovable-uploads/378d9586-9488-43f6-a8e3-38f52333aaf2.png",
      "/lovable-uploads/0f722ef4-2f67-48e7-ab34-9848b11db44a.png"
    ]
  },
  {
    feature: "Pesquisas e Formulários",
    otherPrice: "R$250 mensal",
    included: true,
    icons: [
      "/lovable-uploads/1a0d8b14-dcc2-47eb-bc52-8983dd5e2773.png",
      "/lovable-uploads/8b96e739-c65d-4cdb-a107-5ab8cef3077a.png",
      "/lovable-uploads/6b93378b-9696-4ab5-b687-42daa6706969.png"
    ]
  },
  {
    feature: "E-mail Marketing",
    otherPrice: "R$500 mensal",
    included: true,
    icons: [
      "/lovable-uploads/ce23304e-43e1-4314-8348-f1d93f736dec.png",
      "/lovable-uploads/06cf7af2-6bf1-488b-a732-bb988bbda307.png",
      "/lovable-uploads/bc0f5fae-3fb7-4b9e-9d04-30c805ff8d19.png"
    ]
  },
  {
    feature: "Chat SMS Marketing",
    otherPrice: "R$500 mensal",
    included: true,
    icons: [
      "/lovable-uploads/894cc3fa-aeef-4449-8413-2139c75dac47.png",
      "/lovable-uploads/81457613-3c2b-4c6d-bfff-1ad07969cf0c.png",
      "/lovable-uploads/bbcb2288-2616-46ad-8e10-156a021e4c07.png"
    ]
  },
  {
    feature: "Reservas e agendamentos",
    otherPrice: "R$150 mensal",
    included: true,
    icons: []
  },
  {
    feature: "Automações e fluxos",
    otherPrice: "R$500 mensal",
    included: true,
    icons: []
  },
  {
    feature: "Cursos e Produtos",
    otherPrice: "Taxas, transação e hospedagem",
    included: true,
    icons: []
  },
  {
    feature: "Discador e Rastreamento de chamada",
    otherPrice: "R$450 mensal",
    included: true,
    icons: []
  },
  {
    feature: "Gerenciamento de reputação",
    otherPrice: "R$1.500 mensal",
    included: true,
    icons: []
  },
  {
    feature: "Trackeamento e Analytics",
    otherPrice: "R$250 mensal",
    included: true,
    icons: []
  },
  {
    feature: "Comunidade",
    otherPrice: "R$500 mensal",
    included: true,
    icons: []
  },
  {
    feature: "Assinatura de Documentos",
    otherPrice: "R$100 mensal",
    included: true,
    icons: []
  }
];

export const ComparisonTable = () => {
  return (
    <div className="bg-background py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            O QUE VOCÊ PODE SUBSTITUIR
          </h2>
          <p className="text-xl text-foreground mb-4">
            Finalmente cancele todas as outras ferramentas caras que você está pagando
          </p>
          <p className="text-lg text-muted-foreground">Funcionalidades</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-muted">
                <th className="py-6 text-left text-foreground font-normal text-lg">Features</th>
                <th className="py-6 text-left text-foreground font-normal text-lg">Replaces</th>
                <th className="py-6 text-left text-foreground font-normal text-lg">
                  Outra Ferramenta a partir de
                </th>
                <th className="py-6 text-center text-foreground font-normal text-lg">Black Funnels</th>
              </tr>
            </thead>
            <tbody>
              {comparisonItems.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-muted hover:bg-muted/5"
                >
                  <td className="py-6 text-foreground text-base">{item.feature}</td>
                  <td className="py-6">
                    <div className="flex gap-3 items-center">
                      {item.icons.map((icon, iconIndex) => (
                        <img
                          key={iconIndex}
                          src={icon}
                          alt={`${item.feature} platform ${iconIndex + 1}`}
                          className="w-8 h-8 object-contain bg-white rounded-full p-1"
                        />
                      ))}
                    </div>
                  </td>
                  <td className="py-6 text-foreground text-base">{item.otherPrice}</td>
                  <td className="py-6 text-center">
                    {item.included && (
                      <Check className="h-6 w-6 text-primary mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
              <tr className="border-b border-muted bg-black/50">
                <td className="py-6 font-bold text-foreground">Total</td>
                <td></td>
                <td className="py-6 font-bold text-foreground">R$ 6.800,00</td>
                <td className="py-6 font-bold text-center text-primary">R$297</td>
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
