import { Clock } from "lucide-react";

const ValueProposition = () => {
  return (
    <section className="py-6 px-4 bg-black">
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className="font-tiktok text-xl md:text-2xl font-normal leading-[1.3] mb-6"
          style={{ color: '#E3E4E3' }}>
          
          <span>até 20x
o investimento.
          </span>
          <br /><br />
          <strong>Um padrão validado na prática</strong>
          <br />
          <strong>com nossos clientes.</strong>
        </h2>

        <a href="#conteudo" className="inline-flex items-center gap-3 btn-gold text-lg font-tiktok">
          <Clock size={20} className="text-xs" />
          <span>Vídeo 2 min | Entenda o Plano na Prática</span>
        </a>
      </div>
    </section>);};
export default ValueProposition;