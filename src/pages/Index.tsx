import { Navigation } from "@/components/Navigation";
import { DashboardStats } from "@/components/DashboardStats";
import { SalesChart } from "@/components/SalesChart";
import { InvoiceStats } from "@/components/InvoiceStats";
import { OrdersTable } from "@/components/OrdersTable";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Navigation />
      <main className="px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <div className="max-w-7xl mx-auto space-y-8">
          <DashboardStats />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SalesChart />
            <InvoiceStats />
          </div>
          <OrdersTable />
        </div>
      </main>
    </div>
  );
};

export default Index;