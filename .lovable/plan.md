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

## 4. Formulário
- Trocar "Seu negócio é em medicina, clínica ou advocacia?" por uma pergunta mais aberta. Sugestão:
  **"Como você se apresenta no digital?"**
  - Marca pessoal (profissional liberal)
  - Empresa / clínica / escritório
  - Ambos
- Faixa de faturamento renomeada para "Faixa de faturamento mensal atual" com opções:
  Entre 5 e 15k · Entre 15 - 30k · Entre 30k - 60k · 60k - 100k · Acima de 100k
- O email recebido passa a mostrar a nova pergunta com o rótulo correto.

## 5. Rodapé
Botão "131 FOTOS": remover o selo "EM BREVE" e apontar para https://fotos.studio131.com.br/

## 6. Destino dos formulários (resposta)
Hoje cada envio dispara um email via SMTP da Hostinger (usando a conta configurada nos segredos) para **igorgagliardi@studio131.com.br**. Os envios **não ficam salvos** em lugar nenhum além do email — se um email falhar ou cair no spam, o contato se perde. Recomendo (opcional, só se aprovar) também guardar cada envio numa tabela no backend como cópia de segurança.

## Detalhes técnicos
- Arquivos: HeroSection.tsx, ImageCarousel.tsx, CasesSection.tsx, ContactForm.tsx, Footer.tsx, supabase/functions/send-contact-email/index.ts (rótulo do campo `areaCorreta` no email; nome do campo mantido para compatibilidade).
