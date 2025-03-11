
import React from 'react';
import { Button } from '@/components/ui/button';

interface ComparisonTableFooterProps {
  totalOtherPrice: number;
}

export const ComparisonTableFooter = ({ totalOtherPrice }: ComparisonTableFooterProps) => {
  return (
    <div className="mt-8 sm:mt-16 text-center space-y-6 sm:space-y-8">
      <div className="space-y-2 sm:space-y-4">
        <p className="text-lg sm:text-xl font-semibold text-white">
          Custo total das outras ferramentas
        </p>
        <p className="text-3xl sm:text-5xl font-bold text-primary">
          R$ {totalOtherPrice.toLocaleString('pt-BR')}/mês
        </p>
      </div>
      
      <div className="space-y-2 sm:space-y-4">
        <p className="text-lg sm:text-xl font-semibold text-white">
          Com Black Funnels
        </p>
        <p className="text-3xl sm:text-5xl font-bold text-green-500">
          R$ 297/mês
        </p>
      </div>

      <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
        Começar Agora
      </Button>
    </div>
  );
};
