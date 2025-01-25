import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Por que a funil.ai é diferente de outras plataformas?",
      answer: "A funil.ai oferece uma solução completa e integrada, eliminando a necessidade de múltiplas ferramentas."
    },
    {
      question: "O que eu recebo quando me inscrevo no teste grátis?",
      answer: "Você recebe acesso completo a todas as funcionalidades da plataforma por 14 dias."
    },
    {
      question: "Se eu precisar de ajuda com algo?",
      answer: "Nossa equipe de suporte está disponível 24/7 para ajudar você."
    },
    {
      question: "O que é o Desafio Funil 6-7 dígitos?",
      answer: "É um programa exclusivo que ensina como escalar seu negócio usando nossas ferramentas."
    }
  ];

  return (
    <div className="bg-background py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Perguntas Frequentes
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-white hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};