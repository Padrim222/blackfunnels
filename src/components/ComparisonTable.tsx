import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface Feature {
  feature: string;
  otherPrice: string;
  included: boolean;
  platforms: {
    google: string;
    meta: string;
    other: string;
  };
}

const features: Feature[] = [
  {
    feature: "Discador e Rastreamento de chamada",
    otherPrice: "R$497/mês",
    included: true,
    platforms: {
      google: "/lovable-uploads/0b143d04-98f3-4c62-8013-66f6c252d073.png",
      meta: "/lovable-uploads/0a0e396e-8991-4fd5-993c-ed6f4028ed33.png",
      other: "/lovable-uploads/8c54e121-9825-4291-8e7e-70aecb35fde8.png"
    }
  },
  {
    feature: "Gerenciamento de reputação",
    otherPrice: "R$397/mês",
    included: true,
    platforms: {
      google: "/lovable-uploads/32fbcb8d-50d4-4d80-b90a-bef94b2748cf.png",
      meta: "/lovable-uploads/c2f85601-42cf-49d1-b43d-d9f9c2241007.png",
      other: "/lovable-uploads/fb2914d7-a3a6-4371-9f19-4fd2c2c16331.png"
    }
  },
  {
    feature: "Trackeamento Analytics",
    otherPrice: "R$297/mês",
    included: true,
    platforms: {
      google: "/lovable-uploads/6f9fb4e7-d037-4aff-a6fa-f67ef0819a9e.png",
      meta: "/lovable-uploads/6f9fb4e7-d037-4aff-a6fa-f67ef0819a9e.png",
      other: "/lovable-uploads/6f9fb4e7-d037-4aff-a6fa-f67ef0819a9e.png"
    }
  },
  {
    feature: "Comunidades e Forúns",
    otherPrice: "R$497/mês",
    included: true,
    platforms: {
      google: "/lovable-uploads/78ed40ad-d420-439c-a0c4-f9a046f23521.png",
      meta: "/lovable-uploads/76f17064-0dc6-4904-90ff-09efdf57e1da.png",
      other: ""
    }
  },
  {
    feature: "Reservas e agendamentos",
    otherPrice: "R$297/mês",
    included: true,
    platforms: {
      google: "/lovable-uploads/438fe618-00f5-4235-a314-21baeba03e43.png",
      meta: "/lovable-uploads/e26b3767-181c-4d8e-9561-5a4908a51a03.png",
      other: "/lovable-uploads/b625acfb-7a62-4d7c-8187-1acb598e0566.png"
    }
  },
  {
    feature: "Automações e fluxos",
    otherPrice: "R$497/mês",
    included: true,
    platforms: {
      google: "/lovable-uploads/d2bbf326-1e21-4814-be89-d623ab0b611f.png",
      meta: "/lovable-uploads/ac0fd19c-560d-48b6-8195-a71321752283.png",
      other: "/lovable-uploads/f9d67641-faea-43ef-a94c-a8cc62fada35.png"
    }
  },
  {
    feature: "CRM e Gerenciamento de Pipeline",
    otherPrice: "R$597/mês",
    included: true,
    platforms: {
      google: "/lovable-uploads/8fec9012-27fd-4e44-9e4b-6870a6200f47.png",
      meta: "/lovable-uploads/d8d937d5-79b9-434d-87a6-8e0a95eeda81.png",
      other: "/lovable-uploads/4c6433f9-41ef-4343-a990-916728a74afd.png"
    }
  },
  {
    feature: "Funil de vendas",
    otherPrice: "R$1.897/mês",
    included: true,
    platforms: {
      google: "/lovable-uploads/4ae5b29f-fa7f-47ed-af8d-4f8e03e14b5b.png",
      meta: "/lovable-uploads/d8e49752-9038-42e9-80cc-4be06d5be6bc.png",
      other: "/lovable-uploads/52d5abd3-2d1b-4319-b05f-c6a09bea82a2.png"
    }
  },
  {
    feature: "Construtor de website",
    otherPrice: "R$147/mês",
    included: true,
    platforms: {
      google: "/lovable-uploads/e165f7cf-05a5-45c6-8b3d-6b888c818fb2.png",
      meta: "/lovable-uploads/a954b90e-c5ca-461d-aa6d-70cba4061c92.png",
      other: "/lovable-uploads/31ec4b5a-64ec-4602-8a0d-1eb26d930c02.png"
    }
  },
  {
    feature: "Pesquisas e Formulários",
    otherPrice: "R$297/mês",
    included: true,
    platforms: {
      google: "/lovable-uploads/171732c3-663c-470c-91fa-026ddd6f08e5.png",
      meta: "/lovable-uploads/a40d996e-45e9-4f01-b16f-208cc6d5cc17.png",
      other: "/lovable-uploads/148530f5-f4e8-4873-8b10-4d68a0ae3509.png"
    }
  },
  {
    feature: "E-mail Marketing",
    otherPrice: "R$497/mês",
    included: true,
    platforms: {
      google: "/lovable-uploads/edea7a19-0215-45b8-a533-7b731c2448c4.png",
      meta: "/lovable-uploads/104d8fca-1f9d-466e-bf0e-b3a861849b9c.png",
      other: "/lovable-uploads/89e75e9c-851b-465f-8c73-66565e06dbcb.png"
    }
  },
  {
    feature: "Plataforma de cursos e produtos",
    otherPrice: "Taxas, transação e hospedagem",
    included: true,
    platforms: {
      google: "/lovable-uploads/ab44ce5e-5b7a-427a-9d7b-2ae29bdb4f16.png",
      meta: "/lovable-uploads/ede7b956-83af-4411-bc7f-21139aebeb1b.png",
      other: "/lovable-uploads/b4ef1a8e-bf2a-4fd3-86ce-da185163ac35.png"
    }
  }
];

export const ComparisonTable = () => {
  const navigate = useNavigate();

  const totalOtherPrice = features.reduce((acc, feature) => {
    const price = parseFloat(feature.otherPrice.replace('R$', '').replace('/mês', '').replace('.', '').replace(',', '.'));
    return acc + price;
  }, 0);

  return (
    <div className="py-24 sm:py-32 pattern-diagonal">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary animate-fade-in">
            SUBSTITUA TODAS AS SUAS FERRAMENTAS
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl animate-slide-in">
            Economize tempo e dinheiro cancelando todas as outras ferramentas
          </p>
        </div>

        <div className="mt-16 bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 animate-scale">
          <div className="grid grid-cols-4 gap-4 bg-black/60 p-6 border-b border-gray-800">
            <div className="text-xl font-semibold text-white">Ferramenta</div>
            <div className="text-xl font-semibold text-white text-center">Substitui</div>
            <div className="text-xl font-semibold text-white">Custo Atual</div>
            <div className="text-xl font-semibold text-white text-center">
              <img src="/lovable-uploads/a0e078b8-5770-4945-883e-76cee0cb39ca.png" alt="Black Funnels" className="h-8 ml-auto" />
            </div>
          </div>

          <div className="divide-y divide-gray-800/50">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="grid grid-cols-4 gap-4 items-center p-6 hover:bg-black/40 transition-colors"
              >
                <div className="text-lg font-medium text-white">
                  {feature.feature}
                </div>
                <div className="flex justify-center space-x-3">
                  <img 
                    src={feature.platforms.google} 
                    alt="Google" 
                    className="w-10 h-10 object-contain animate-float"
                  />
                  <img 
                    src={feature.platforms.meta} 
                    alt="Meta" 
                    className="w-10 h-10 object-contain animate-float" 
                    style={{ animationDelay: "0.2s" }}
                  />
                  <img 
                    src={feature.platforms.other} 
                    alt="Other Platform" 
                    className="w-10 h-10 object-contain animate-float" 
                    style={{ animationDelay: "0.4s" }}
                  />
                </div>
                <div className="text-lg text-gray-300">
                  {feature.otherPrice}
                </div>
                <div className="flex justify-center">
                  {feature.included && (
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                      <Check className="text-green-500 h-5 w-5" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <Card className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10 animate-fade-in">
            <div className="flex items-center justify-between gap-x-4">
              <h3 className="text-lg font-semibold leading-8 text-white">
                Outras Ferramentas
              </h3>
            </div>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-white">
                R${totalOtherPrice.toLocaleString('pt-BR')}
              </span>
              <span className="text-sm font-semibold leading-6 text-gray-300">/mensal</span>
            </p>
          </Card>

          <Card className="ring-2 ring-primary rounded-3xl p-8 xl:p-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center justify-between gap-x-4">
              <h3 className="text-lg font-semibold leading-8 text-white">
                Black Funnels
              </h3>
            </div>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-white">R$297</span>
              <span className="text-sm font-semibold leading-6 text-gray-300">/mensal</span>
            </p>
          </Card>
        </div>

        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="inline-block bg-black/60 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-gray-800">
            <p className="text-white font-semibold">Oferta por Tempo Limitado</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Garanta 14 dias grátis
          </h2>
          <p className="text-xl text-primary mb-8">
            Economize mais de R${(totalOtherPrice - 297).toLocaleString('pt-BR')}/mês
          </p>
          <Button 
            onClick={() => navigate("/signup")}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full"
          >
            Iniciar 14 dias grátis
          </Button>
        </div>
      </div>
    </div>
  );
};
