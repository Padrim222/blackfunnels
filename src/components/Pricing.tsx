import { Check } from "lucide-react";
import { Button } from "./ui/button";

export const Pricing = () => {
  const plans = [
    {
      name: "Lite",
      price: "R$297",
      period: "/mês",
      features: [
        "Websites ilimitados",
        "Funis ilimitados",
        "Domínios ilimitados",
        "10.000 contatos",
        "3 usuários",
        "Campanhas ilimitadas",
        "Templates ilimitados",
        "API"
      ]
    },
    {
      name: "PRO",
      price: "R$497",
      period: "/mês",
      features: [
        "Websites ilimitados",
        "Funis ilimitados",
        "Domínios ilimitados",
        "25.000 contatos",
        "10 usuários",
        "Campanhas ilimitadas",
        "Templates ilimitados",
        "API"
      ]
    },
    {
      name: "MASTER",
      price: "R$997",
      period: "/mês",
      features: [
        "Websites ilimitados",
        "Funis ilimitados",
        "Domínios ilimitados",
        "200.000 contatos",
        "50 usuários",
        "Campanhas ilimitadas",
        "Templates ilimitados",
        "API"
      ]
    }
  ];

  return (
    <div className="bg-background py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-black px-4 py-2 rounded-full mb-4">
            <p className="text-white font-semibold">Oferta Limitada</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Garanta 14 dias grátis
          </h2>
          <p className="text-xl text-primary">
            Economize mais de R$6.500,00/mês
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg border ${
                plan.name === "PRO"
                  ? "border-primary bg-black/50"
                  : "border-gray-800"
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400 ml-2">{plan.period}</span>
              </div>
              <Button className="w-full mb-6">Iniciar teste grátis</Button>
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-400">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    {feature}
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