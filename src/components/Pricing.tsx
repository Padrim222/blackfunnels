
import { useState } from "react";
import { PricingCard } from "./pricing/PricingCard";
import { PricingToggle } from "./pricing/PricingToggle";
import { pricingPlans } from "../data/pricingPlans";

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
    <div id="pricing" className="bg-background py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-black px-4 py-2 rounded-full mb-4">
            <p className="text-white font-semibold">Oferta Limitada</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Garanta 3 dias grátis
          </h2>
          <p className="text-xl text-primary mb-8">
            Economize mais de R$6.500,00/mês
          </p>
          <PricingToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processedPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} isAnnual={isAnnual} />
          ))}
        </div>
      </div>
    </div>
  );
};
