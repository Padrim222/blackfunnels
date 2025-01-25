import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TrialButton } from "./TrialButton";

export const FAQ = () => {
  const faqs = [
    {
      question: "Porque funil.ai é diferente de outras plataformas?",
      answer: "Aqui acreditamos que para você ter sucesso é preciso: Conhecimento, Ferramentas, Mentalidade e Ambiente. É por isso que entregamos não só uma ótima plataforma, mas também conhecimento das principais estratégias responsáveis ​​por bilhões de dólares gerados pelos maiores players do mercado, templates prontos para usar em sua operação e uma comunidade incrível de Funileiros e Marketeiros."
    },
    {
      question: "O que eu recebo quando me inscrevo no teste grátis?",
      answer: "Ao se cadastrar, você acessa toda a plataforma, garantindo acesso a templates, automações, funis e um dos nossos melhores treinamentos. Para realmente ajudar você a obter resultados com nosso sistema. Queremos que a decisão de continuar conosco seja simples para você."
    },
    {
      question: "Se eu precisar de ajuda com algo?",
      answer: "Estamos aqui prontos para ajudar você com uma equipe altamente qualificada, seja dentro da plataforma via chat, e-mail, Central de Ajuda ou em nossa Comunidade Oficial."
    },
    {
      question: "O que é o Desafio Funil 6-7 dígitos?",
      answer: "Este é o primeiro treinamento desenvolvido pela Funil.ai que lhe ensinará \"o que\" e \"como\" lançar e escalar seu negócio para 6 e 7 dígitos por mês. Usando nosso método comprovado de funis e estruturas. Lançaremos seu funil juntos durante o desafio e você terá acesso imediato ao criar sua conta."
    },
    {
      question: "Eu preciso pagar por updates?",
      answer: "Nunca! Atualizamos com frequência, adicionando novos modelos, funis, automações e estratégias e você recebe tudo GRATUITAMENTE em seu plano."
    },
    {
      question: "Existem custos adicionais?",
      answer: "Sim, dentro da plataforma você possui uma carteira que estará abastecida com $1 inicialmente. Disparos de email, SMS, validações, Webhook, utilização de IA para criação de textos, imagens, funis ou até mesmo para seu funcionário IA são algumas das funções de consumo da plataforma. Para entender tudo o que pode ser consumido acesse: Configurações -> Cobrança -> Carteira e Transações."
    },
    {
      question: "Meu funil está seguro?",
      answer: "Com certeza! Todo o sistema garante alta segurança para você, seus parceiros, seus clientes e alunos. Você não precisa mais se preocupar em manter seus plugins do WordPress atualizados."
    },
    {
      question: "O contrato é por quanto tempo?",
      answer: "No plano mensal você pode cancelar quando quiser. Já no plano anual, você garante seu acesso por 1 ano."
    },
    {
      question: "Se eu cancelar minha conta da funil.ai, eu perderei meus dados?",
      answer: "Como na maioria das plataformas, quando você cancela sua conta, seus dados ficam inacessíveis, mas não se preocupe, antes de cancelar você tem a oportunidade de baixar toda a sua lista de contatos, clientes e membros."
    },
    {
      question: "Eu preciso instalar algo?",
      answer: "Não. Na funil.ai você não precisa se preocupar com nada de tecnologia. Nós deixamos você livre para planejar sua estratégia e construir seu negócio dentro da nossa plataforma."
    },
    {
      question: "Existe limite de acessos em meu funil?",
      answer: "Não, você é livre para desenvolver o máximo desempenho, gerar o máximo de tráfego para seu funil sem se preocupar. Temos as habilidades virtuais para você escalar em tempo real, não importa o tamanho da sua operação. Seja enviando 10 ou 1 milhão de pessoas para sua página."
    },
    {
      question: "Quem é o proprietário dos dados, conteúdo e membros?",
      answer: "Sempre você! Todo o conteúdo e os usuários são 100% seus. A funil.ai não tem permissão para usar os dados ou o conteúdo da sua conta por nenhum motivo. A funil.ai é apenas uma ferramenta para você entregar o seu valor!"
    },
    {
      question: "Posso hospedar as minhas páginas?",
      answer: "Você está livre desse problema. Nós hospedamos tudo e mantemos todas as ferramentas atualizadas para que você possa viver em paz. Sem erros de hospedagem e sites fora do ar."
    },
    {
      question: "E se eu não gostar da funil.ai, como eu cancelo?",
      answer: "Basta acessar sua conta, clicar em Configurações -> Cobrança e depois em \"cancelar minha conta\". Você não precisa falar com ninguém, seja por e-mail, ligação ou chat, basta um clique."
    }
  ];

  return (
    <div className="bg-background py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
          Perguntas Frequentes
        </h2>
        <div className="text-center mb-12">
          <TrialButton />
        </div>
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