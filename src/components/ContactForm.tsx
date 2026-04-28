import { useState } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";

const EMAILJS_SERVICE_ID = "service_l3hskrl";
const EMAILJS_TEMPLATE_ID = "template_y5uergl";
const EMAILJS_PUBLIC_KEY = "r2C6rMxegs-BaaEqv";

const formSchema = z.object({
  nome: z.string().trim().min(1, "Nome obrigatório").max(80),
  sobrenome: z.string().trim().min(1, "Sobrenome obrigatório").max(80),
  whatsapp: z.string().trim().min(8, "WhatsApp inválido").max(30),
  areaCorreta: z.string().min(1),
  areaAtuacao: z.string().trim().min(1).max(120),
  timeComercial: z.string().min(1),
  faturamento: z.string().min(1),
  urgencia: z.string().min(1),
});

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
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const parsed = formSchema.safeParse(formData);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Dados inválidos");
      return;
    }

    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          nome: parsed.data.nome,
          sobrenome: parsed.data.sobrenome,
          whatsapp: parsed.data.whatsapp,
          areaCorreta: parsed.data.areaCorreta,
          areaAtuacao: parsed.data.areaAtuacao,
          timeComercial: parsed.data.timeComercial,
          faturamento: parsed.data.faturamento,
          urgencia: parsed.data.urgencia,
          to_email: "igorgagliardi@studio131.com.br",
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Não foi possível enviar agora. Tente novamente em instantes.");
    } finally {
      setSending(false);
    }
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

          {error && (
            <p className="font-tiktok text-sm text-center text-[hsl(0_70%_45%)]">{error}</p>
          )}

          <button
            type="submit"
            disabled={sending}
            className="w-full btn-gold text-lg py-4 font-tiktok min-h-[44px] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {sending ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
