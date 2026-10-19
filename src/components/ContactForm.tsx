import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  nome: z.string().trim().min(1, "Nome obrigatório").max(80),
  sobrenome: z.string().trim().min(1, "Sobrenome obrigatório").max(80),
  whatsapp: z.string().trim().min(8, "WhatsApp inválido").max(30),
  instagram: z.string().trim().min(1, "Instagram obrigatório").max(60),
  nomeNegocio: z.string().trim().min(1, "Nome do negócio obrigatório").max(120),
  areaAtuacao: z.string().trim().min(1, "Área de atuação obrigatória").max(120),
  decisao: z.string().min(1, "Responda quem decide o investimento"),
  marketingHoje: z.string().min(1, "Responda quem cuida do marketing"),
  timeComercial: z.string().min(1, "Responda sobre o time comercial"),
  faturamento: z.string().min(1, "Escolha a faixa de faturamento"),
  urgencia: z.string().min(1, "Responda sobre o prazo"),
});

type FormData = z.infer<typeof formSchema>;

const radioGroups: { name: keyof FormData; label: string; options: string[] }[] = [
  { name: "decisao", label: "Você decide sobre investimentos em marketing? *", options: ["Sim, eu decido", "Decido junto com sócio(a)", "Não, outra pessoa decide"] },
  { name: "marketingHoje", label: "Quem cuida do seu marketing hoje? *", options: ["Eu mesmo(a)", "Alguém da equipe", "Freelancer ou agência", "Ninguém, está parado"] },
  { name: "timeComercial", label: "Você tem time comercial? *", options: ["Sim, secretária", "Sim, vendedor dedicado", "Não tenho"] },
  { name: "faturamento", label: "Faixa de faturamento mensal atual *", options: ["Entre 5 e 15k", "Entre 15 - 30k", "Entre 30k - 60k", "60k - 100k", "Acima de 100k"] },
  { name: "urgencia", label: "Você precisa começar agora ou pode planejar? *", options: ["Preciso de um movimento imediato", "Posso aguardar", "Ainda estou avaliando"] },
];

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: "", sobrenome: "", whatsapp: "", instagram: "", nomeNegocio: "", areaAtuacao: "",
    decisao: "", marketingHoje: "", timeComercial: "", faturamento: "", urgencia: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === "instagram" ? value.replace(/^@+/, "") : value }));
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
      const { error: fnError } = await supabase.functions.invoke("send-contact-email", {
        body: { ...parsed.data, instagram: `@${parsed.data.instagram}` },
        region: "eu-central-1" as any,
      });
      if (fnError) throw fnError;
      setSubmitted(true);
    } catch (err) {
      console.error("send-contact-email error:", err);
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
            <h2 className="font-tiktok text-2xl font-semibold mb-4 text-[hsl(16_62%_61%)]">Formulário enviado com sucesso!</h2>
            <p className="font-tiktok text-base text-[hsl(0_0%_54%)]">Em breve entraremos em contato pelo WhatsApp informado.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="orcamento" className="py-12 px-4 bg-studio-neutral">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-tiktok text-2xl md:text-3xl font-semibold mb-4 text-[hsl(0_0%_17%)]">Preencha o formulário de contato</h2>
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
            <label className={labelClass}>Instagram *</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-tiktok text-base text-[hsl(0_0%_54%)]">@</span>
              <input type="text" name="instagram" required placeholder="nomedousuario" className={inputClass + " pl-9"} value={formData.instagram} onChange={handleChange} />
            </div>
          </div>

          <div>
            <label className={labelClass}>Qual o nome do seu negócio? *</label>
            <input type="text" name="nomeNegocio" required className={inputClass} value={formData.nomeNegocio} onChange={handleChange} />
            <p className="font-tiktok text-xs mt-1 text-[hsl(0_0%_54%)]">Se atua só com seu nome, repita-o aqui.</p>
          </div>

          <div>
            <label className={labelClass}>Qual sua área de atuação? *</label>
            <input type="text" name="areaAtuacao" required placeholder="Ex.: nutrologia, harmonização facial, advocacia, contabilidade" className={inputClass} value={formData.areaAtuacao} onChange={handleChange} />
          </div>

          {radioGroups.map((group) => (
            <div key={group.name}>
              <label className={labelClass}>{group.label}</label>
              <div className="space-y-2">
                {group.options.map((option) => (
                  <label key={option} className={radioLabelClass}>
                    <input type="radio" name={group.name} value={option} required className="w-5 h-5 accent-[hsl(16,62%,61%)]" checked={formData[group.name] === option} onChange={handleChange} />
                    <span className="font-tiktok text-base text-[hsl(0_0%_32%)]">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}

          <p className="font-tiktok text-sm text-center text-[hsl(0_0%_54%)]">Limitamos a 10 clientes ativos para manter excelência.</p>

          {error && <p className="font-tiktok text-sm text-center text-[hsl(0_70%_45%)]">{error}</p>}

          <button type="submit" disabled={sending} className="w-full btn-gold text-lg py-4 font-tiktok min-h-[44px] disabled:opacity-60 disabled:cursor-not-allowed">
            {sending ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
