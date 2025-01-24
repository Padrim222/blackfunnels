import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", value: 1000 },
  { name: "Fev", value: 2000 },
  { name: "Mar", value: 1500 },
  { name: "Abr", value: 3000 },
  { name: "Mai", value: 2500 },
  { name: "Jun", value: 4000 },
];

export const SalesChart = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Vendas por Período</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};