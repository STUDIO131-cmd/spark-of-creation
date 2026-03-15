import { useState } from "react";
import { motion } from "framer-motion";

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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Aqui você integra com seu backend/email
    console.log("Form data:", formData);
    
    // Simula envio
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert("Formulário enviado com sucesso!");
    setIsSubmitting(false);
  };

  const inputClass = "w-full px-4 py-3 rounded-lg border border-gray-300 font-ui text-base focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent";
  const labelClass = "block font-ui text-sm font-medium text-gray-700 mb-2";
  const radioGroupClass = "space-y-2";
  const radioLabelClass = "flex items-center gap-3 cursor-pointer";
  const radioInputClass = "w-4 h-4 text-amber-600 focus:ring-amber-500";

  return (
    <section id="orcamento" className="py-16 px-4 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-ui text-2xl md:text-3xl font-semibold mb-4">
            Preencha o formulário de contato
          </h2>
          <p className="font-ui text-base text-gray-600 leading-relaxed">
            Ao preencher o formulário abaixo, você se candidata a uma vaga no Plano Profissional 
            e autoriza o envio de atualizações sobre as próximas etapas. Mantemos um limite de 
            clientes ativos para preservar o padrão de entrega. Por isso, as vagas funcionam por 
            lista de interesse. <strong>Aplique-se preenchendo todas as informações abaixo.</strong>
          </p>
        </motion.div>

        {/* Formulário */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Nome e Sobrenome */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Nome *</label>
              <input
                type="text"
                name="nome"
                required
                className={inputClass}
                value={formData.nome}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className={labelClass}>Sobrenome *</label>
              <input
                type="text"
                name="sobrenome"
                required
                className={inputClass}
                value={formData.sobrenome}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* WhatsApp */}
          <div>
            <label className={labelClass}>Whatsapp *</label>
            <input
              type="tel"
              name="whatsapp"
              required
              placeholder="DDD+Número"
              className={inputClass}
              value={formData.whatsapp}
              onChange={handleChange}
            />
          </div>

          {/* Área correta */}
          <div>
            <label className={labelClass}>
              Seu negócio está em alguma dessas áreas: medicina (saúde), clínica, hof ou advocacia? *
            </label>
            <div className={radioGroupClass}>
              {["Sim", "Não"].map((option) => (
                <label key={option} className={radioLabelClass}>
                  <input
                    type="radio"
                    name="areaCorreta"
                    value={option}
                    required
                    className={radioInputClass}
                    checked={formData.areaCorreta === option}
                    onChange={handleChange}
                  />
                  <span className="font-ui text-base text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Área de atuação */}
          <div>
            <label className={labelClass}>Qual sua área de atuação específica? *</label>
            <input
              type="text"
              name="areaAtuacao"
              required
              placeholder="Indique o seu nicho/especialidade"
              className={inputClass}
              value={formData.areaAtuacao}
              onChange={handleChange}
            />
          </div>

          {/* Time comercial */}
          <div>
            <label className={labelClass}>Você tem time comercial? *</label>
            <div className={radioGroupClass}>
              {["Sim, secretária", "Sim, vendedor dedicado", "Não tenho"].map((option) => (
                <label key={option} className={radioLabelClass}>
                  <input
                    type="radio"
                    name="timeComercial"
                    value={option}
                    required
                    className={radioInputClass}
                    checked={formData.timeComercial === option}
                    onChange={handleChange}
                  />
                  <span className="font-ui text-base text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Faturamento */}
          <div>
            <label className={labelClass}>Faixa de faturamento mensal *</label>
            <div className={radioGroupClass}>
              {["Abaixo de 30k", "Entre 30k - 60k", "60k - 100k", "Acima de 100k"].map((option) => (
                <label key={option} className={radioLabelClass}>
                  <input
                    type="radio"
                    name="faturamento"
                    value={option}
                    required
                    className={radioInputClass}
                    checked={formData.faturamento === option}
                    onChange={handleChange}
                  />
                  <span className="font-ui text-base text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Urgência */}
          <div>
            <label className={labelClass}>Você precisa começar agora ou pode planejar? *</label>
            <div className={radioGroupClass}>
              {[
                "Preciso de um movimento imediato",
                "Posso aguardar a abertura de novas vagas",
                "Ainda estou avaliando possibilidades"
              ].map((option) => (
                <label key={option} className={radioLabelClass}>
                  <input
                    type="radio"
                    name="urgencia"
                    value={option}
                    required
                    className={radioInputClass}
                    checked={formData.urgencia === option}
                    onChange={handleChange}
                  />
                  <span className="font-ui text-base text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Observação */}
          <p className="font-ui text-sm text-gray-500 text-center">
            Limitamos a 10 clientes ativos para manter excelência.
          </p>

          {/* Botão */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-gold text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
