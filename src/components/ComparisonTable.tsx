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
    icon: "/lovable-uploads/a0c801a7-ec22-4b49-abcd-85c81e5cc15f.png"
  },
  {
    feature: "Gerenciamento de reputação",
    otherPrice: "R$1.500 mensal",
    included: true,
    icon: "/lovable-uploads/807b079c-6037-40f6-87e6-b9774452d119.png"
  },
  {
    feature: "Trackeamento e Analytics",
    otherPrice: "R$250 mensal",
    included: true,
    icon: "/lovable-uploads/2d6086ae-2c9d-4212-bd26-06e429a46ca7.png"
  },
  {
    feature: "Comunidade",
    otherPrice: "R$500 mensal",
    included: true,
    icon: "/lovable-uploads/90a30ac1-de7b-4b81-bba8-43c7e3186446.png"
  },
  {
    feature: "Assinatura de Documentos",
    otherPrice: "R$100 mensal",
    included: true,
    icon: "/lovable-uploads/2eff257e-8f02-4cf5-8099-2b18ca37f075.png"
  },
  {
    feature: "Notificações",
    otherPrice: "R$200 mensal",
    included: true,
    icon: "/lovable-uploads/28a9176b-4ec2-4ebc-a099-02cf31fd15d0.png"
  },
  {
    feature: "Integração com Whatsapp",
    otherPrice: "R$300 mensal",
    included: true,
    icon: "/lovable-uploads/78b85340-1089-428a-b31b-44f7831c6759.png"
  },
  {
    feature: "Integração com Calendly",
    otherPrice: "R$150 mensal",
    included: true,
    icon: "/lovable-uploads/fbb68abf-b17c-4215-bd09-e87a73dedb8b.png"
  },
  {
    feature: "Integração com Clickup",
    otherPrice: "R$250 mensal",
    included: true,
    icon: "/lovable-uploads/3adaf65b-d235-4a31-9c4e-1b374a97be76.png"
  },
  {
    feature: "Integração com Typebot",
    otherPrice: "R$200 mensal",
    included: true,
    icon: "/lovable-uploads/df580a98-63d2-4f11-b574-cab1d4fd06be.png"
  },
  {
    feature: "Integração com Hotmart",
    otherPrice: "R$150 mensal",
    included: true,
    icon: "/lovable-uploads/815bde0d-f864-42c1-a611-95243572c744.png"
  },
  {
    feature: "Integração com Semrush",
    otherPrice: "R$500 mensal",
    included: true,
    icon: "/lovable-uploads/9ddc9868-3bca-4970-84a2-f71ee936368c.png"
  },
  {
    feature: "Integração com Twilio",
    otherPrice: "R$300 mensal",
    included: true,
    icon: "/lovable-uploads/d2cebbc6-9248-45d1-9330-37f8b3c0ce08.png"
  },
  {
    feature: "Integração com Cloudflare",
    otherPrice: "R$200 mensal",
    included: true,
    icon: "/lovable-uploads/54ef9865-c32d-4e65-af53-1525d43d6b16.png"
  },
  {
    feature: "Integração com Zapier",
    otherPrice: "R$250 mensal",
    included: true,
    icon: "/lovable-uploads/8949d7b7-8d0c-42f9-ae46-85eaf03f3161.png"
  },
  {
    feature: "Integração com Pandadoc",
    otherPrice: "R$200 mensal",
    included: true,
    icon: "/lovable-uploads/2ec5dac5-a6b5-4618-8b40-0a99b3e30455.png"
  },
  {
    feature: "Integração com Skool",
    otherPrice: "R$300 mensal",
    included: true,
    icon: "/lovable-uploads/f0373cae-48d8-4b4f-a439-1f11ebde9fa8.png"
  },
  {
    feature: "Integração com Convertkit",
    otherPrice: "R$250 mensal",
    included: true,
    icon: "/lovable-uploads/5496a1eb-51be-4a6f-97c2-550feeeb2ea4.png"
  },
  {
    feature: "Integração com Bluebird",
    otherPrice: "R$200 mensal",
    included: true,
    icon: "/lovable-uploads/861bf14d-b222-4c51-93dd-292abbd82b29.png"
  },
  {
    feature: "Integração com Active Campaign",
    otherPrice: "R$500 mensal",
    included: true,
    icon: "/lovable-uploads/5900fcc5-6ba3-4c38-b332-0ecaa0d50fb3.png"
  },
  {
    feature: "Integração com Kajabi",
    otherPrice: "R$300 mensal",
    included: true,
    icon: "/lovable-uploads/40d8c3e1-9742-414c-8987-c45b1755a856.png"
  },
  {
    feature: "Integração com Webflow",
    otherPrice: "R$250 mensal",
    included: true,
    icon: "/lovable-uploads/544a7401-0ee0-430f-aee7-ac9b41825e72.png"
  }
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
