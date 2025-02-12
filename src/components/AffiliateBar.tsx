
export const AffiliateBar = () => {
  return (
    <div 
      className="w-full bg-black py-2 text-center cursor-pointer hover:bg-black/90 transition-colors"
      onClick={() => window.location.href = 'https://blackfunnels.ai/afiliados'}
    >
      <p className="text-sm text-white">
        Descubra nosso programa de <span className="font-bold">AFILIADOS</span> e ganhe comissões recorrentes <span className="underline">*Clique aqui*</span>
      </p>
    </div>
  );
};
