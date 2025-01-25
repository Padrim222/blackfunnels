import { Check } from "lucide-react";

type ComparisonItem = {
  feature: string;
  otherPrice: string;
  included: boolean;
  icon?: string;
};

const comparisonItems: ComparisonItem[] = [
  {
    feature: "CRM e Gerenciamento de Pipeline",
    otherPrice: "R$500 mensal",
    included: true,
    icon: "/lovable-uploads/7030ba35-8e22-4c0a-aa2b-fc4ea205c434.png"
  },
  {
    feature: "Funil de vendas ilimitados",
    otherPrice: "R$1.500 mensal",
    included: true,
    icon: "/lovable-uploads/a2909eb1-dd42-4bc7-883a-8ec27b9e4a5e.png"
  },
  {
    feature: "Construtor de website",
    otherPrice: "R$100 mensal",
    included: true,
    icon: "/lovable-uploads/c4ba33d2-2d8e-4316-ac79-cd106883a89f.png"
  },
  {
    feature: "Pesquisas e Formulários",
    otherPrice: "R$250 mensal",
    included: true,
    icon: "/lovable-uploads/795ebb0c-a3e8-4158-8694-ec2ae45e1482.png"
  },
  {
    feature: "E-mail Marketing",
    otherPrice: "R$500 mensal",
    included: true,
    icon: "/lovable-uploads/70a6b443-6e50-4343-89ee-ff26778f5bf1.png"
  },
  {
    feature: "Chat SMS Marketing",
    otherPrice: "R$500 mensal",
    included: true,
    icon: "/lovable-uploads/6b929334-829d-4192-adfd-380248388150.png"
  },
  {
    feature: "Reservas e agendamentos",
    otherPrice: "R$150 mensal",
    included: true,
    icon: "/lovable-uploads/9d94908a-5c76-4e6e-8110-ad21e49f15e0.png"
  },
  {
    feature: "Automações e fluxos",
    otherPrice: "R$500 mensal",
    included: true,
    icon: "/lovable-uploads/aaddb179-cf16-4773-b7bb-b0783e964d9e.png"
  },
  {
    feature: "Cursos e Produtos",
    otherPrice: "Taxas, transação e hospedagem",
    included: true,
    icon: "/lovable-uploads/e2b0f476-2cab-4166-a847-9c42790f420c.png"
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
                  <td className="py-4 text-foreground">
                    <div className="flex items-center gap-4">
                      {item.icon && (
                        <img 
                          src={item.icon} 
                          alt={item.feature}
                          className="w-8 h-8 object-contain"
                        />
                      )}
                      {item.feature}
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