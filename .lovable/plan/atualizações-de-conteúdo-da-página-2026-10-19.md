# Atualizações de conteúdo da página

## 1. Topo (header)
Substituir os textos por:
- "Criamos o seu conteúdo no *Instagram*" / "(mas não é só isso)" (mesmo estilo de duas linhas atual)
- "— O PLANO É UM MÉTODO."
- "Para marcas pessoais ou negócios que desejam estruturar o canal digital como ativo gerador de visibilidade, demanda e receita."
- Nova linha em destaque: "Operação + Consultoria"

## 2. Slider (segunda seção)
Remover a imagem "médicos, clínicas, hof, estética & advocacia" (Dra. Giovana) da lista de slides. Identifico qual dos 9 arquivos é comparando visualmente antes de remover.

## 3. Cases
- Remover Juliana Baldo e Henry Luchetti.
- Atualizar textos de Giovana Assad e Brenda Braga com os novos textos enviados.
- Ficam 3 cases: Giovana, Brenda, Fernanda. Layout passa a ser 3 cards em linha no desktop, 2+1 centralizado no tablet, coluna única no celular.

## 4. Formulário (nova ordem)
A pergunta "medicina, clínica ou advocacia?" sai. A "área de atuação" já cobre isso de forma aberta.

1. Nome * / Sobrenome *
2. WhatsApp *
3. Instagram * — campo com "@" fixo à frente (placeholder: nomedousuario)
4. Qual o nome do seu negócio? * — dica abaixo: "Se atua só com seu nome, repita-o aqui."
5. Qual sua área de atuação? * — placeholder: "Ex.: nutrologia, harmonização facial, advocacia, contabilidade"
6. **Você decide sobre investimentos em marketing?** * (versão mais simples da pergunta de posição)
   - Sim, eu decido
   - Decido junto com sócio(a)
   - Não, outra pessoa decide
7. **Quem cuida do seu marketing hoje?** * (versão mais curta)
   - Eu mesmo(a)
   - Alguém da equipe
   - Freelancer ou agência
   - Ninguém, está parado
8. Você tem time comercial? * (mantida)
9. Faixa de faturamento mensal atual * — Entre 5 e 15k · Entre 15 - 30k · Entre 30k - 60k · 60k - 100k · Acima de 100k
10. Você precisa começar agora ou pode planejar? * (mantida)

Por que simplificar a posição: a pergunta original mistura cargo e poder de decisão. O que importa para vendas é só "quem decide o investimento", então perguntar isso diretamente é mais rápido de responder e mais útil para filtrar.

O email recebido mostra todos os campos novos com rótulos claros.

## 5. Rodapé
Botão "131 FOTOS": remover o selo "EM BREVE" e apontar para https://fotos.studio131.com.br/

## 6. Destino dos formulários (resposta)
Hoje cada envio dispara um email via SMTP da Hostinger (usando a conta configurada nos segredos) para **igorgagliardi@studio131.com.br**. Os envios **não ficam salvos** em lugar nenhum além do email — se um email falhar ou cair no spam, o contato se perde. Recomendo (opcional, só se aprovar) também guardar cada envio numa tabela no backend como cópia de segurança.

## Detalhes técnicos
- Arquivos: HeroSection.tsx, ImageCarousel.tsx, CasesSection.tsx, ContactForm.tsx, Footer.tsx, supabase/functions/send-contact-email/index.ts (rótulo do campo `areaCorreta` no email; nome do campo mantido para compatibilidade).
