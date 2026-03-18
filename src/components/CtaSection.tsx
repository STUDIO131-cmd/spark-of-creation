const CtaSection = () => {
  return (
    <section className="py-12 px-4 bg-black">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-tiktok text-base md:text-xl font-normal mb-4 tracking-wide text-card-body">
          Nossa régua é simples:
        </p>

        <p className="font-tiktok text-lg md:text-2xl font-normal leading-relaxed mb-8 text-card-body">
          Para cada R$1 investido, construímos estruturas capazes de retornar{" "}
          <strong className="text-gold">20x ou mais</strong>.
        </p>

        <a 
          href="#orcamento" 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-tiktok font-medium text-base md:text-lg transition-all hover:-translate-y-0.5 border border-gold text-gold hover:bg-gold hover:text-white"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
          QUERO AVANÇAR
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
