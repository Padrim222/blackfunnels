import { TrialButton } from "@/components/TrialButton";
import { ArrowUpRight, Users, Target, Clock } from "lucide-react";

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
      role: "Curso Online"
    },
    {
      quote: "Em apenas 3 meses, dobramos nossa base de clientes e reduzimos custos operacionais em 70%.",
      author: "Agência de Marketing",
      role: "Serviços Digitais"
    },
    {
      quote: "A melhor decisão que tomei foi migrar todo meu negócio para a funil.ai. O suporte é excepcional!",
      author: "Coach de Negócios",
      role: "Mentoria Online"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-black/30 p-6 rounded-lg border border-gray-800 relative"
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-2xl text-white">"</span>
              </div>
              <p className="text-gray-400 mb-4 mt-4">{testimonial.quote}</p>
              <div className="border-t border-gray-800 pt-4">
                <p className="text-white font-semibold">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};