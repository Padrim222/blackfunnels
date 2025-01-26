import React from 'react';

export const ComparisonTableHeader = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 items-center p-4 sm:p-6 bg-black/60">
      <div className="text-sm sm:text-lg font-semibold text-white col-span-2 sm:col-span-1">
        Ferramenta
      </div>
      <div className="text-sm sm:text-lg font-semibold text-white text-left sm:text-center col-span-2 sm:col-span-1">
        Substitui
      </div>
      <div className="text-sm sm:text-lg font-semibold text-white text-left sm:text-center">
        Custo Atual
      </div>
      <div className="text-sm sm:text-lg font-semibold text-white text-center">
        Incluído
      </div>
    </div>
  );
};