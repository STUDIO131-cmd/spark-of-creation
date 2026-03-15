const CtaSection = () => {
  return (
    <section className="py-12 px-4 bg-black">
      <div className="max-w-3xl mx-auto text-center">
        <h2 
          className="font-ui text-2xl md:text-3xl font-normal leading-relaxed mb-8"
          style={{ color: '#E3E4E3' }}
        >
          Nossa régua é simples: Para cada R$1 investido, construímos estruturas capazes de retornar{" "}
          <strong style={{ color: '#CF8B46' }}>20x ou mais</strong>.
        </h2>

        <a href="#orcamento" className="inline-block btn-gold text-lg">
          QUERO AVANÇAR
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
