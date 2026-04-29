import { SMTPClient } from "npm:emailjs@4.0.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SMTP_HOST = "smtp.hostinger.com";
const SMTP_PORT = 465;
const TO_EMAIL = "igorgagliardi@studio131.com.br";

interface Payload {
  nome: string;
  sobrenome: string;
  whatsapp: string;
  areaCorreta: string;
  areaAtuacao: string;
  timeComercial: string;
  faturamento: string;
  urgencia: string;
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const SMTP_USER = Deno.env.get("SMTP_USER");
    const SMTP_PASS = Deno.env.get("SMTP_PASS");
    if (!SMTP_USER || !SMTP_PASS) {
      throw new Error("SMTP credentials not configured");
    }

    const data = (await req.json()) as Payload;

    // Validação básica
    const required: (keyof Payload)[] = ["nome", "sobrenome", "whatsapp", "areaCorreta", "areaAtuacao", "timeComercial", "faturamento", "urgencia"];
    for (const k of required) {
      if (!data[k] || typeof data[k] !== "string" || data[k].length > 500) {
        return new Response(JSON.stringify({ error: `Campo inválido: ${k}` }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    const client = new SMTPClient({
      user: SMTP_USER,
      password: SMTP_PASS,
      host: SMTP_HOST,
      port: SMTP_PORT,
      ssl: true,
    });

    const html = `
      <h2>Novo formulário de contato — Studio 131</h2>
      <p><strong>Nome:</strong> ${escapeHtml(data.nome)} ${escapeHtml(data.sobrenome)}</p>
      <p><strong>WhatsApp:</strong> ${escapeHtml(data.whatsapp)}</p>
      <p><strong>Área correta (medicina/clínica/advocacia):</strong> ${escapeHtml(data.areaCorreta)}</p>
      <p><strong>Área de atuação:</strong> ${escapeHtml(data.areaAtuacao)}</p>
      <p><strong>Time comercial:</strong> ${escapeHtml(data.timeComercial)}</p>
      <p><strong>Faturamento:</strong> ${escapeHtml(data.faturamento)}</p>
      <p><strong>Urgência:</strong> ${escapeHtml(data.urgencia)}</p>
    `;

    const text = `Novo formulário de contato\n\n` +
      `Nome: ${data.nome} ${data.sobrenome}\n` +
      `WhatsApp: ${data.whatsapp}\n` +
      `Área correta: ${data.areaCorreta}\n` +
      `Área de atuação: ${data.areaAtuacao}\n` +
      `Time comercial: ${data.timeComercial}\n` +
      `Faturamento: ${data.faturamento}\n` +
      `Urgência: ${data.urgencia}\n`;

    await client.sendAsync({
      from: SMTP_USER,
      to: TO_EMAIL,
      subject: `Novo contato — ${data.nome} ${data.sobrenome}`,
      text,
      attachment: [{ data: html, alternative: true }],
    } as any);

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("send-contact-email error:", err);
    const msg = err instanceof Error ? err.message : "Unknown error";
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
