import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    whatsapp: "",
    areaCorreta: "",
    areaAtuacao: "",
    timeComercial: "",
    faturamento: "",
    urgencia: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Novo lead - ${formData.nome} ${formData.sobrenome}`);
    const body = encodeURIComponent(
      `Nome: ${formData.nome} ${formData.sobrenome}\n` +
      `WhatsApp: ${formData.whatsapp}\n` +
      `Área correta: ${formData.areaCorreta}\n` +
      `Área de atuação: ${formData.areaAtuacao}\n` +
      `Time comercial: ${formData.timeComercial}\n` +
      `Faturamento: ${formData.faturamento}\n` +
      `Urgência: ${formData.urgencia}`
    );
    
    window.location.href = `mailto:igorgagliardi@studio131.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const inputClass = "w-full px-4 py-3 rounded-lg border font-tiktok text-base focus:outline-none focus:ring-2 transition-all duration-300 min-h-[44px]" +
    " border-[hsl(0_0%_81%)] focus:ring-[hsl(16_62%_61%)] bg-white text-[hsl(0_0%_17%)]";
  const labelClass = "block font-tiktok text-sm font-medium mb-2 text-[hsl(0_0%_32%)]";
  const radioLabelClass = "flex items-center gap-3 cursor-pointer min-h-[44px]";

  if (submitted) {
    return (
      <section id="orcamento" className="py-12 px-4 bg-studio-neutral">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <h2 className="font-tiktok text-2xl font-semibold mb-4 text-[hsl(16_62%_61%)]">
              Formulário enviado com sucesso!
            </h2>
            <p className="font-tiktok text-base text-[hsl(0_0%_54%)]">
              Em breve entraremos em contato pelo WhatsApp informado.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="orcamento" className="py-12 px-4 bg-studio-neutral">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-tiktok text-2xl md:text-3xl font-semibold mb-4 text-[hsl(0_0%_17%)]">
            Preencha o formulário de contato
          </h2>
          <p className="font-tiktok text-base leading-relaxed text-[hsl(0_0%_54%)]">
            Ao preencher o formulário, você se candidata a uma vaga no Plano Profissional.
            Mantemos um limite de clientes ativos para preservar o padrão de entrega.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Nome *</label>
              <input type="text" name="nome" required className={inputClass} value={formData.nome} onChange={handleChange} />
            </div>
            <div>
              <label className={labelClass}>Sobrenome *</label>
              <input type="text" name="sobrenome" required className={inputClass} value={formData.sobrenome} onChange={handleChange} />
            </div>
          </div>

          <div>
            <label className={labelClass}>Whatsapp *</label>
            <input type="tel" name="whatsapp" required placeholder="DDD+Número" className={inputClass} value={formData.whatsapp} onChange={handleChange} />
          </div>

          <div>
            <label className={labelClass}>Seu negócio é em medicina, clínica ou advocacia? *</label>
            <div className="space-y-2">
              {["Sim", "Não"].map((option) => (
                <label key={option} className={radioLabelClass}>
                  <input type="radio" name="areaCorreta" value={option} required className="w-5 h-5 accent-[hsl(16,62%,61%)]" checked={formData.areaCorreta === option} onChange={handleChange} />
                  <span className="font-tiktok text-base text-[hsl(0_0%_32%)]">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className={labelClass}>Qual sua área de atuação? *</label>
            <input type="text" name="areaAtuacao" required placeholder="Seu nicho/especialidade" className={inputClass} value={formData.areaAtuacao} onChange={handleChange} />
          </div>

          <div>
            <label className={labelClass}>Você tem time comercial? *</label>
            <div className="space-y-2">
              {["Sim, secretária", "Sim, vendedor dedicado", "Não tenho"].map((option) => (
                <label key={option} className={radioLabelClass}>
                  <input type="radio" name="timeComercial" value={option} required className="w-5 h-5 accent-[hsl(16,62%,61%)]" checked={formData.timeComercial === option} onChange={handleChange} />
                  <span className="font-tiktok text-base text-[hsl(0_0%_32%)]">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className={labelClass}>Faixa de faturamento mensal *</label>
            <div className="space-y-2">
              {["Abaixo de 30k", "Entre 30k - 60k", "60k - 100k", "Acima de 100k"].map((option) => (
                <label key={option} className={radioLabelClass}>
                  <input type="radio" name="faturamento" value={option} required className="w-5 h-5 accent-[hsl(16,62%,61%)]" checked={formData.faturamento === option} onChange={handleChange} />
                  <span className="font-tiktok text-base text-[hsl(0_0%_32%)]">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className={labelClass}>Você precisa começar agora ou pode planejar? *</label>
            <div className="space-y-2">
              {["Preciso de um movimento imediato", "Posso aguardar", "Ainda estou avaliando"].map((option) => (
                <label key={option} className={radioLabelClass}>
                  <input type="radio" name="urgencia" value={option} required className="w-5 h-5 accent-[hsl(16,62%,61%)]" checked={formData.urgencia === option} onChange={handleChange} />
                  <span className="font-tiktok text-base text-[hsl(0_0%_32%)]">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <p className="font-tiktok text-sm text-center text-[hsl(0_0%_54%)]">
            Limitamos a 10 clientes ativos para manter excelência.
          </p>

          <button type="submit" className="w-full btn-gold text-lg py-4 font-tiktok min-h-[44px]">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
