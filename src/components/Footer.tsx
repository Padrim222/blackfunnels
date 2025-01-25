import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center">
          <Button 
            variant="outline" 
            className="text-gray-400 hover:text-white border-gray-800 hover:border-gray-600 transition-colors"
          >
            © 2024 Black Funnels. Todos os direitos reservados.
          </Button>
        </div>
      </div>
    </footer>
  );
};