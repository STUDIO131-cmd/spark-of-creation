import { SMTPClient } from "npm:emailjs@4.0.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SMTP_HOST = "smtp.hostinger.com";
const SMTP_PORT = 465;
const TO_EMAIL = "igorgagliardi@studio131.com.br";

const FIELDS = [
  ["nome", "Nome"],
  ["sobrenome", "Sobrenome"],
  ["whatsapp", "WhatsApp"],
  ["instagram", "Instagram"],
  ["nomeNegocio", "Nome do negócio"],
  ["areaAtuacao", "Área de atuação"],
  ["decisao", "Decide investimento em marketing"],
  ["marketingHoje", "Quem cuida do marketing hoje"],
  ["timeComercial", "Time comercial"],
  ["faturamento", "Faturamento mensal atual"],
  ["urgencia", "Urgência"],
] as const;

type Payload = Record<(typeof FIELDS)[number][0], string>;

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
}

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function sendWithRetry(message: Parameters<SMTPClient["sendAsync"]>[0], SMTP_USER: string, SMTP_PASS: string) {
  let lastError: unknown;

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const client = new SMTPClient({
        user: SMTP_USER,
        password: SMTP_PASS,
        host: SMTP_HOST,
        port: SMTP_PORT,
        ssl: true,
      });

      await client.sendAsync(message);
      return;
    } catch (err) {
      lastError = err;
      console.error(`SMTP send attempt ${attempt} failed:`, err);
      if (attempt < 3) await wait(700 * attempt);
    }
  }

  throw lastError;
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

    for (const [k] of FIELDS) {
      if (!data[k] || typeof data[k] !== "string" || data[k].length > 500) {
        return new Response(JSON.stringify({ error: `Campo inválido: ${k}` }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    const html = `<h2>Novo formulário de contato — Studio 131</h2>` +
      FIELDS.map(([k, l]) => `<p><strong>${l}:</strong> ${escapeHtml(data[k])}</p>`).join("");

    const text = `Novo formulário de contato\n\n` +
      FIELDS.map(([k, l]) => `${l}: ${data[k]}`).join("\n");

    await sendWithRetry({
      from: SMTP_USER,
      to: TO_EMAIL,
      subject: `Novo contato — ${data.nome} ${data.sobrenome}`,
      text,
      attachment: [{ data: html, alternative: true }],
    } as any, SMTP_USER, SMTP_PASS);

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
