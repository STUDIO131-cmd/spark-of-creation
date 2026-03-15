const cases = [
  {
    emoji: "💉",
    name: "Juliana Baldo",
    area: "Nutrologia | Emagrecimento | Clínica",
    description: "A Juliana saiu da dependência de convênios e da dupla jornada para uma agenda 100% particular. E hoje fecha consultas e tratamentos com poucas objeções porque a comunicação dela demonstra autoridade antes mesmo da consulta.",
    image: "https://www.studio131.com.br/wp-content/uploads/2026/02/4-1.png"
  },
  {
    emoji: "🌱",
    name: "Henry Luchetti",
    area: "Médico Tricologista",
    description: "Case regional de sucesso em transplante capilar. Em pouco tempo, Henry tornou-se o nome mais lembrado e mais buscado quando alguém decide resolver a calvície de verdade.",
    image: "https://www.studio131.com.br/wp-content/uploads/2026/02/1-1.png"
  },
  {
    emoji: "🦴",
    name: "Giovana Assad",
    area: "Médica Ortopedista",
    description: "9 anos de medicina + estudo constante. Com fellowship em dor, a Giovana trouxe tratamentos ortobiológicos para a prática e virou referência: clínica em evidência, mais confiança nas decisões e uma agenda que cresce no particular.",
    image: "https://www.studio131.com.br/wp-content/uploads/2026/02/2-2.png"
  },
  {
    emoji: "🦶",
    name: "Brenda Braga",
    area: "Fisioterapeuta Ortesista",
    description: "Com uma atuação única no tratamento de pés, Brenda virou referência em Catanduva (SP) e acelerou o crescimento do seu consultório com presença no Instagram, construindo autoridade e influência que viram pacientes e dinheiro.",
    image: "https://www.studio131.com.br/wp-content/uploads/2026/02/Design-sem-nome.png"
  },
  {
    emoji: "⚖️",
    name: "Fernanda Giacomini",
    area: "Direito de Família | Divórcio para mulheres",
    description: "Fernanda construiu uma marca pessoal forte em 10 anos de carreira, levantando debates sociais e emocionais com firmeza. Hoje, atende clientes do Brasil todo porque o alcance e a influência que ela construiu com estratégia nas redes sociais tornaram-se demanda e faturamento.",
    image: "https://www.studio131.com.br/wp-content/uploads/2026/02/3-1.png"
  }
];

interface CaseCardProps {
  emoji: string;
  name: string;
  area: string;
  description: string;
  image: string;
}

const CaseCard = ({ emoji, name, area, description, image }: CaseCardProps) => (
  <div className="card-dark p-5 h-full">
    {/* Imagem com aspect-ratio fixo 4:3 */}
    <div className="mb-4 overflow-hidden rounded-lg aspect-[4/3]">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
    </div>

    {/* Conteúdo */}
    <div>
      <h3 
        className="font-moneta font-semibold mb-2 text-2xl md:text-3xl"
        style={{ color: '#F6FAFF' }}
      >
        {emoji} {name}
      </h3>
      
      <p 
        className="font-tiktok text-sm mb-3"
        style={{ color: '#E6B281' }}
      >
        {area}
      </p>
      
      <p 
        className="font-tiktok text-sm leading-relaxed"
        style={{ color: 'rgba(229, 229, 229, 0.57)' }}
      >
        {description}
      </p>
    </div>
  </div>
);

const CasesSection = () => {
  return (
    <section className="bg-white py-8 px-4 md:px-8">
      <h2 className="font-tiktok text-center text-2xl md:text-3xl font-semibold py-8">
        Alguns <em>cases</em> que já operam com essa estrutura:
      </h2>

      {/* Grid único com todos os 5 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto auto-rows-fr">
        {cases.map((caseItem, index) => (
          <CaseCard key={index} {...caseItem} />
        ))}
      </div>
    </section>
  );
};

export default CasesSection;
