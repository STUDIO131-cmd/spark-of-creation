const HeroSection = () => {
  return (
    <section 
      className="relative min-h-[333px] flex flex-col items-center justify-center py-8 sm:py-10 px-4"
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
        className="w-[60%] max-w-[360px] opacity-80"
      />
      
      <h1 className="font-display text-center mt-6 max-w-3xl leading-tight">
        <span className="block text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide">
          O Plano Profissional
        </span>
        <span className="block mt-2 text-3xl sm:text-4xl md:text-5xl font-bold">
          <span style={{ color: '#E6B281' }}>Ilumine</span>{" "}
          <span className="text-white">o seu caminho</span>
        </span>
        <span className="block text-white text-2xl sm:text-3xl md:text-4xl font-bold mt-1">
          de crescimento
        </span>
      </h1>

      <p className="font-ui text-white/80 text-center text-sm sm:text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
        Nós operamos a estratégia de comunicação enquanto o dono segue focado na operação do negócio. 
        Fazemos seu conteúdo no Instagram — mas não é só isso. O PLANO É UM MÉTODO.
      </p>
    </section>
  );
};

export default HeroSection;
