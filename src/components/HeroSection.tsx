const HeroSection = () => {
  return (
    <section 
      className="relative min-h-[333px] flex flex-col items-center justify-center py-10 md:py-14 px-4"
      style={{
        backgroundColor: '#F59E05',
        backgroundImage: 'url(https://www.studio131.com.br/wp-content/uploads/2026/02/Header.png)',
        backgroundPosition: 'top center',
        backgroundSize: 'cover'
      }}
    >
      {/* Logo only — no text title */}
      <img
        src="https://www.studio131.com.br/wp-content/uploads/2026/01/PlanoProfissional-Aguia-02.png"
        alt="O Plano Profissional"
        className="h-24 md:h-36 lg:h-44 w-auto opacity-80"
      />
      
      {/* Subtitle — font-tiktok */}
      <div className="font-tiktok text-white text-center mt-8 space-y-1 tracking-wide">
        <p className="text-lg md:text-xl lg:text-2xl font-normal">
          Fazemos seu conteúdo no <em>Instagram</em>
        </p>
        <p className="text-lg md:text-xl lg:text-2xl font-semibold">
          (mas não é só isso)
        </p>
      </div>

      {/* Divider line */}
      <p className="font-tiktok text-white/70 text-sm md:text-base tracking-[0.2em] mt-4">
        — O PLANO É UM MÉTODO.
      </p>

      {/* Main description */}
      <div className="font-tiktok text-white/90 text-center text-base md:text-lg leading-relaxed mt-6 max-w-xl tracking-wide">
        <p>Nós operamos a estratégia de comunicação</p>
        <p>enquanto o dono segue focado na operação</p>
        <p>do negócio.</p>
      </div>
    </section>
  );
};

export default HeroSection;
