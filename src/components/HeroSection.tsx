const HeroSection = () => {
  return (
    <section 
      className="relative min-h-[333px] flex flex-col items-center justify-center py-6 px-4"
      style={{
        backgroundColor: '#F59E05',
        backgroundImage: 'url(https://www.studio131.com.br/wp-content/uploads/2026/02/Header.png)',
        backgroundPosition: 'top center',
        backgroundSize: 'cover'
      }}
    >
      <img
        src="https://www.studio131.com.br/wp-content/uploads/2026/01/PlanoProfissional-Aguia-02.png"
        alt="O Plano Profissional"
        className="w-[68%] max-w-[400px] opacity-80"
      />
      
      <h1 className="font-ui text-white text-center text-xl md:text-2xl font-normal leading-[1.3] max-w-3xl mt-6">
        Fazemos seu conteúdo no <em>Instagram</em> <strong>(mas não é só isso)</strong> — O PLANO É UM MÉTODO. 
        Nós operamos a estratégia de comunicação enquanto o dono segue focado na operação do negócio.
      </h1>
    </section>
  );
};

export default HeroSection;
