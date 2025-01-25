import { Check } from "lucide-react";

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
    <div id="integration" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Integre com suas ferramentas favoritas
          </h2>
          <p className="text-xl text-gray-400">
            Conecte-se com as principais plataformas do mercado
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <div key={index} className="flex items-center space-x-2 text-white">
              <Check className="h-5 w-5 text-primary" />
              <span>{integration}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
