import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Produto</h3>
            <ul className="space-y-2">
              <li><Button variant="link" className="text-gray-400 hover:text-white p-0">Funcionalidades</Button></li>
              <li><Button variant="link" className="text-gray-400 hover:text-white p-0">Preços</Button></li>
              <li><Button variant="link" className="text-gray-400 hover:text-white p-0">Templates</Button></li>
              <li><Button variant="link" className="text-gray-400 hover:text-white p-0">Integrações</Button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><Button variant="link" className="text-gray-400 hover:text-white p-0">Sobre</Button></li>
              <li><Button variant="link" className="text-gray-400 hover:text-white p-0">Blog</Button></li>
              <li><Button variant="link" className="text-gray-400 hover:text-white p-0">Carreiras</Button></li>
              <li><Button variant="link" className="text-gray-400 hover:text-white p-0">Contato</Button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><Button variant="link" className="text-gray-400 hover:text-white p-0">Documentação</Button></li>
              <li><Button variant="link" className="text-gray-400 hover:text-white p-0">Central de Ajuda</Button></li>
              <li><Button variant="link" className="text-gray-400 hover:text-white p-0">Comunidade</Button></li>
              <li><Button variant="link" className="text-gray-400 hover:text-white p-0">API</Button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Button variant="link" className="text-gray-400 hover:text-white p-0">Privacidade</Button></li>
              <li><Button variant="link" className="text-gray-400 hover:text-white p-0">Termos</Button></li>
              <li><Button variant="link" className="text-gray-400 hover:text-white p-0">Segurança</Button></li>
              <li><Button variant="link" className="text-gray-400 hover:text-white p-0">Cookies</Button></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © 2024 Black Funnels. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};