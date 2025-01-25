import { TrialButton } from "@/components/TrialButton";
import { ArrowUpRight, Users, Target, Clock, Quote } from "lucide-react";

export const Results = () => {
  const stats = [
    {
      value: "+540%",
      label: "Aumento em vendas",
      description: "Média de crescimento dos nossos clientes",
      icon: ArrowUpRight
    },
    {
      value: "-85%",
      label: "Redução de custos",
      description: "Economia com ferramentas separadas",
      icon: Target
    },
    {
      value: "+112%",
      label: "Mais leads qualificados",
      description: "Aumento na qualidade dos leads",
      icon: Users
    }
  ];

  const testimonials = [
    {
      quote: "A funil.ai revolucionou meu negócio digital. Consegui automatizar processos que antes tomavam horas do meu dia.",
      author: "Empreendedor Digital",
      role: "Curso Online",
      highlight: true
    },
    {
      quote: "A BlackFunnels é Muuuito Diferenciada. eu cheguei a pagar Rateio pra ter várias ferramentas kkk , hoje eu posso usar tudo na palma da mão em 1 só. salvaram demais!",
      author: "Fabricio Jurik",
      role: "CEO Athena solutions e CTO Hunter Group",
      highlight: true
    },
    {
      quote: "297 TÁ BARATO, Eu tinha que abrir várias abas no meu navegador pra poder monitorar cada etapa do meu funil e garantir o ROI. fora os clientes de tráfego que hoje usam a plataforma também e assinam tudo por aqui, Top demais!",
      author: "Diogo Kaleo",
      role: "Agência 7F",
      highlight: true
    },
    {
      quote: "A melhor decisão foi migrar todo meu negócio para a Black funnels. O suporte é excepcional!, aposentei até a kiwify e suas taxas absurdas",
      author: "Henrique Pinheiro",
      role: "Mentoria Online",
      highlight: true
    },
    {
      quote: "Nunca vi algo tão completo quanto, simplesmente revolucionários.",
      author: "Pablo Jordan",
      role: "Igaming expert",
      highlight: true
    },
    {
      quote: "Comecei meu lançamento de OB usando só a plataforma, de lá pra cá foram mais de 150k faturados em 42 dias, quero plaquinha hein kkkkkk!!.",
      author: "Hector Conde",
      role: "Curso Online / Opções Binárias",
      highlight: true
    },
    {
      quote: "Se todos os sayajins fizessem uma fusão seria essa plataforma, car***o, eu tô impressionado com quão completo está a ferramenta",
      author: "Jaime Castro",
      role: "Expert de Lançamentos",
      highlight: true
    }
  ];

  return (
    <div className="bg-background py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Resultados Comprovados
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Veja o que nossos clientes estão conquistando com a plataforma
          </p>
          <TrialButton />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-black/50 p-8 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-5xl font-bold text-primary">{stat.value}</p>
                <stat.icon className="h-8 w-8 text-primary opacity-80" />
              </div>
              <p className="text-xl text-white mb-2">{stat.label}</p>
              <p className="text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-black/30 p-8 rounded-lg border ${
                testimonial.highlight 
                  ? 'border-primary/50 shadow-lg shadow-primary/10' 
                  : 'border-gray-800'
              } relative hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-white" />
              </div>
              <p className="text-gray-300 mb-6 mt-4 text-lg leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-800 pt-4 mt-4">
                <p className="text-white font-semibold text-lg">{testimonial.author}</p>
                <p className="text-primary text-sm mt-1">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};