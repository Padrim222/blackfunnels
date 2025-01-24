import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bell, Search, Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src="/lovable-uploads/4156b37e-86eb-4551-8bf4-94a3838bc849.png" alt="Black Funnels Logo" className="h-8" />
            <div className="hidden md:flex items-center ml-8 space-x-4">
              <Button variant="ghost">Dashboard</Button>
              <Button variant="ghost">Ganhos</Button>
              <Button variant="ghost">Produtos</Button>
              <Button variant="ghost">Pedidos</Button>
              <Button variant="ghost">Calendário</Button>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <img
              src="https://github.com/shadcn.png"
              alt="Avatar"
              className="h-8 w-8 rounded-full"
            />
          </div>
          <div className="md:hidden flex items-center">
            <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Button variant="ghost" className="w-full justify-start">Dashboard</Button>
            <Button variant="ghost" className="w-full justify-start">Ganhos</Button>
            <Button variant="ghost" className="w-full justify-start">Produtos</Button>
            <Button variant="ghost" className="w-full justify-start">Pedidos</Button>
            <Button variant="ghost" className="w-full justify-start">Calendário</Button>
          </div>
        </div>
      )}
    </nav>
  );
};