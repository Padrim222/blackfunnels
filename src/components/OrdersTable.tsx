import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";

const orders = [
  {
    id: "1",
    product: "Produto A",
    transaction: "TRX-001",
    amount: 2,
    price: "R$ 199,90",
    variant: "Azul",
    status: "Entregue",
  },
  {
    id: "2",
    product: "Produto B",
    transaction: "TRX-002",
    amount: 1,
    price: "R$ 299,90",
    variant: "Verde",
    status: "Pendente",
  },
];

export const OrdersTable = () => {
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Produto</TableHead>
            <TableHead>ID Transação</TableHead>
            <TableHead>Quantidade</TableHead>
            <TableHead>Preço Total</TableHead>
            <TableHead>Variante</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.product}</TableCell>
              <TableCell>{order.transaction}</TableCell>
              <TableCell>{order.amount}</TableCell>
              <TableCell>{order.price}</TableCell>
              <TableCell>{order.variant}</TableCell>
              <TableCell>{order.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};