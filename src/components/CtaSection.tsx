const CtaSection = () => {
  return (
    <section className="py-10 md:py-14 px-4 bg-black">
      <div className="max-w-2xl mx-auto text-center">
        <h2 
          className="font-ui text-lg sm:text-xl md:text-2xl font-normal leading-relaxed mb-6"
          style={{ color: '#E3E4E3' }}
        >
          Nossa régua é simples: Para cada R$1 investido, construímos estruturas capazes de retornar{" "}
          <strong style={{ color: '#CF8B46' }}>20x ou mais</strong>.
        </h2>

        <a href="#orcamento" className="inline-block btn-liquid-glass text-base md:text-lg">
          QUERO AVANÇAR
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
