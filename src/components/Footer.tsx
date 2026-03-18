const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const btnClass = "block w-full px-6 py-4 border border-white/20 rounded-xl text-white font-tiktok font-medium text-sm tracking-wider hover:bg-white/5 transition-colors text-center";

  return (
    <footer className="py-12 px-4 bg-black">
      <div className="max-w-md mx-auto">
        <div className="flex justify-center mb-10">
          <img
            src="https://www.studio131.com.br/wp-content/uploads/2026/01/PlanoProfissional-Aguia-02.png"
            alt="Studio 131"
            className="h-16 md:h-24 w-auto opacity-60"
            loading="lazy"
            decoding="async"
            width={192}
            height={96}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
          <a href="https://welcome-back-craft.lovable.app" className={btnClass}>
            CAMPANHAS
          </a>
          <a href="https://redo-with-charm.lovable.app" className={btnClass}>
            O PLANO PROFISSIONAL
          </a>
          <a href="#" className={btnClass}>
            <span className="block">THE JOURNEY</span>
            <span className="block text-[10px] tracking-[0.15em] text-white/40 mt-0.5">FRENTE EDUCACIONAL</span>
          </a>
          <button onClick={scrollToTop} className={btnClass}>
            VOLTAR AO TOPO
          </button>
        </div>

        <div className="text-center">
          <p className="font-tiktok text-sm mb-2 text-footer-muted">
            Copyright © 2026 Todos os direitos reservados.
          </p>
          <p className="font-tiktok text-sm text-footer-muted">
            Oferecido com muita estratégia por:{" "}
            <strong className="text-footer-strong">STUDIO 131</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
