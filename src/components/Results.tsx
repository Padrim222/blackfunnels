export const Results = () => {
  return (
    <div className="bg-background py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Resultados Comprovados
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Veja o que nossos clientes estão conquistando com a plataforma
          </p>
          <TrialButton />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
            <p className="text-5xl font-bold text-primary mb-4">+500%</p>
            <p className="text-white">Aumento em vendas</p>
          </div>
          <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
            <p className="text-5xl font-bold text-primary mb-4">-40%</p>
            <p className="text-white">Redução de custos</p>
          </div>
          <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
            <p className="text-5xl font-bold text-primary mb-4">+300%</p>
            <p className="text-white">Mais leads qualificados</p>
          </div>
        </div>
      </div>
    </div>
  );
};
