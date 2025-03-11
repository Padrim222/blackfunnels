
import { Check, Sparkles, Zap } from "lucide-react";
import { TrialButton } from "./TrialButton";

export const Integration = () => {
  const integrations = [
    "Hotmart",
    "Monetizze",
    "Eduzz",
    "PerfectPay",
    "Stripe",
    "PayPal",
    "Mercado Pago",
    "PagSeguro"
  ];

  return (
    <div id="integration" className="bg-black py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated grid */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 87, 10, 0.1) 1px, transparent 1px), 
                              linear-gradient(to bottom, rgba(255, 87, 10, 0.1) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
        
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block">
            Integre com suas ferramentas favoritas
            <Sparkles className="absolute -top-6 -right-6 w-8 h-8 text-primary/70 animate-pulse" />
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Conecte-se com as principais plataformas do mercado
          </p>
          <div className="transform hover:scale-105 transition-all duration-300">
            <TrialButton />
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 perspective-1000">
          {integrations.map((integration, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-2 text-white p-4 bg-gradient-to-br from-black/90 to-card/50 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/5 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300">
                <Check className="h-5 w-5 text-primary group-hover:text-secondary transition-colors duration-300" />
              </div>
              <span className="group-hover:text-primary transition-colors duration-300">{integration}</span>
              
              {/* Subtle spark icon on hover */}
              <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Zap className="h-3 w-3 text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
