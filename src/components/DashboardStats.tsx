import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Card } from "@/components/ui/card";

export const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500">Vendas em Loja</p>
            <h3 className="text-2xl font-bold mt-2">R$5.045,00</h3>
          </div>
          <span className="flex items-center text-green-500 text-sm">
            <ArrowUpRight className="h-4 w-4 mr-1" />
            +19%
          </span>
        </div>
      </Card>
      
      <Card className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500">Vendas Online</p>
            <h3 className="text-2xl font-bold mt-2">R$1.001,00</h3>
          </div>
          <span className="flex items-center text-red-500 text-sm">
            <ArrowDownRight className="h-4 w-4 mr-1" />
            -07%
          </span>
        </div>
      </Card>
      
      <Card className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500">Total de Vendas</p>
            <h3 className="text-2xl font-bold mt-2">R$6.460,00</h3>
          </div>
          <span className="flex items-center text-green-500 text-sm">
            <ArrowUpRight className="h-4 w-4 mr-1" />
            +09%
          </span>
        </div>
      </Card>
    </div>
  );
};