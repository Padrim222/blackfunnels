import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Button variant="link" className="text-gray-400 hover:text-white p-0">Features</Button></li>
              <li><Button variant="link" className="text-gray-400 hover:text-white p-0">Pricing</Button></li>
              <li><Button variant="link" className="text-gray-400 hover:text-white p-0">Templates</Button></li>
              <li><Button variant="link" className="text-gray-400 hover:text-white p-0">Integrations</Button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Button variant="link" className="text-gray-400 hover:text-white p-0">About</Button></li>
              <li><Button variant="link" className="text-gray-400 hover:text-white p-0">Blog</Button></li>
              <li><Button variant="link" className="text-gray-400 hover:text-white p-0">Careers</Button></li>
              <li><Button variant="link" className="text-gray-400 hover:text-white p-0">Contact</Button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Button variant="link" className="text-gray-400 hover:text-white p-0">Documentation</Button></li>
              <li><Button variant="link" className="text-gray-400 hover:text-white p-0">Help Center</Button></li>
              <li><Button variant="link" className="text-gray-400 hover:text-white p-0">Community</Button></li>
              <li><Button variant="link" className="text-gray-400 hover:text-white p-0">API</Button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Button variant="link" className="text-gray-400 hover:text-white p-0">Privacy</Button></li>
              <li><Button variant="link" className="text-gray-400 hover:text-white p-0">Terms</Button></li>
              <li><Button variant="link" className="text-gray-400 hover:text-white p-0">Security</Button></li>
              <li><Button variant="link" className="text-gray-400 hover:text-white p-0">Cookies</Button></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © 2024 Black Funnels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};