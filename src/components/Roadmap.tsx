import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const weeks = [
  {
    week: "Semana 1",
    title: "Lance seu funil principal",
    subtitle: "Fundamentos",
    items: [
      "Masterize a Funilai",
      "O ecossistema do funil de 7 dígitos",
      "Lance seu funil homepage",
      "Construa autoridade e credibilidade em seu nicho"
    ]
  },
  {
    week: "Semana 2",
    title: 'A máquina de "leads infinitos"',
    subtitle: "Funil de Isca",
    items: [
      "A estratégia de isca",
      "Planejando a sua isca",
      "Crie o formulário de captura",
      "Configure a automação de entrega"
    ]
  },
  {
    week: "Semana 3",
    title: 'O funil de "vendas automáticas"',
    subtitle: "Funil de Vendas",
    items: [
      "Aprenda a criar ofertas irresistíveis de alta conversão",
      "Desenhe seu infoproduto",
      "Crie seu funil de vendas automáticas",
      "Coloque o seu produto e formulário de compra no automático"
    ]
  },
  {
    week: "Semana 4",
    title: "Sessões leads qualificados",
    subtitle: "Funil de sessão estratégica",
    items: [
      "Configure o seu pipeline e CRM",
      "Crie seu calendário e defina a disponibilidade",
      "Lance seu funil de agendamento",
      "Inicie as sessões estratégicas e escale"
    ]
  }
];

export const Roadmap = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">
          Seu negócio online em 4 semanas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {weeks.map((week, index) => (
            <Card key={index} className="bg-pink-500 text-white border-none">
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xl font-medium">{week.week}</span>
                  <span className="text-lg">{week.subtitle}</span>
                </div>
                <CardTitle className="text-2xl">{week.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {week.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2">
                      <Check className="h-5 w-5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};