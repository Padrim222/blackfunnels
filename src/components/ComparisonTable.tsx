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
      "/lovable-uploads/5a602589-e27c-4c82-b77b-564654c4fe08.png"
    ]
  },
  {
    feature: "Funil de vendas ilimitados",
    otherPrice: "R$1.500 mensal",
    included: true,
    icons: [
      "/lovable-uploads/bfc75f19-fa44-4376-8454-75a7b12d9dc1.png"
    ]
  },
  {
    feature: "Construtor de website",
    otherPrice: "R$100 mensal",
    included: true,
    icons: [
      "/lovable-uploads/8e597996-2bcc-4e7e-88d5-812eb0ae81e4.png"
    ]
  },
  {
    feature: "Pesquisas e Formulários",
    otherPrice: "R$250 mensal",
    included: true,
    icons: [
      "/lovable-uploads/2715aec4-d581-4706-8bfb-cbced3ee576f.png"
    ]
  },
  {
    feature: "E-mail Marketing",
    otherPrice: "R$500 mensal",
    included: true,
    icons: [
      "/lovable-uploads/b283606b-80cb-46d7-945d-45beeaea5bea.png"
    ]
  },
  {
    feature: "Chat SMS Marketing",
    otherPrice: "R$500 mensal",
    included: true,
    icons: [
      "/lovable-uploads/6b929334-829d-4192-adfd-380248388150.png",
      "/lovable-uploads/861bf14d-b222-4c51-93dd-292abbd82b29.png"
    ]
  },
  {
    feature: "Reservas e agendamentos",
    otherPrice: "R$150 mensal",
    included: true,
    icons: [
      "/lovable-uploads/9d94908a-5c76-4e6e-8110-ad21e49f15e0.png",
      "/lovable-uploads/8949d7b7-8d0c-42f9-ae46-85eaf03f3161.png"
    ]
  },
  {
    feature: "Automações e fluxos",
    otherPrice: "R$500 mensal",
    included: true,
    icons: [
      "/lovable-uploads/aaddb179-cf16-4773-b7bb-b0783e964d9e.png",
      "/lovable-uploads/df580a98-63d2-4f11-b574-cab1d4fd06be.png",
      "/lovable-uploads/f0373cae-48d8-4b4f-a439-1f11ebde9fa8.png"
    ]
  },
  {
    feature: "Cursos e Produtos",
    otherPrice: "Taxas, transação e hospedagem",
    included: true,
    icons: [
      "/lovable-uploads/e2b0f476-2cab-4166-a847-9c42790f420c.png",
      "/lovable-uploads/544a7401-0ee0-430f-aee7-ac9b41825e72.png"
    ]
  },
  {
    feature: "Discador e Rastreamento de chamada",
    otherPrice: "R$450 mensal",
    included: true,
    icons: [
      "/lovable-uploads/a0c801a7-ec22-4b49-abcd-85c81e5cc15f.png",
      "/lovable-uploads/f6281d60-3132-4ff5-9dcb-5c05e84d62b1.png"
    ]
  },
  {
    feature: "Gerenciamento de reputação",
    otherPrice: "R$1.500 mensal",
    included: true,
    icons: [
      "/lovable-uploads/807b079c-6037-40f6-87e6-b9774452d119.png",
      "/lovable-uploads/9ddc9868-3bca-4970-84a2-f71ee936368c.png"
    ]
  },
  {
    feature: "Trackeamento e Analytics",
    otherPrice: "R$250 mensal",
    included: true,
    icons: [
      "/lovable-uploads/2d6086ae-2c9d-4212-bd26-06e429a46ca7.png",
      "/lovable-uploads/3adaf65b-d235-4a31-9c4e-1b374a97be76.png"
    ]
  },
  {
    feature: "Comunidade",
    otherPrice: "R$500 mensal",
    included: true,
    icons: [
      "/lovable-uploads/90a30ac1-de7b-4b81-bba8-43c7e3186446.png",
      "/lovable-uploads/40d8c3e1-9742-414c-8987-c45b1755a856.png"
    ]
  },
  {
    feature: "Assinatura de Documentos",
    otherPrice: "R$100 mensal",
    included: true,
    icons: [
      "/lovable-uploads/2eff257e-8f02-4cf5-8099-2b18ca37f075.png",
      "/lovable-uploads/fbb68abf-b17c-4215-bd09-e87a73dedb8b.png"
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
                <th className="py-4 text-left text-foreground">Features</th>
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
                  <td className="py-4">
                    <div className="flex gap-2 items-center">
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
                <td></td>
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
