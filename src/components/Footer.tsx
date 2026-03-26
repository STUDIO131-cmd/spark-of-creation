const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const btnClass = "flex items-center justify-center w-full px-6 py-4 border rounded-xl font-tiktok font-medium text-sm tracking-wider transition-all duration-300 text-center min-h-[44px] border-gold/30 bg-gold/5 text-gold/80 hover:bg-gold/10 hover:text-gold hover:-translate-y-0.5";

  return (
    <footer className="py-12 px-4 bg-studio-dark">
      <div className="max-w-md mx-auto">
        <div className="flex justify-center mb-10">
          <img
            src="/images/PlanoProfissional-Aguia-02-footer.png"
            alt="Studio 131"
            className="h-16 md:h-24 w-auto opacity-60"
            loading="lazy"
            decoding="async"
            width={192}
            height={96}
          />
        </div>

        <div className="grid grid-cols-2 gap-3 mb-3">
          <a href="#" className={btnClass}>
            <span className="flex items-center justify-center gap-2">
              131 FOTOS
              <span className="px-1.5 py-0.5 text-[9px] font-bold tracking-wider uppercase rounded bg-card-accent/20 text-card-accent border border-card-accent/30 leading-none">EM BREVE</span>
            </span>
          </a>
          <a href="https://campanhas.studio131.com.br" className={btnClass}>
            CAMPANHAS
          </a>
          <a href="https://planoprofissional.studio131.com.br" className={btnClass}>
            O PLANO PROFISSIONAL
          </a>
          <a href="https://ajornadaimersao.studio131.com.br/" className={btnClass}>
            <span className="flex flex-col items-center">
              <span>THE JOURNEY</span>
              <span className="text-[10px] tracking-[0.15em] text-gold/40 mt-0.5">FRENTE EDUCACIONAL</span>
            </span>
          </a>
        </div>

        <div className="mb-10">
          <button onClick={scrollToTop} className={`${btnClass} w-full`}>
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
