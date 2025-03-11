
import React from 'react';
import { Check } from 'lucide-react';
import type { Feature } from '@/types/comparison';

interface ComparisonTableRowProps {
  feature: Feature;
}

export const ComparisonTableRow = ({ feature }: ComparisonTableRowProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 items-center p-4 sm:p-6 hover:bg-black/40 transition-colors">
      <div className="text-sm sm:text-lg font-medium text-white col-span-2 sm:col-span-1">
        {feature.feature}
      </div>
      <div className="flex justify-start sm:justify-center space-x-2 sm:space-x-3 col-span-2 sm:col-span-1">
        <img 
          src={feature.platforms.google} 
          alt="Google" 
          className="w-8 h-8 sm:w-10 sm:h-10 object-contain animate-float"
        />
        <img 
          src={feature.platforms.meta} 
          alt="Meta" 
          className="w-8 h-8 sm:w-10 sm:h-10 object-contain animate-float" 
          style={{ animationDelay: "0.2s" }}
        />
        {feature.platforms.other && (
          <img 
            src={feature.platforms.other} 
            alt="Other Platform" 
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain animate-float" 
            style={{ animationDelay: "0.4s" }}
          />
        )}
      </div>
      <div className="text-sm sm:text-lg text-gray-300 text-left sm:text-center">
        {feature.otherPrice}
      </div>
      <div className="flex justify-center items-center w-full">
        {feature.included && (
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-full flex items-center justify-center">
            <Check className="text-green-500 h-4 w-4 sm:h-5 sm:w-5" />
          </div>
        )}
      </div>
    </div>
  );
};
