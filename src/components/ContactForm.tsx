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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Novo lead - O Plano Profissional");
    const body = encodeURIComponent(
      `Nome: ${formData.nome} ${formData.sobrenome}\nWhatsApp: ${formData.whatsapp}\nÁrea correta: ${formData.areaCorreta}\nÁrea de atuação: ${formData.areaAtuacao}\nTime comercial: ${formData.timeComercial}\nFaturamento: ${formData.faturamento}\nUrgência: ${formData.urgencia}`
    );
    window.location.href = `mailto:igorgagliardi@studio131.com?subject=${subject}&body=${body}`;
    alert("Formulário enviado com sucesso!");
  };

  const inputClass = "w-full px-4 py-3 rounded-lg border border-gray-300 font-ui text-base focus:outline-none focus:ring-2 focus:ring-amber-500";
  const labelClass = "block font-ui text-sm font-medium text-gray-700 mb-2";
  const radioLabelClass = "flex items-center gap-3 cursor-pointer";

  return (
    <section id="orcamento" className="py-16 px-4 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-ui text-2xl md:text-3xl font-semibold mb-4">
            Preencha o formulário de contato
          </h2>
          <p className="font-ui text-base text-gray-600 leading-relaxed">
            Ao preencher o formulário, você se candidata a uma vaga no Plano Profissional.
            Mantemos um limite de clientes ativos para preservar o padrão de entrega.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
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
                  <input type="radio" name="areaCorreta" value={option} required className="w-4 h-4" checked={formData.areaCorreta === option} onChange={handleChange} />
                  <span className="font-ui text-base text-gray-700">{option}</span>
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
                  <input type="radio" name="timeComercial" value={option} required className="w-4 h-4" checked={formData.timeComercial === option} onChange={handleChange} />
                  <span className="font-ui text-base text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className={labelClass}>Faixa de faturamento mensal *</label>
            <div className="space-y-2">
              {["Abaixo de 30k", "Entre 30k - 60k", "60k - 100k", "Acima de 100k"].map((option) => (
                <label key={option} className={radioLabelClass}>
                  <input type="radio" name="faturamento" value={option} required className="w-4 h-4" checked={formData.faturamento === option} onChange={handleChange} />
                  <span className="font-ui text-base text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className={labelClass}>Você precisa começar agora ou pode planejar? *</label>
            <div className="space-y-2">
              {["Preciso de um movimento imediato", "Posso aguardar", "Ainda estou avaliando"].map((option) => (
                <label key={option} className={radioLabelClass}>
                  <input type="radio" name="urgencia" value={option} required className="w-4 h-4" checked={formData.urgencia === option} onChange={handleChange} />
                  <span className="font-ui text-base text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <p className="font-ui text-sm text-gray-500 text-center">
            Limitamos a 10 clientes ativos para manter excelência.
          </p>

          <button type="submit" className="w-full btn-gold text-lg py-4">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
