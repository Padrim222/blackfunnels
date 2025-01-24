import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src="/lovable-uploads/4156b37e-86eb-4551-8bf4-94a3838bc849.png" alt="Black Funnels Logo" className="h-8" />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-white">Features</Button>
            <Button variant="ghost" className="text-white">Pricing</Button>
            <Button variant="ghost" className="text-white">About</Button>
            <Button variant="ghost" className="text-white">Contact</Button>
            <Button variant="outline" className="text-white">Login</Button>
            <Button className="bg-primary hover:bg-primary/90">Start Free Trial</Button>
          </div>
          <div className="md:hidden flex items-center">
            <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Button variant="ghost" className="w-full text-white">Features</Button>
            <Button variant="ghost" className="w-full text-white">Pricing</Button>
            <Button variant="ghost" className="w-full text-white">About</Button>
            <Button variant="ghost" className="w-full text-white">Contact</Button>
            <Button variant="outline" className="w-full text-white">Login</Button>
            <Button className="w-full bg-primary hover:bg-primary/90">Start Free Trial</Button>
          </div>
        </div>
      )}
    </nav>
  );
};