const CtaSection = () => {
  return (
    <section className="py-12 px-4 bg-black">
      <div className="max-w-3xl mx-auto text-center">
        <p 
          className="font-tiktok text-lg md:text-xl font-normal mb-4 tracking-wide"
          style={{ color: '#E3E4E3' }}
        >
          Nossa régua é simples:
        </p>

        <div 
          className="font-tiktok text-xl md:text-2xl font-normal leading-relaxed mb-8"
          style={{ color: '#E3E4E3' }}
        >
          <p>Para cada R$1 investido, construímos</p>
          <p>
            estruturas capazes de retornar{" "}
            <strong style={{ color: '#CF8B46' }}>20x ou mais</strong>.
          </p>
        </div>

        <a 
          href="#orcamento" 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-tiktok font-medium text-lg transition-all hover:-translate-y-0.5 border"
          style={{ borderColor: '#CF8B46', color: '#CF8B46' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#CF8B46';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#CF8B46';
          }}
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
