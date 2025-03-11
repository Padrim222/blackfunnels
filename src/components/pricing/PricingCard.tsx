
import { Check, Sparkles, Zap } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";

interface PricingPlan {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  originalPrice: string;
  period: string;
  savings: string;
  highlight: string;
  checkoutUrl: string;
  features: string[];
  additionalFeatures: string[];
  color: string;
  isAvailable: boolean;
}

interface PricingCardProps {
  plan: PricingPlan;
  isAnnual: boolean;
}

export const PricingCard = ({ plan, isAnnual }: PricingCardProps) => {
  return (
    <Card
      className={`p-6 rounded-lg border-2 ${plan.color} group hover:border-primary/70 hover:scale-105 transition-all duration-500 relative bg-gradient-to-b from-card to-black/80 backdrop-blur-sm shadow-lg ${!plan.isAvailable ? 'opacity-50' : ''}`}
    >
      {/* Dynamic corner glow effect */}
      <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-primary/40 to-transparent rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <Badge variant="outline" className="mb-2 bg-black/50 backdrop-blur-sm border-primary/50 text-primary group-hover:bg-primary/20 transition-all duration-300">
        {plan.highlight}
      </Badge>
      
      <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
        {plan.name}
        {plan.name.includes("Pro") && (
          <Sparkles className="w-5 h-5 ml-2 text-secondary animate-pulse" />
        )}
      </h3>
      
      {plan.originalPrice && (
        <div className="text-gray-400 mb-2 line-through relative">
          {plan.originalPrice}
          <span className="absolute top-1/2 left-0 w-full h-0.5 bg-primary/50 transform -translate-y-1/2 rotate-3"></span>
        </div>
      )}
      
      <div className="flex items-baseline mb-2 group-hover:transform group-hover:scale-110 transition-all duration-300 mt-4">
        <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
          {isAnnual ? plan.annualPrice : plan.monthlyPrice}
        </span>
        <span className="text-gray-400 ml-2">{plan.period}</span>
      </div>
      
      {plan.savings && (
        <p className="text-sm text-gray-400 mb-6 bg-primary/10 rounded-md p-1 inline-block">
          <Zap className="h-3 w-3 inline mr-1 text-primary" />
          {plan.savings}
        </p>
      )}
      
      {plan.isAvailable ? (
        <Button 
          className="w-full mb-6 bg-gradient-to-r from-primary to-primary-dark hover:to-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300"
          onClick={() => window.location.href = plan.checkoutUrl}
        >
          <span className="group-hover:scale-105 transition-transform duration-300 flex items-center">
            Iniciar 3 dias grátis
            <Zap className="ml-2 h-4 w-4 group-hover:animate-pulse" />
          </span>
        </Button>
      ) : (
        <Button 
          className="w-full mb-6 bg-gray-600 cursor-not-allowed"
          disabled
        >
          Em breve
        </Button>
      )}
      
      <div className="space-y-4 relative">
        {/* Subtle divider line with glow */}
        <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        
        {plan.features.map((feature, featureIndex) => (
          <div 
            key={featureIndex} 
            className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
            style={{ animationDelay: `${featureIndex * 0.1}s` }}
          >
            <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 group-hover:text-secondary transition-colors duration-300" />
            <span>{feature}</span>
          </div>
        ))}
        
        <div className="pt-4 border-t border-gray-800 group-hover:border-gray-700 transition-all duration-300">
          {plan.additionalFeatures.map((feature, featureIndex) => (
            <div 
              key={featureIndex} 
              className="py-2 text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-800 group-hover:border-gray-700 transition-all duration-300">
        {plan.isAvailable ? (
          <Button 
            className="w-full bg-gradient-to-r from-primary to-primary-dark hover:to-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300"
            onClick={() => window.location.href = plan.checkoutUrl}
          >
            <span className="group-hover:scale-105 transition-transform duration-300 flex items-center">
              Iniciar 3 dias grátis
              <Zap className="ml-2 h-4 w-4 group-hover:animate-pulse" />
            </span>
          </Button>
        ) : (
          <Button 
            className="w-full bg-gray-600 cursor-not-allowed"
            disabled
          >
            Em breve
          </Button>
        )}
        <div className="mt-4 text-center">
          <Badge variant="outline" className="bg-black/50 border-primary/30 group-hover:border-primary/50 transition-all duration-300">
            <span className="flex items-center">
              <Sparkles className="w-3 h-3 mr-1 text-primary" /> 
              Vagas Limitadas
            </span>
          </Badge>
          <p className="text-sm text-gray-400 mt-2 group-hover:text-gray-300 transition-all duration-300">
            Apenas para os primeiros 1000 usuários
          </p>
        </div>
      </div>
    </Card>
  );
};
