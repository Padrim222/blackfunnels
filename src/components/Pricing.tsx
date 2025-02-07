import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Switch } from "./ui/switch";
import { useState } from "react";

export const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Lite",
      monthlyPrice: "R$297",
      annualPrice: "R$247",
      originalPrice: isAnnual ? "R$297,00" : "",
      period: "/mês",
      savings: isAnnual ? "Cobrança anual (Economize R$ 600/ano)" : "",
      highlight: "Ideal para começar",
      checkoutUrl: isAnnual ? "https://buy.stripe.com/5kA4j54zMaZ70j65kG" : "https://buy.stripe.com/6oE7vh5DQ2sB1naeVe",
      features: [
        "Websites Ilimitados",
        "Funis ilimitados",
        "Domínios Ilimitados",
        "Visitas ao site ilimitadas",
        "10.000 contatos",
        "3 usuários",
        "Campanhas ilimitadas",
        "Sequência de e-mails ilimitadas",
        "Automações Ilimitadas",
        "Formulários Ilimitados",
        "Pesquisas Ilimitadas",
        "Calendários Ilimitados",
        "Área de membros ilimitadas",
        "Cursos Ilimitados",
        "Comunidades Ilimitadas",
        "Pipelines Ilimitados",
        "CRM Ilimitado",
        "Analytics Ilimitado",
        "Templates Ilimitados",
        "Teste A/B",
        "Integrações",
        "API"
      ],
      additionalFeatures: [
        "+ $0.0158 por SMS",
        "+ $0.028/min Ligação",
        "+ $0.0014 por email",
        "+ $29 Whatsapp API Oficial",
        "+ $39 Whatsapp API não oficial (até 5 números)",
        "$1 de Crédito",
        "BootCamp Funil 6-7 dígitos",
        "BootCamp SMMA 100k",
        "Comunidade",
        "Onboarding Básico"
      ],
      color: "border-gray-600",
      isAvailable: true
    },
    {
      name: "PRO",
      monthlyPrice: "R$497",
      annualPrice: "R$421",
      originalPrice: isAnnual ? "R$497,00" : "",
      period: "/mês",
      savings: isAnnual ? "Cobrança anual (Economize R$ 912/ano)" : "",
      highlight: "Em Breve",
      checkoutUrl: "#",
      features: [
        "Websites Ilimitados",
        "Funis ilimitados",
        "Domínios Ilimitados",
        "Visitas ao site ilimitadas",
        "25.000 contatos",
        "10 usuários",
        "Campanhas ilimitadas",
        "Sequência de e-mails ilimitadas",
        "Automações Ilimitadas",
        "Formulários Ilimitados",
        "Pesquisas Ilimitadas",
        "Calendários Ilimitados",
        "Área de membros ilimitadas",
        "Cursos Ilimitados",
        "Comunidades Ilimitadas",
        "Pipelines Ilimitados",
        "CRM Ilimitado",
        "Analytics Ilimitado",
        "Templates Ilimitados",
        "Teste A/B Premium",
        "Integrações Avançadas",
        "API com Suporte Prioritário"
      ],
      additionalFeatures: [
        "+ $0.0134 por SMS",
        "+ $0.0238/min Ligação",
        "+ $0.0011 por email",
        "+ $29 Whatsapp API Oficial",
        "+ $39 Whatsapp API não oficial (até 5 números)",
        "$5 de Crédito",
        "BootCamp Funil 6-7 dígitos",
        "BootCamp SMMA 100k",
        "Comunidade VIP",
        "Onboarding Personalizado"
      ],
      color: "border-primary",
      isAvailable: false
    },
    {
      name: "MASTER",
      monthlyPrice: "R$697",
      annualPrice: "R$542",
      originalPrice: isAnnual ? "R$997,00" : "",
      period: "/mês",
      savings: isAnnual ? "Cobrança anual (Economize R$ 1.860/ano)" : "Economize R$ 300/mês",
      highlight: "Em Breve",
      checkoutUrl: "#",
      features: [
        "Websites Ilimitados",
        "Funis ilimitados",
        "Domínios Ilimitados",
        "Visitas ao site ilimitadas",
        "200.000 contatos",
        "50 usuários",
        "Campanhas ilimitadas",
        "Sequência de e-mails ilimitadas",
        "Automações Ilimitadas",
        "Formulários Ilimitados",
        "Pesquisas Ilimitadas",
        "Calendários Ilimitados",
        "Área de membros ilimitadas",
        "Cursos Ilimitados",
        "Comunidades Ilimitadas",
        "Pipelines Ilimitados",
        "CRM Ilimitado",
        "Analytics Ilimitado",
        "Templates Ilimitados",
        "Teste A/B Enterprise",
        "Integrações Enterprise",
        "API Dedicada"
      ],
      additionalFeatures: [
        "+ $0.0119 por SMS",
        "+ $0.021/min Ligação",
        "+ $0.001 por email",
        "+ $29 Whatsapp API Oficial",
        "+ $39 Whatsapp API não oficial (até 5 números)",
        "$10 de Crédito",
        "BootCamp Funil 6-7 dígitos",
        "BootCamp SMMA 100k",
        "Comunidade Elite",
        "Onboarding VIP com Consultor Dedicado"
      ],
      color: "border-secondary",
      isAvailable: false
    }
  ];

  return (
    <div id="pricing" className="bg-background py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-black px-4 py-2 rounded-full mb-4">
            <p className="text-white font-semibold">Oferta Limitada</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Garanta 14 dias grátis
          </h2>
          <p className="text-xl text-primary mb-8">
            Economize mais de R$6.500,00/mês
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-lg ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Mensal</span>
            <Switch
              checked={isAnnual}
              onCheckedChange={(checked) => setIsAnnual(checked)}
              className="data-[state=checked]:bg-primary"
            />
            <span className={`text-lg ${isAnnual ? 'text-white' : 'text-gray-400'}`}>Anual</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
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
                  Iniciar teste grátis
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
                    Iniciar teste grátis
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
          ))}
        </div>
      </div>
    </div>
  );
};
