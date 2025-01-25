import React from 'react';

export const ComparisonTableHeader = () => {
  return (
    <div className="grid grid-cols-4 gap-4 bg-black/60 p-6 border-b border-gray-800">
      <div className="text-xl font-semibold text-white">Ferramenta</div>
      <div className="text-xl font-semibold text-white text-center">Substitui</div>
      <div className="text-xl font-semibold text-white">Custo Atual</div>
      <div className="text-xl font-semibold text-white text-center">
        <img 
          src="/lovable-uploads/a0e078b8-5770-4945-883e-76cee0cb39ca.png" 
          alt="Black Funnels" 
          className="h-8 ml-auto" 
        />
      </div>
    </div>
  );
};