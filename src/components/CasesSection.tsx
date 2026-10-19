import OptimizedImage from './OptimizedImage';
import CardSkeleton from './CardSkeleton';
import { useInView } from '@/hooks/useInView';

const cases = [
  {
    emoji: "🦴",
    name: "Giovana Assad",
    area: "Médica Ortopedista",
    description: "9 anos de medicina + estudo constante. Com fellowship em dor, a Giovana trouxe tratamentos ortobiológicos para a prática e com a utilização dos canais digitais e estratégia de conteúdo, tornou-se referência regional no assunto: clínica em evidência, mais confiança nas decisões e uma agenda que cresce no particular.",
    image: "/images/cases/2-2.png"
  },
  {
    emoji: "🦶",
    name: "Brenda Braga",
    area: "Fisioterapeuta Ortesista",
    description: "Com uma atuação única no tratamento de pés e tornozelos, Brenda tornou-se referência regional na fisioterapia e acelerou o crescimento do seu consultório com presença consistente no Instagram gerando influência, indicações e entrada constante de novos pacientes.",
    image: "/images/cases/4-2.png"
  },
  {
    emoji: "⚖️",
    name: "Fernanda Giacomini",
    area: "Direito de Família | Divórcio para mulheres",
    description: "Fernanda construiu uma marca pessoal forte em 10 anos de carreira, levantando debates sociais e emocionais com firmeza. Hoje, atende clientes do Brasil todo porque o alcance e a influência que ela construiu com estratégia nas redes sociais tornaram-se demanda e faturamento.",
    image: "/images/cases/5-2.png"
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

    <h3 className="font-tiktok font-semibold mb-2 text-2xl md:text-3xl min-h-[40px] md:min-h-[48px] text-card-title">
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
    <section ref={ref} className="bg-studio-cream py-8 px-4 md:px-8">
      <h2 className="font-tiktok text-center text-2xl md:text-3xl font-semibold py-8 text-[hsl(0_0%_17%)]">
        Alguns <em>cases</em> que já operam com essa estrutura:
      </h2>

      {isInView ? (
        <>
          {/* Desktop (lg+): 3 em linha */}
          <div className="hidden lg:grid grid-cols-3 gap-5 max-w-6xl mx-auto">
            {cases.map((caseItem, index) => (
              <CaseCard key={index} {...caseItem} />
            ))}
          </div>

          {/* Tablet (md): 2 + 1 centralizada */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-5 max-w-4xl mx-auto">
            <CaseCard {...cases[0]} />
            <CaseCard {...cases[1]} />
          </div>
          <div className="hidden md:flex lg:hidden justify-center mt-5 max-w-4xl mx-auto">
            <div className="w-1/2">
              <CaseCard {...cases[2]} />
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
