
import { Switch } from "../ui/switch";

interface PricingToggleProps {
  isAnnual: boolean;
  setIsAnnual: (value: boolean) => void;
}

export const PricingToggle = ({ isAnnual, setIsAnnual }: PricingToggleProps) => {
  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      <span className={`text-lg ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Mensal</span>
      <Switch
        checked={isAnnual}
        onCheckedChange={(checked) => setIsAnnual(checked)}
        className="data-[state=checked]:bg-primary"
      />
      <span className={`text-lg ${isAnnual ? 'text-white' : 'text-gray-400'}`}>Anual</span>
    </div>
  );
};
