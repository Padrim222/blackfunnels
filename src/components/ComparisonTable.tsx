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
    icons: [
      "/lovable-uploads/410600fc-4a54-47f9-9a09-b29271c31241.png",
      "/lovable-uploads/468fc596-9761-4354-87ee-397fc8a54374.png",
      "/lovable-uploads/839f5570-7b6d-4f18-87c5-a66afeac8e03.png"
    ]
  },
  {
    feature: "Automações e fluxos",
    otherPrice: "R$500 mensal",
    included: true,
    icons: [
      "/lovable-uploads/71a9e08e-bcae-48f9-ac78-69e648cbe979.png",
      "/lovable-uploads/5079757b-50ae-441f-9e43-1d05cc92e10f.png",
      "/lovable-uploads/31ce2f54-7ad2-4b09-8240-c279c2e89936.png"
    ]
  },
  {
    feature: "Cursos e Produtos",
    otherPrice: "Taxas, transação e hospedagem",
    included: true,
    icons: [
      "/lovable-uploads/f7c2e7c7-bf06-415b-8828-590ae1939524.png",
      "/lovable-uploads/73b7665a-a233-4c53-9219-494e77aab9e2.png",
      "/lovable-uploads/abdfc951-84d6-4051-9ee7-fce145422cd4.png"
    ]
  },
  {
    feature: "Discador e Rastreamento de chamada",
    otherPrice: "R$450 mensal",
    included: true,
    icons: [
      "/lovable-uploads/effa2993-213c-42ac-b0c8-6bba763f6015.png",
      "/lovable-uploads/81dc0c94-18ac-4bda-a02e-5da2383213e1.png",
      "/lovable-uploads/903ff8f7-2819-4d6b-abfb-00d6c8636d6f.png"
    ]
  },
  {
    feature: "Gerenciamento de reputação",
    otherPrice: "R$1.500 mensal",
    included: true,
    icons: [
      "/lovable-uploads/8f58ba45-eb56-4ff7-8caa-254cc6fdeed0.png",
      "/lovable-uploads/c8acc852-b674-4f0e-888c-381b4589a17d.png",
      "/lovable-uploads/3d19d207-499a-4dbf-8faa-b948580f5abc.png"
    ]
  },
  {
    feature: "Trackeamento e Analytics",
    otherPrice: "R$250 mensal",
    included: true,
    icons: [
      "/lovable-uploads/fca49068-82b0-49d8-8ba3-9282b712c432.png"
    ]
  },
  {
    feature: "Comunidade",
    otherPrice: "R$500 mensal",
    included: true,
    icons: [
      "/lovable-uploads/8ff934b7-9360-409a-8198-c522eae39845.png",
      "/lovable-uploads/b1ffede3-6742-481e-bbbf-7fb109349b98.png"
    ]
  },
  {
    feature: "Assinatura de Documentos",
    otherPrice: "R$100 mensal",
    included: true,
    icons: [
      "/lovable-uploads/c0cb665e-d3d0-412e-9a3d-96632d4fa165.png",
      "/lovable-uploads/2e179ecd-c40b-4990-b539-2836017e31bb.png"
    ]
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
