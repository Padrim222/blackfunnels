
export interface PricingPlan {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  originalPrice: (isAnnual: boolean) => string;
  period: string;
  savings: (isAnnual: boolean) => string;
  highlight: string;
  checkoutUrl: (isAnnual: boolean) => string;
  features: string[];
  additionalFeatures: string[];
  color: string;
  isAvailable: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Lite",
    monthlyPrice: "R$297",
    annualPrice: "R$247",
    originalPrice: (isAnnual) => isAnnual ? "R$297,00" : "",
    period: "/mês",
    savings: (isAnnual) => isAnnual ? "Cobrança anual (Economize R$ 600/ano)" : "",
    highlight: "Ideal para começar",
    checkoutUrl: (isAnnual) => isAnnual ? "https://buy.stripe.com/5kA4j54zMaZ70j65kG" : "https://buy.stripe.com/6oE7vh5DQ2sB1naeVe",
    features: [
      "Websites Ilimitados",
      "Funis ilimitados",
      "Domínios Ilimitados",
      "Visitas ao site ilimitadas",
      "10.000 contatos",
      "3 usuários",
      "Campanhas ilimitadas",
      "Sequência de e-mails ilimitadas",
      "Automações Ilimitadas",
      "Formulários Ilimitados",
      "Pesquisas Ilimitadas",
      "Calendários Ilimitados",
      "Área de membros ilimitadas",
      "Cursos Ilimitados",
      "Comunidades Ilimitadas",
      "Pipelines Ilimitados",
      "CRM Ilimitado",
      "Analytics Ilimitado",
      "Templates Ilimitados",
      "Teste A/B",
      "Integrações",
      "API"
    ],
    additionalFeatures: [
      "+ R$0,093 por SMS (segmento)",
      "+ R$0,083/min Ligações efetuadas",
      "+ R$0,050/min Ligações recebidas",
      "+ R$0,004/email enviado",
      "+ R$0,004/email recebido",
      "+ R$171 Whatsapp API Oficial",
      "+ R$230 Whatsapp API não oficial (até 5 números)",
      "R$5,90 de Crédito",
      "BootCamp Funil 6-7 dígitos",
      "BootCamp SMMA 100k",
      "Comunidade",
      "Onboarding Básico"
    ],
    color: "border-gray-600",
    isAvailable: true
  },
  {
    name: "PRO",
    monthlyPrice: "R$497",
    annualPrice: "R$421",
    originalPrice: (isAnnual) => isAnnual ? "R$497,00" : "",
    period: "/mês",
    savings: (isAnnual) => isAnnual ? "Cobrança anual (Economize R$ 912/ano)" : "",
    highlight: "Mais Popular",
    checkoutUrl: (isAnnual) => isAnnual ? "https://buy.stripe.com/8wM4j52vEefd97y5kK" : "https://buy.stripe.com/aEU16T3vIgjr0j6dRh",
    features: [
      "Websites Ilimitados",
      "Funis ilimitados",
      "Domínios Ilimitados",
      "Visitas ao site ilimitadas",
      "25.000 contatos",
      "10 usuários",
      "Campanhas ilimitadas",
      "Sequência de e-mails ilimitadas",
      "Automações Ilimitadas",
      "Formulários Ilimitados",
      "Pesquisas Ilimitadas",
      "Calendários Ilimitados",
      "Área de membros ilimitadas",
      "Cursos Ilimitados",
      "Comunidades Ilimitadas",
      "Pipelines Ilimitados",
      "CRM Ilimitado",
      "Analytics Ilimitado",
      "Templates Ilimitados",
      "Teste A/B Premium",
      "Integrações Avançadas",
      "API com Suporte Prioritário"
    ],
    additionalFeatures: [
      "+ R$0,079 por SMS (segmento)",
      "+ R$0,083/min Ligações efetuadas",
      "+ R$0,050/min Ligações recebidas",
      "+ R$0,004/email enviado",
      "+ R$0,004/email recebido",
      "+ R$171 Whatsapp API Oficial",
      "+ R$230 Whatsapp API não oficial (até 5 números)",
      "R$29,50 de Crédito",
      "BootCamp Funil 6-7 dígitos",
      "BootCamp SMMA 100k",
      "Comunidade VIP",
      "Onboarding Personalizado"
    ],
    color: "border-primary",
    isAvailable: true
  },
  {
    name: "MASTER",
    monthlyPrice: "R$697",
    annualPrice: "R$542",
    originalPrice: (isAnnual) => isAnnual ? "R$997,00" : "",
    period: "/mês",
    savings: (isAnnual) => isAnnual ? "Cobrança anual (Economize R$ 1.860/ano)" : "Economize R$ 300/mês",
    highlight: "Alta Performance",
    checkoutUrl: (isAnnual) => isAnnual ? "https://buy.stripe.com/28o02P6HUefd7ZqdQZ" : "https://buy.stripe.com/28o16T3vI8QZ5RidRb",
    features: [
      "Websites Ilimitados",
      "Funis ilimitados",
      "Domínios Ilimitados",
      "Visitas ao site ilimitadas",
      "200.000 contatos",
      "50 usuários",
      "Campanhas ilimitadas",
      "Sequência de e-mails ilimitadas",
      "Automações Ilimitadas",
      "Formulários Ilimitados",
      "Pesquisas Ilimitadas",
      "Calendários Ilimitados",
      "Área de membros ilimitadas",
      "Cursos Ilimitados",
      "Comunidades Ilimitadas",
      "Pipelines Ilimitados",
      "CRM Ilimitado",
      "Analytics Ilimitado",
      "Templates Ilimitados",
      "Teste A/B Enterprise",
      "Integrações Enterprise",
      "API Dedicada"
    ],
    additionalFeatures: [
      "+ R$0,070 por SMS (segmento)",
      "+ R$0,083/min Ligações efetuadas",
      "+ R$0,050/min Ligações recebidas",
      "+ R$0,004/email enviado",
      "+ R$0,004/email recebido",
      "+ R$171 Whatsapp API Oficial",
      "+ R$230 Whatsapp API não oficial (até 5 números)",
      "R$59 de Crédito",
      "BootCamp Funil 6-7 dígitos",
      "BootCamp SMMA 100k",
      "Comunidade Elite",
      "Onboarding VIP com Consultor Dedicado"
    ],
    color: "border-secondary",
    isAvailable: true
  }
];
