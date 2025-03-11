
import { Check } from "lucide-react";
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
      className={`p-6 rounded-lg border-2 ${plan.color} hover:scale-105 transition-transform duration-300 ${!plan.isAvailable ? 'opacity-50' : ''}`}
    >
      <Badge variant="outline" className="mb-2">
        {plan.highlight}
      </Badge>
      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
      {plan.originalPrice && (
        <div className="text-gray-400 mb-2 line-through">
          {plan.originalPrice}
        </div>
      )}
      <div className="flex items-baseline mb-2">
        <span className="text-4xl font-bold text-white">
          {isAnnual ? plan.annualPrice : plan.monthlyPrice}
        </span>
        <span className="text-gray-400 ml-2">{plan.period}</span>
      </div>
      {plan.savings && (
        <p className="text-sm text-gray-400 mb-6">{plan.savings}</p>
      )}
      {plan.isAvailable ? (
        <Button 
          className="w-full mb-6 bg-primary hover:bg-primary/90"
          onClick={() => window.location.href = plan.checkoutUrl}
        >
          Iniciar 3 dias grátis
        </Button>
      ) : (
        <Button 
          className="w-full mb-6 bg-gray-600 cursor-not-allowed"
          disabled
        >
          Em breve
        </Button>
      )}
      
      <div className="space-y-4">
        {plan.features.map((feature, featureIndex) => (
          <div key={featureIndex} className="flex items-center text-gray-400">
            <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
        
        <div className="pt-4 border-t border-gray-800">
          {plan.additionalFeatures.map((feature, featureIndex) => (
            <div key={featureIndex} className="py-2 text-gray-400">
              {feature}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-800">
        {plan.isAvailable ? (
          <Button 
            className="w-full bg-primary hover:bg-primary/90"
            onClick={() => window.location.href = plan.checkoutUrl}
          >
            Iniciar 3 dias grátis
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
          <Badge variant="outline" className="bg-black/50">
            Vagas Limitadas
          </Badge>
          <p className="text-sm text-gray-400 mt-2">
            Apenas para os primeiros 1000 usuários
          </p>
        </div>
      </div>
    </Card>
  );
};
