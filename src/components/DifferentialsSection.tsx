import OptimizedImage from './OptimizedImage';
import { useInView } from '@/hooks/useInView';

const differentials = [
  {
    title: "Sistema CRM + Comercial",
    description: "Desenvolvemos um sistema próprio de CRM e acompanhamento comercial para uso diário de vendedores e secretárias.",
    highlight: "Scripts + Rotina + Geração de Demanda + Métricas",
    image: "/images/diff/9-2.png"
  },
  {
    title: "Trabalho em equipe",
    description: "Nossa atuação conta com um time com fome de trabalhar.",
    team: [
      "Igor Gagliardi | Estrategista de Marca",
      "Vitor Casaletti | Produtor de Conteúdo",
      "Higgor Trida | Gestor de Tráfego",
      "Rayani Alberganti | Social Media",
      "Victor Hugo | Editor de Conteúdo",
      "Christopher Cardonha | Editor de Conteúdo"
    ],
    image: "/images/diff/6-2.png"
  },
  {
    title: "Resultados sólidos e experiência em tráfego orgânico",
    description: "Incentivamos e estudamos a fundo a geração de demanda com conteúdo orgânico, reduzindo a dependência de mídia paga.",
    image: "/images/diff/8-2.png"
  },
  {
    title: "Atendemos em estúdio ou in loco",
    description: "No Plano Profissional, atuamos somente na região de Catanduva (SP), onde temos escritório e estúdio próprio.",
    image: "/images/diff/7-2.png"
  }
];

const DifferentialSkeleton = () => (
  <div className="card-dark overflow-hidden animate-pulse">
    <div className="aspect-video bg-muted" />
    <div className="p-5 space-y-3">
      <div className="h-6 bg-muted rounded w-3/4" />
      <div className="h-4 bg-muted rounded w-full" />
      <div className="h-4 bg-muted rounded w-5/6" />
    </div>
  </div>
);

const DifferentialsSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-12 px-4 bg-studio-cream">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {isInView ? (
            differentials.map((item, index) => (
              <div key={index} className="card-dark overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <OptimizedImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    width={600}
                    height={338}
                  />
                </div>
                
                <div className="p-5">
                  <h3 className="font-tiktok font-medium mb-3 text-2xl text-card-title">
                    {item.title}
                  </h3>
                  
                  <p className="font-tiktok text-base leading-relaxed mb-3 text-card-muted">
                    {item.description}
                  </p>
                  
                  {item.team && (
                    <ul className="space-y-1 mt-4">
                      {item.team.map((member, i) => (
                        <li key={i} className="font-tiktok text-sm text-card-accent">
                          {member}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {item.highlight && (
                    <p className="font-tiktok text-sm font-medium mt-4 text-card-accent">
                      {item.highlight}
                    </p>
                  )}
                </div>
              </div>
            ))
          ) : (
            Array(4).fill(0).map((_, i) => (
              <DifferentialSkeleton key={i} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
