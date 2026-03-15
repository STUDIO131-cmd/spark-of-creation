const HeroSection = () => {
  return (
    <section 
      className="relative min-h-[420px] md:min-h-[333px] flex flex-col items-center justify-center py-10 md:py-14 px-4"
      style={{
        backgroundColor: '#F59E05',
        backgroundImage: 'url(https://www.studio131.com.br/wp-content/uploads/2026/02/Header.png)',
        backgroundPosition: 'top center',
        backgroundSize: 'cover'
      }}
    >
      {/* Logo */}
      <img
        src="https://www.studio131.com.br/wp-content/uploads/2026/01/PlanoProfissional-Aguia-02.png"
        alt="O Plano Profissional"
        className="h-20 md:h-36 lg:h-44 w-auto opacity-80"
      />
      
      {/* Subtitle */}
      <div className="font-tiktok text-white text-center mt-6 md:mt-8 space-y-1 tracking-wide">
        <p className="text-base md:text-xl lg:text-2xl font-normal">
          Fazemos seu conteúdo no <em>Instagram</em>
        </p>
        <p className="text-base md:text-xl lg:text-2xl font-semibold">
          (mas não é só isso)
        </p>
      </div>

      {/* Divider */}
      <p className="font-tiktok text-white/70 text-xs md:text-base tracking-[0.2em] mt-4">
        — O PLANO É UM MÉTODO.
      </p>

      {/* Descrição */}
      <p className="font-tiktok text-white/90 text-center text-sm md:text-lg leading-relaxed mt-6 max-w-xl tracking-wide px-2">
        Nós operamos a estratégia de comunicação enquanto o dono segue focado na operação do negócio.
      </p>
    </section>
  );
};

export default HeroSection;
