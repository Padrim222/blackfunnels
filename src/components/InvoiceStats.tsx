import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Pagas", value: 35.3 },
  { name: "Vencidas", value: 25.7 },
  { name: "Não Pagas", value: 39 },
];

const COLORS = ["#3B82F6", "#E5E7EB", "#1F2937"];

export const InvoiceStats = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Estatísticas de Faturas</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        {data.map((entry, index) => (
          <div key={entry.name} className="flex items-center">
            <div
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: COLORS[index] }}
            />
            <span className="text-sm text-gray-600">
              {entry.name} ({entry.value}%)
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};