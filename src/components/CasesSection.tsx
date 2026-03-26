import OptimizedImage from './OptimizedImage';
import CardSkeleton from './CardSkeleton';
import { useInView } from '@/hooks/useInView';

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
  <div className="card-dark p-5">
    <div className="mb-4 overflow-hidden rounded-lg aspect-[4/3]">
      <OptimizedImage
        src={image}
        alt={name}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        width={600}
        height={450}
      />
    </div>

    <h3 className="font-moneta font-semibold mb-2 text-2xl md:text-3xl min-h-[40px] md:min-h-[48px] text-card-title">
      {emoji} {name}
    </h3>
    
    <p className="font-tiktok text-sm mb-3 min-h-[20px] text-card-accent">
      {area}
    </p>
    
    <p 
      className="font-tiktok text-sm leading-relaxed min-h-[120px] text-card-muted"
      style={{ 
        display: '-webkit-box',
        WebkitLineClamp: 6,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden'
      }}
    >
      {description}
    </p>
  </div>
);

const CasesSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="bg-white py-8 px-4 md:px-8">
      <h2 className="font-tiktok text-center text-2xl md:text-3xl font-semibold py-8">
        Alguns <em>cases</em> que já operam com essa estrutura:
      </h2>

      {isInView ? (
        <>
          {/* Desktop (lg+): 3 + 2 centralizado */}
          <div className="hidden lg:grid grid-cols-3 gap-5 max-w-6xl mx-auto">
            {cases.slice(0, 3).map((caseItem, index) => (
              <CaseCard key={index} {...caseItem} />
            ))}
          </div>
          <div className="hidden lg:grid grid-cols-2 gap-5 mt-5 max-w-none w-2/3 mx-auto">
            {cases.slice(3, 5).map((caseItem, index) => (
              <CaseCard key={index + 3} {...caseItem} />
            ))}
          </div>

          {/* Tablet (md): 2x2 + 1 centralizada */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-5 max-w-4xl mx-auto">
            <CaseCard {...cases[0]} />
            <CaseCard {...cases[1]} />
            <CaseCard {...cases[2]} />
            <CaseCard {...cases[4]} />
          </div>
          <div className="hidden md:flex lg:hidden justify-center mt-5 max-w-4xl mx-auto">
            <div className="w-1/2">
              <CaseCard {...cases[3]} />
            </div>
          </div>

          {/* Mobile: coluna única */}
          <div className="grid md:hidden grid-cols-1 gap-5 max-w-6xl mx-auto">
            {cases.map((caseItem, index) => (
              <CaseCard key={index} {...caseItem} />
            ))}
          </div>
        </>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {Array(3).fill(0).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      )}
    </section>
  );
};

export default CasesSection;
