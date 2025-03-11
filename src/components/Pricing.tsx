
import { useState } from "react";
import { PricingCard } from "./pricing/PricingCard";
import { PricingToggle } from "./pricing/PricingToggle";
import { pricingPlans } from "../data/pricingPlans";
import { Sparkles } from "lucide-react";

export const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  // Transform the pricing plans data with the current isAnnual state
  const processedPlans = pricingPlans.map(plan => ({
    ...plan,
    originalPrice: plan.originalPrice(isAnnual),
    savings: plan.savings(isAnnual),
    checkoutUrl: plan.checkoutUrl(isAnnual),
  }));

  return (
    <div id="pricing" className="bg-background py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-background z-0 opacity-80"></div>
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-1 h-40 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-1/3 w-1 h-60 bg-secondary/30 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute bottom-40 left-1/3 w-1 h-20 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-10 right-1/4 w-1 h-30 bg-secondary/30 rounded-full animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-black px-4 py-2 rounded-full mb-4 border border-primary/50 shadow-lg shadow-primary/20 transform hover:scale-105 transition-all duration-300">
            <p className="text-white font-semibold flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              Oferta Limitada
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative">
            Garanta <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-pulse">3 dias grátis</span>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ping"></span>
          </h2>
          <p className="text-xl text-primary mb-8 animate-slide-in" style={{ animationDelay: "0.3s" }}>
            Economize mais de R$6.500,00/mês
          </p>
          <PricingToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processedPlans.map((plan, index) => (
            <div 
              key={index} 
              className="animate-fade-in transform hover:translate-y-[-10px] transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <PricingCard plan={plan} isAnnual={isAnnual} />
            </div>
          ))}
        </div>
        
        {/* SMS, Call, and Email pricing in BRL */}
        <div className="mt-16 pt-10 border-t border-primary/20 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <div className="bg-background/50 backdrop-blur-sm border border-primary/30 rounded-xl p-6 shadow-lg shadow-primary/10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Preços Adicionais <span className="text-primary">(R$)</span></h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card p-4 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:scale-105">
                <h4 className="text-xl font-semibold text-white mb-3">Mensagens e Chamadas</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between text-foreground">
                    <span>Realizar Chamadas:</span>
                    <span className="text-primary">R$0,08/min</span>
                  </li>
                  <li className="flex justify-between text-foreground">
                    <span>Receber Chamadas:</span>
                    <span className="text-primary">R$0,05/min</span>
                  </li>
                  <li className="flex justify-between text-foreground">
                    <span>Mensagens de Texto:</span>
                    <span className="text-primary">R$0,05/segmento</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card p-4 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:scale-105">
                <h4 className="text-xl font-semibold text-white mb-3">E-mails</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between text-foreground">
                    <span>Custo por e-mail:</span>
                    <span className="text-primary">R$0,004/e-mail</span>
                  </li>
                  <li className="flex justify-between text-foreground">
                    <span>Cobrado ao cliente:</span>
                    <span className="text-primary">R$0,004/e-mail</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card p-4 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:scale-105">
                <h4 className="text-xl font-semibold text-white mb-3">Economia Garantida</h4>
                <p className="text-foreground mb-2">Economize até 40% em comparação com outras plataformas.</p>
                <div className="text-center mt-4">
                  <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Melhor custo-benefício do mercado
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
