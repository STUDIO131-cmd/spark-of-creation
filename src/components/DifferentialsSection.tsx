const differentials = [
{
  title: "Sistema CRM + Comercial",
  description: "Desenvolvemos um sistema próprio de CRM e acompanhamento comercial para uso diário de vendedores e secretárias.",
  highlight: "Scripts + Rotina + Geração de Demanda + Métricas",
  image: "https://www.studio131.com.br/wp-content/uploads/2026/02/8-1.png"
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
  "Christopher Cardonha | Editor de Conteúdo"],

  image: "https://www.studio131.com.br/wp-content/uploads/2026/02/5-1.png"
},
{
  title: "Resultados sólidos e experiência em tráfego orgânico",
  description: "Incentivamos e estudamos a fundo a geração de demanda com conteúdo orgânico, reduzindo a dependência de mídia paga.",
  image: "https://www.studio131.com.br/wp-content/uploads/2026/02/7-1.png"
},
{
  title: "Atendemos em estúdio ou in loco",
  description: "No Plano Profissional, atuamos somente na região de Catanduva (SP), onde temos escritório e estúdio próprio.",
  image: "https://www.studio131.com.br/wp-content/uploads/2026/02/6-1.png"
}];


const DifferentialsSection = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {differentials.map((item, index) =>
          <div key={index} className="card-dark overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width={600}
                height={338} />
              
              </div>
              
              <div className="p-5">
                <h3 className="font-moneta font-medium mb-3 text-2xl font-sans text-primary-foreground" style={{ color: '#F6FAFF' }}>
                  {item.title}
                </h3>
                
                <p className="font-tiktok text-base leading-relaxed mb-3" style={{ color: 'rgba(229, 229, 229, 0.57)' }}>
                  {item.description}
                </p>
                
                {item.team &&
              <ul className="space-y-1 mt-4">
                    {item.team.map((member, i) =>
                <li key={i} className="font-tiktok text-sm" style={{ color: '#E6B281' }}>
                        {member}
                      </li>
                )}
                  </ul>
              }
                
                {item.highlight &&
              <p className="font-tiktok text-sm font-medium mt-4" style={{ color: '#E6B281' }}>
                    {item.highlight}
                  </p>
              }
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default DifferentialsSection;