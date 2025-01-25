export const Testimonials = () => {
  const testimonials = [
    {
      name: "João Silva",
      role: "Empreendedor Digital",
      content: "A plataforma revolucionou meu negócio. Em apenas 3 meses, aumentei minhas vendas em 300%.",
      image: "/lovable-uploads/903ff8f7-2819-4d6b-abfb-00d6c8636d6f.png"
    },
    {
      name: "Maria Santos",
      role: "Coach",
      content: "Nunca foi tão fácil criar e vender meus produtos digitais. A funil.ai simplificou todo o processo.",
      image: "/lovable-uploads/90a30ac1-de7b-4b81-bba8-43c7e3186446.png"
    },
    {
      name: "Pedro Costa",
      role: "Infoprodutor",
      content: "A melhor decisão que tomei foi migrar para a funil.ai. O suporte é incrível e as ferramentas são completas.",
      image: "/lovable-uploads/894cc3fa-aeef-4449-8413-2139c75dac47.png"
    }
  ];

  return (
    <div className="bg-background py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-400">
            Histórias reais de sucesso usando nossa plataforma
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-black/50 p-6 rounded-lg border border-gray-800"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-400 mb-4">{testimonial.content}</p>
              <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
              <p className="text-primary">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};