
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
    <div className="bg-background py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-background z-0 opacity-70"></div>
      
      {/* Animated grid */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 87, 10, 0.4) 1px, transparent 0)`,
          backgroundSize: '30px 30px',
        }}
      />
      
      {/* Neon accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
      
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/5 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block">
            Resultados Comprovados
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ping"></span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Veja o que nossos clientes estão conquistando com a plataforma
          </p>
          <div className="transform hover:scale-105 transition-all duration-300">
            <TrialButton />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-black/80 to-card/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark group-hover:animate-pulse">
                  {stat.value}
                </p>
                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300">
                  <stat.icon className="h-8 w-8 text-primary group-hover:text-secondary transition-colors duration-300" />
                </div>
              </div>
              <p className="text-xl text-white mb-2 group-hover:text-primary transition-colors duration-300">{stat.label}</p>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br from-black/80 to-card/30 backdrop-blur-sm p-8 rounded-lg border ${
                testimonial.highlight 
                  ? 'border-primary/30 shadow-lg shadow-primary/10' 
                  : 'border-gray-800'
              } relative hover:scale-[1.02] transition-all duration-500 group animate-fade-in`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center group-hover:animate-pulse">
                <Quote className="w-5 h-5 text-white" />
              </div>
              
              {/* Subtle corner glow */}
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
              
              <p className="text-gray-300 mb-6 mt-4 text-lg leading-relaxed italic group-hover:text-white transition-colors duration-300">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-800 pt-4 mt-4 relative">
                {/* Glow line effect */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <p className="text-white font-semibold text-lg group-hover:text-primary transition-colors duration-300">{testimonial.author}</p>
                <p className="text-primary text-sm mt-1">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
