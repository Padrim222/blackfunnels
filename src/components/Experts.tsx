export const Experts = () => {
  const experts = [
    {
      name: "Pablo Marçal",
      title: "Funil Perpétuo",
      description: "Com certeza o maior Gênio do Marketing Digital no mundo, empresário serial e autor da principal trilogia de marketing.",
      image: "/lovable-uploads/c0088bce-d8ee-4212-bbaa-d2f70ca902fd.png"
    },
    {
      name: "Ed Cred",
      title: "Funis Black",
      description: "Empresário, autor e palestrante. Ele é o fundador da Cardone Enterprises e criador do movimento 10x.",
      image: "/lovable-uploads/d68d266d-395f-42d4-be38-f8151c70e11d.png"
    },
    {
      name: "Pedro Sobral",
      title: "Funis de Desafio",
      description: "Pioneiro no modelo de desafios pagos e gratuitos que geraram mais de $100 milhões de dólares. Autor de best-seller e fundador de diversas empresas.",
      image: "/lovable-uploads/609d6f5c-f26f-4d65-b41e-e39a8525ef93.png"
    }
  ];

  return (
    <div className="bg-background py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Funis prontos para você utilizar
          </h2>
          <p className="text-xl text-gray-400">
            Modelamos as estratégias dos maiores do 🌎 para você aplicar em seu negócio
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="bg-black/50 p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-colors"
            >
              <img
                src={expert.image}
                alt={expert.name}
                className="w-32 h-32 mx-auto rounded-full mb-6 object-cover"
              />
              <h3 className="text-xl font-bold text-white mb-2">{expert.name}</h3>
              <p className="text-primary mb-4">{expert.title}</p>
              <p className="text-gray-400">{expert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};