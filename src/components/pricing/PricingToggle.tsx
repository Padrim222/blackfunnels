
import { Switch } from "../ui/switch";
import { Zap } from "lucide-react";

interface PricingToggleProps {
  isAnnual: boolean;
  setIsAnnual: (value: boolean) => void;
}

export const PricingToggle = ({ isAnnual, setIsAnnual }: PricingToggleProps) => {
  return (
    <div className="flex items-center justify-center gap-4 mb-8 bg-black/50 backdrop-blur-sm py-3 px-6 rounded-full border border-primary/20 shadow-lg shadow-primary/5 animate-scale">
      <span className={`text-lg relative ${!isAnnual ? 'text-white font-semibold' : 'text-gray-400'} transition-all duration-300`}>
        Mensal
        {!isAnnual && (
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
        )}
      </span>
      
      <div className="relative">
        <Switch
          checked={isAnnual}
          onCheckedChange={(checked) => setIsAnnual(checked)}
          className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-primary data-[state=checked]:to-secondary transition-all duration-300"
        />
        {isAnnual && (
          <span className="absolute -top-2 -right-2 text-primary animate-pulse">
            <Zap className="h-4 w-4" />
          </span>
        )}
      </div>
      
      <span className={`text-lg relative ${isAnnual ? 'text-white font-semibold' : 'text-gray-400'} transition-all duration-300`}>
        Anual
        {isAnnual && (
          <>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
            <span className="absolute -top-3 -right-16 bg-primary/90 text-white text-xs py-0.5 px-2 rounded-md transform rotate-12 animate-pulse">
              Economize 20%
            </span>
          </>
        )}
      </span>
    </div>
  );
};
