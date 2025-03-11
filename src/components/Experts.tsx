
import { TrialButton } from "./TrialButton";
import { Sparkles } from "lucide-react";

export const Experts = () => {
  const experts = [
    {
      name: "Pablo Marçal",
      title: "Funil Perpétuo",
      description: "Com certeza o maior Gênio do Marketing Digital no Brasil empresário serial e autor de inúmeras empresas de sucesso.",
      image: "/lovable-uploads/c0088bce-d8ee-4212-bbaa-d2f70ca902fd.png"
    },
    {
      name: "Thiago Finch",
      title: "Funis de Alta Conversão",
      description: "Especialista em funis de alta conversão e lançamentos digitais, com mais de R$50 milhões em vendas através de seus funis otimizados.",
      image: "/lovable-uploads/4adf0057-db06-403d-bf21-3ea0a58fe7d7.png"
    },
    {
      name: "Pedro Sobral",
      title: "Funis de Desafio",
      description: "Um dos maiores lançadores com seus funis de desafio e conteúdo gratuito, garantindo uma base de mais de 50 mil alunos",
      image: "/lovable-uploads/609d6f5c-f26f-4d65-b41e-e39a8525ef93.png"
    }
  ];

  return (
    <div id="experts" className="bg-background py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-background z-0 opacity-70"></div>
      
      {/* Wave pattern background */}
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255, 87, 10, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(213, 70, 239, 0.1) 0%, transparent 50%)
          `,
        }}
      />
      
      {/* Animated glow spots */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.2s" }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block">
            Funis prontos para você utilizar
            <Sparkles className="absolute -top-6 -right-6 w-8 h-8 text-primary/70 animate-pulse" />
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Modelamos as estratégias dos maiores do Brasil para você aplicar em seu negócio
          </p>
          <div className="transform hover:scale-105 transition-all duration-300">
            <TrialButton />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-black/90 to-card/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 group animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Halo effect behind image */}
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-28 h-28 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              
              <div className="relative">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-32 h-32 mx-auto rounded-full mb-6 object-cover border-2 border-transparent group-hover:border-primary/50 transition-all duration-300 z-10 relative"
                />
                
                {/* Animated ring on hover */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full border border-primary/0 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                {expert.name}
              </h3>
              <p className="text-primary mb-4 bg-primary/10 px-2 py-1 rounded-md inline-block">
                {expert.title}
              </p>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {expert.description}
              </p>
              
              {/* Bottom glow line on hover */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
