import OptimizedImage from './OptimizedImage';
import CardSkeleton from './CardSkeleton';
import { useInView } from '@/hooks/useInView';
import nataliaCaseAsset from '@/assets/natalia-bertoni.webp.asset.json';

const featuredCases = [
  {
    emoji: "🦷",
    name: "Dr. Guilherme Humel",
    area: "Dentista",
    paragraphs: [
      "Guilherme construiu uma carreira baseada em reputação ao longo de mais de 10 anos, usando unicamente a indicação como canal de aquisição.",
      "Agora está construindo a sua marca pessoal para continuar relevante — e usando a mídia social como recurso de reativação de pacientes e visibilidade."
    ],
    image: "/images/cases/6-3.png"
  },
  {
    emoji: "🥗",
    name: "Natália Bertoni",
    area: "Nutricionista",
    paragraphs: [
      "Natália buscava reposicionar sua marca para tornar a sua comunicação mais atraente. Estruturamos uma nova estratégia de redes sociais e comercial.",
      "Agora ela conta com uma rotina consistente de entrada de novas oportunidades e conversão."
    ],
    image: nataliaCaseAsset.url
  }
];

const cases = [
  {
    emoji: "🦴",
    name: "Dra. Giovana Assad",
    area: "Médica Ortopedista",
    description: "9 anos de medicina + estudo constante. Com fellowship em dor, a Giovana trouxe tratamentos ortobiológicos para a prática e com a utilização dos canais digitais e estratégia de conteúdo, tornou-se referência regional no assunto: clínica em evidência, mais confiança nas decisões e uma agenda que cresce no particular.",
    image: "/images/cases/2-2.png"
  },
  {
    emoji: "🦶",
    name: "Dra. Brenda Braga",
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

    <h3 className="font-tiktok font-semibold mb-2 text-xl md:text-2xl min-h-[32px] md:min-h-[40px] text-card-title whitespace-nowrap">
      {emoji} {name}
    </h3>
    
    <p className="font-tiktok text-sm mb-3 min-h-[20px] text-card-accent">
      {area}
    </p>
    
    <p className="font-tiktok text-sm leading-relaxed text-card-muted">
      {description}
    </p>
  </div>
);

interface FeaturedCaseCardProps {
  emoji: string;
  name: string;
  area: string;
  paragraphs: string[];
  image: string;
}

const FeaturedCaseCard = ({ emoji, name, area, paragraphs, image }: FeaturedCaseCardProps) => (
  <div className="card-dark p-5 md:p-8">
    <div className="grid lg:grid-cols-[1.25fr_1fr] gap-6 md:gap-10 items-center">
      <div className="overflow-hidden rounded-lg aspect-[16/10]">
        <OptimizedImage
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          width={1215}
          height={754}
        />
      </div>

      <div>
        <h3 className="font-tiktok font-semibold mb-2 text-3xl md:text-4xl text-card-title">
          {emoji} {name}
        </h3>

        <p className="font-tiktok text-base md:text-lg mb-5 text-card-accent">
          {area}
        </p>

        <div className="space-y-4">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="font-tiktok text-base md:text-lg leading-relaxed text-card-muted"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
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
          {/* Case em destaque — abre a seção em área inteira */}
          <div className="max-w-6xl mx-auto mb-5">
            <FeaturedCaseCard {...featuredCases[0]} />
          </div>

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

          {/* Case em destaque — fecha a seção em área inteira */}
          <div className="max-w-6xl mx-auto mt-5">
            <FeaturedCaseCard {...featuredCases[1]} />
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
