import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";

interface Feature {
  feature: string;
  otherPrice: string;
  included: boolean;
  icons: string[];
}

const features: Feature[] = [
  {
    feature: "Funis de Vendas",
    otherPrice: "R$500/mês",
    included: true,
    icons: ["/feature-icons/funnel.png"],
  },
  {
    feature: "Páginas de Vendas",
    otherPrice: "R$400/mês",
    included: true,
    icons: ["/feature-icons/sales.png"],
  },
  {
    feature: "Email Marketing",
    otherPrice: "R$300/mês",
    included: true,
    icons: ["/feature-icons/email.png"],
  },
  {
    feature: "Automações",
    otherPrice: "R$400/mês",
    included: true,
    icons: ["/feature-icons/automation.png"],
  },
  {
    feature: "CRM",
    otherPrice: "R$300/mês",
    included: true,
    icons: ["/feature-icons/crm.png"],
  },
  {
    feature: "Checkout",
    otherPrice: "R$300/mês",
    included: true,
    icons: ["/feature-icons/checkout.png"],
  },
  {
    feature: "Área de Membros",
    otherPrice: "R$300/mês",
    included: true,
    icons: ["/feature-icons/members.png"],
  },
];

const bonusContent = [
  {
    week: "Semana 1",
    title: "Fundamentos",
    topics: [
      "Lance seu funil principal",
      "Masterize a Funil.ai",
      "O ecossistema do funil de 7 dígitos",
      "Lance seu funil homepage",
      "Construa autoridade e credibilidade em seu nicho",
      "A máquina de \"leads infinitos\"",
      "A estratégia de isca",
      "Planejando a sua isca",
      "Crie o formulário de captura",
      "Configure a automação de entrega"
    ]
  },
  {
    week: "Semana 2",
    title: "Funil de Isca",
    topics: [
      "A máquina de \"leads infinitos\"",
      "A estratégia de isca",
      "Planejando a sua isca",
      "Crie o formulário de captura",
      "Configure a automação de entrega"
    ]
  },
  {
    week: "Semana 3",
    title: "Funil de Vendas",
    topics: [
      "O funil de \"vendas automáticas\"",
      "Aprenda a criar ofertas irresistíveis de alta conversão",
      "Desenhe seu infoproduto",
      "Crie seu funil de vendas automáticas",
      "Coloque o seu produto e formulário de compra no automático"
    ]
  },
  {
    week: "Semana 4",
    title: "Funil de sessão estratégica",
    topics: [
      "Sessões leads qualificados",
      "Configure o seu pipeline e CRM",
      "Crie seu calendário e defina a disponibilidade",
      "Lance seu funil de agendamento",
      "Inicie as sessões estratégicas e escale"
    ]
  }
];

export const ComparisonTable = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Preços</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Compare os planos
          </p>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <Card className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10">
            <div className="flex items-center justify-between gap-x-4">
              <h3 className="text-lg font-semibold leading-8 text-white">
                Outras plataformas
              </h3>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-300">
              Preço médio cobrado por outras plataformas para as mesmas funcionalidades
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-white">R$2500</span>
              <span className="text-sm font-semibold leading-6 text-gray-300">/mês</span>
            </p>
          </Card>

          <Card className="ring-2 ring-primary rounded-3xl p-8 xl:p-10">
            <div className="flex items-center justify-between gap-x-4">
              <h3 className="text-lg font-semibold leading-8 text-white">
                Black Funnels
              </h3>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-300">
              Tudo que você precisa em um só lugar por um preço justo
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-white">R$297</span>
              <span className="text-sm font-semibold leading-6 text-gray-300">/mês</span>
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
                    <div className="flex gap-1">
                      {feature.icons.map((icon, iconIndex) => (
                        <img key={iconIndex} src={icon} alt="" className="w-6 h-6" />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-gray-300">{feature.otherPrice}</p>
                </div>
                <div className="flex items-center">
                  {feature.included ? (
                    <Check className="text-primary h-5 w-5" />
                  ) : (
                    <X className="text-gray-500 h-5 w-5" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#222222] rounded-3xl p-12">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-white mb-4">Bônus para todos assinantes</h3>
            <h4 className="text-4xl font-bold text-primary">Seu negócio online em 4 semanas</h4>
          </div>
          <div className="grid grid-cols-1 gap-12">
            {bonusContent.map((week, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-full md:w-1/4">
                  <h5 className="text-primary text-3xl font-bold mb-2">{week.week}</h5>
                  <p className="text-white text-2xl font-semibold">{week.title}</p>
                </div>
                {week.topics.length > 0 && (
                  <Card className="w-full md:w-3/4 bg-[#333333] border-none shadow-xl">
                    <CardContent className="p-8">
                      <ul className="space-y-4">
                        {week.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="text-white text-base flex items-start gap-3">
                            <Check className="text-primary h-5 w-5 mt-1 flex-shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
