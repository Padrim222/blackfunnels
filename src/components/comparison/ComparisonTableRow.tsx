import React from 'react';
import { Check } from 'lucide-react';
import type { Feature } from '@/types/comparison';

interface ComparisonTableRowProps {
  feature: Feature;
}

export const ComparisonTableRow = ({ feature }: ComparisonTableRowProps) => {
  return (
    <div className="grid grid-cols-4 gap-4 items-center p-6 hover:bg-black/40 transition-colors">
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
        {feature.platforms.other && (
          <img 
            src={feature.platforms.other} 
            alt="Other Platform" 
            className="w-10 h-10 object-contain animate-float" 
            style={{ animationDelay: "0.4s" }}
          />
        )}
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
  );
};