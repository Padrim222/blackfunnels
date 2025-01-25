import { Mail, Users, BarChart, Layout, Bot, Zap, Globe, Filter, MessageSquare, Network, PenTool, LineChart } from "lucide-react";
import { TrialButton } from "./TrialButton";

const features = [
  {
    icon: Globe,
    title: "Websites",
    description: "Crie seu website com design impecável e alta performance com o editor de sites funil.ai",
    benefits: ["SEO otimizado", "Design responsivo", "Alta conversão"]
  },
  {
    icon: Filter,
    title: "Funis",
    description: "Converta seus visitantes em clientes com sua oferta, upsell, downsell e automações",
    benefits: ["Páginas otimizadas", "Checkout integrado", "Split tests"]
  },
  {
    icon: Mail,
    title: "E-mail marketing",
    description: "Fale com a sua audiência em cada etapa do funil e jornada de compra com eficiência e simplicidade",
    benefits: ["Automações avançadas", "Segmentação inteligente", "Templates prontos"]
  },
  {
    icon: Users,
    title: "Área de Membros",
    description: "Construa a sua área de membros e venda seu curso online em seu domínio e liberte-se das altas taxas",
    benefits: ["Proteção de conteúdo", "Gamificação", "Certificados"]
  },
  {
    icon: Bot,
    title: "I.A",
    description: "Ganhe força e eficiência utilizando a inteligência artificial integrada ao seu negócio",
    benefits: ["Copywriting", "Análise de dados", "Atendimento 24/7"]
  },
  {
    icon: Zap,
    title: "Automações",
    description: "Crie automações poderosas em seu marketing em um só lugar",
    benefits: ["Fluxos visuais", "Triggers avançados", "Integrações"]
  },
  {
    icon: PenTool,
    title: "Blogs",
    description: "Escreva e publique seu blog para rankear no Google e gere tráfego grátis",
    benefits: ["Editor otimizado", "SEO integrado", "Analytics"]
  },
  {
    icon: Network,
    title: "Comunidade",
    description: "Sua comunidade com sua marca e suas regras para criar sua tribo e fazer vendas",
    benefits: ["Fóruns", "Grupos privados", "Eventos ao vivo"]
  },
  {
    icon: BarChart,
    title: "CRM",
    description: "Gerencie seus leads em um pipeline integrado a todo o seu negócio e escale seu negócio com previsibilidade",
    benefits: ["Pipeline visual", "Automação de vendas", "Relatórios"]
  },
  {
    icon: MessageSquare,
    title: "Central de Conversas",
    description: "Todas as conversas com seus leads e clientes de diversas fontes em um só painel",
    benefits: ["Multi-canais", "Chatbot IA", "Templates"]
  },
  {
    icon: Layout,
    title: "Agendamentos",
    description: "Crie sua agenda e da sua equipe, defina a disponibilidade e feche mais negócios",
    benefits: ["Calendário integrado", "Lembretes", "Pagamentos"]
  },
  {
    icon: LineChart,
    title: "Analytics",
    description: "Tenha controle total de métricas em todo o seu negócio para escalar com clareza",
    benefits: ["Dashboards", "Relatórios", "Insights IA"]
  },
];

export const Features = () => {
  return (
    <div id="features" className="bg-background py-32 scroll-mt-20" role="region" aria-label="Funcionalidades">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            DIFERENTE DE TUDO O QUE VOCÊ JÁ VIU
          </h2>
          <p className="text-xl text-foreground mb-4">
            Nós te entregamos tudo o que você precisa para ter sucesso online
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Agora você precisa apenas de 1⚡️ ferramenta
          </p>
          <TrialButton />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-lg border border-muted hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in bg-black/20"
              style={{ animationDelay: `${index * 100}ms` }}
              role="article"
            >
              <feature.icon className="h-12 w-12 text-primary mb-6 transform transition-all duration-300 group-hover:scale-110" />
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-6">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};