const cases = [
  {
    emoji: "💉",
    name: "Juliana Baldo",
    area: "Nutrologia | Emagrecimento | Clínica",
    description: "A Juliana saiu da dependência de convênios e da dupla jornada para uma agenda 100% particular.",
    image: "https://www.studio131.com.br/wp-content/uploads/2026/02/4-1.png"
  },
  {
    emoji: "🌱",
    name: "Henry Luchetti",
    area: "Médico Tricologista",
    description: "Case regional de sucesso em transplante capilar. Henry tornou-se o nome mais lembrado quando alguém decide resolver a calvície.",
    image: "https://www.studio131.com.br/wp-content/uploads/2026/02/1-1.png"
  },
  {
    emoji: "🦴",
    name: "Giovana Assad",
    area: "Médica Ortopedista",
    description: "9 anos de medicina + estudo constante. Giovana trouxe tratamentos ortobiológicos para a prática e virou referência.",
    image: "https://www.studio131.com.br/wp-content/uploads/2026/02/2-2.png"
  },
  {
    emoji: "🦶🏼",
    name: "Brenda Braga",
    area: "Fisioterapeuta Ortesista",
    description: "Com atuação única no tratamento de pés, Brenda virou referência em Catanduva (SP) e acelerou o crescimento do consultório.",
    image: "https://www.studio131.com.br/wp-content/uploads/2026/02/Design-sem-nome.png"
  },
  {
    emoji: "⚖️",
    name: "Fernanda Giacomini",
    area: "Direito de Família | Divórcio para mulheres",
    description: "Fernanda construiu uma marca pessoal forte em 10 anos de carreira. Hoje atende clientes do Brasil todo.",
    image: "https://www.studio131.com.br/wp-content/uploads/2026/02/3-1.png"
  }
];

const CasesSection = () => {
  return (
    <section className="bg-white" style={{ padding: '0 5vw 5vw 5vw' }}>
      <h2 className="font-ui text-center text-2xl md:text-3xl font-semibold py-8 px-4">
        Alguns <em>cases</em> que já operam com essa estrutura:
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cases.map((caseItem, index) => (
          <div
              key={index}
              className={`card-dark p-6 flex flex-col ${index >= 3 ? 'lg:col-span-1 lg:col-start-2' : ''}`}
            >
            <div className="mb-4 overflow-hidden rounded-lg">
              <img
                src={caseItem.image}
                alt={caseItem.name}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex-1">
              <h3 className="font-body text-xl font-medium mb-2" style={{ color: '#F6FAFF' }}>
                {caseItem.emoji} {caseItem.name}
              </h3>
              
              <p className="font-ui text-sm mb-3" style={{ color: '#E6B281' }}>
                {caseItem.area}
              </p>
              
              <p className="font-ui text-base leading-relaxed" style={{ color: 'rgba(229, 229, 229, 0.57)' }}>
                {caseItem.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CasesSection;
