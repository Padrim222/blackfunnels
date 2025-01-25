import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface ComparisonTableFooterProps {
  totalOtherPrice: number;
}

export const ComparisonTableFooter = ({ totalOtherPrice }: ComparisonTableFooterProps) => {
  const navigate = useNavigate();

  return (
    <>
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
    </>
  );
};