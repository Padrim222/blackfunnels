import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bell, Search, Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-background border-b border-muted z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src="/lovable-uploads/f6281d60-3132-4ff5-9dcb-5c05e84d62b1.png" alt="Black Funnels Logo" className="h-8" />
            <div className="hidden md:flex items-center ml-8 space-x-4">
              <Button variant="ghost" className="text-foreground hover:text-primary">Dashboard</Button>
              <Button variant="ghost" className="text-foreground hover:text-primary">Ganhos</Button>
              <Button variant="ghost" className="text-foreground hover:text-primary">Produtos</Button>
              <Button variant="ghost" className="text-foreground hover:text-primary">Pedidos</Button>
              <Button variant="ghost" className="text-foreground hover:text-primary">Calendário</Button>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <Bell className="h-5 w-5" />
            </Button>
            <img
              src="https://github.com/shadcn.png"
              alt="Avatar"
              className="h-8 w-8 rounded-full"
            />
          </div>
          <div className="md:hidden flex items-center">
            <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-background">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Button variant="ghost" className="w-full justify-start text-foreground hover:text-primary">Dashboard</Button>
            <Button variant="ghost" className="w-full justify-start text-foreground hover:text-primary">Ganhos</Button>
            <Button variant="ghost" className="w-full justify-start text-foreground hover:text-primary">Produtos</Button>
            <Button variant="ghost" className="w-full justify-start text-foreground hover:text-primary">Pedidos</Button>
            <Button variant="ghost" className="w-full justify-start text-foreground hover:text-primary">Calendário</Button>
          </div>
        </div>
      )}
    </nav>
  );
};