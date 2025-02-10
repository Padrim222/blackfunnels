
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Affiliates = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold text-center mb-8">Programa de Afiliados</h1>
        <p className="text-center text-lg text-muted-foreground">
          Seja bem-vindo ao programa de afiliados Black Partners.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Affiliates;
