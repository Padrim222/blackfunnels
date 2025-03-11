
import { Check, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const weeks = [
  {
    week: "Semana 1",
    title: "Lance seu funil principal",
    subtitle: "Fundamentos",
    items: [
      "Masterize a Blackfunnels",
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
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-background to-background z-0 opacity-80"></div>
      
      {/* Neon grid pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(213, 70, 239, 0.1) 1px, transparent 1px), 
                           linear-gradient(to bottom, rgba(213, 70, 239, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Neon accents */}
      <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground animate-fade-in relative inline-block">
          Seu negócio online em 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary ml-2">4 semanas</span>
          <Sparkles className="absolute -top-8 -right-8 w-12 h-12 text-secondary/50 animate-pulse hidden md:block" />
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {weeks.map((week, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-black/90 to-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary group-hover:animate-pulse">
                    {week.week}
                  </span>
                  <span className="text-lg text-muted-foreground px-3 py-1 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                    {week.subtitle}
                  </span>
                </div>
                <CardTitle className="text-2xl text-foreground group-hover:text-white transition-colors duration-300">
                  {week.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {week.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex} 
                      className="flex items-center gap-2 text-muted-foreground group-hover:text-gray-300 transition-all duration-300 p-2 hover:bg-primary/5 rounded-md"
                      style={{ animationDelay: `${itemIndex * 0.1 + 0.5}s` }}
                    >
                      <div className="p-1 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300">
                        <Check className="h-4 w-4 flex-shrink-0 text-primary group-hover:text-secondary transition-colors duration-300" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Subtle bottom glow on hover */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
