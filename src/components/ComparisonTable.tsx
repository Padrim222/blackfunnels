import React from 'react';
import { ComparisonTableHeader } from './comparison/ComparisonTableHeader';
import { ComparisonTableRow } from './comparison/ComparisonTableRow';
import { ComparisonTableFooter } from './comparison/ComparisonTableFooter';
import type { Feature } from '@/types/comparison';

const features: Feature[] = [
  {
    feature: "Assinatura de Documentos",
    otherPrice: "R$100/mês",
    included: true,
    platforms: {
      google: "/lovable-uploads/e58e1a7f-df90-490a-b61f-054a3251fc83.png",
      meta: "/lovable-uploads/0a5eef0e-48be-4d40-adbe-62361dc5e83f.png",
      other: "/lovable-uploads/e58e1a7f-df90-490a-b61f-054a3251fc83.png"
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
          <ComparisonTableHeader />
          <div className="divide-y divide-gray-800/50">
            {features.map((feature, index) => (
              <ComparisonTableRow key={index} feature={feature} />
            ))}
          </div>
        </div>

        <ComparisonTableFooter totalOtherPrice={totalOtherPrice} />
      </div>
    </div>
  );
};
