import { motion } from "framer-motion";

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
    emoji: "🦶🏼",
    name: "Brenda Braga",
    area: "Fisioterapeuta Ortesista",
    description: "Com uma atuação única no tratamento de pés, Brenda virou referência em Catanduva (SP) e acelerou o crescimento do seu consultório com presença no Instagram, construindo autoridade e influência que viram pacientes e dinheiro. Ela entrega exame da pisada, confecção de palmilhas e órteses, linha autoral de cuidados com os pés e acompanhamento na recuperação de diferentes quadros de dor.",
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

const CasesSection = () => {
  return (
    <section className="bg-white" style={{ padding: '0 5vw 5vw 5vw', marginTop: '-42px' }}>
      {/* Título */}
      <motion.h2
        className="font-ui text-center text-2xl md:text-3xl font-semibold py-8 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Alguns <em>cases</em> que já operam com essa estrutura:
      </motion.h2>

      {/* Grid de cases */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cases.map((caseItem, index) => (
          <motion.div
            key={index}
            className="card-dark p-6 flex flex-col"
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Imagem */}
            <div className="mb-4 overflow-hidden rounded-lg">
              <img
                src={caseItem.image}
                alt={caseItem.name}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Conteúdo */}
            <div className="flex-1">
              <h3 
                className="font-body text-xl font-medium mb-2"
                style={{ color: '#F6FAFF' }}
              >
                {caseItem.emoji} {caseItem.name}
              </h3>
              
              <p 
                className="font-ui text-sm mb-3"
                style={{ color: '#E6B281' }}
              >
                {caseItem.area}
              </p>
              
              <p 
                className="font-ui text-base leading-relaxed"
                style={{ color: 'rgba(229, 229, 229, 0.57)' }}
              >
                {caseItem.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CasesSection;
