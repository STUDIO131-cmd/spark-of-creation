

## Refactoring Completo — Design System Studio 131

Este é um refactoring extenso que toca praticamente todos os arquivos do projeto. Vou organizar em fases claras.

---

### Fase 1: Design System — Variáveis CSS e Cores

**Arquivo: `src/index.css`**

Mapear todas as cores atuais para a paleta Studio 131:

| Cor Atual | Uso | Nova Cor Studio 131 |
|-----------|-----|---------------------|
| `#CF8B46` / `#E6B281` (gold/accent) | Destaques, botões, links | `#d87e5f` (tom quente) |
| `#F59E05` (hero bg fallback) | Background Hero | `#d15e4a` (tom quente) |
| `#350328` (ticker bg) | Ticker background | `#3c0e29` (vinho) |
| `#000602` (card-dark bg) | Cards escuros | `#2b2b2b` (preto técnico) |
| `#F6FAFF` (card title) | Títulos em cards | `#efe7da` (creme) |
| `#E3E4E3` (card body) | Texto corpo cards | `#eaeaea` (neutro) |
| `bg-white` (seções claras) | Backgrounds claros | `#efe7da` (creme principal) |
| `bg-gray-50` (form bg) | Background formulário | `#eaeaea` |
| `gray-300/500/600/700` | Bordas, labels, textos | Neutros: `#cfcece`, `#888989`, `#515151` |
| `bg-black` (seções escuras) | Backgrounds escuros | `#2b2b2b` (preto técnico) |
| `amber-500` (focus ring) | Focus state | `#d87e5f` |
| `bg-gray-900` (video bg) | Video container | `#2b2b2b` |

Atualizar as classes semânticas em `@layer components`:
- `.text-gold`, `.border-gold`, `.bg-gold` → `#d87e5f`
- `.btn-gold` → bg `#d87e5f`, hover `#c73c32`
- `.bg-ticker` → `#3c0e29`
- `.card-dark` → bg `#2b2b2b`
- `.text-card-title` → `#efe7da`
- `.text-card-accent` → `#d87e5f`
- `.text-card-body` → `#eaeaea`

Atualizar variáveis CSS `:root` para usar tons da paleta Studio 131 (converter hex para HSL).

---

### Fase 2: Tipografia Unificada — TikTok Sans

**Arquivo: `src/index.css`**

- Remover as declarações `@font-face` de NT Epika e Moneta
- Manter apenas TikTok Sans (já presente com Light, Regular, Medium, SemiBold, Bold)
- Atualizar classes `.font-display`, `.font-body` para apontar para TikTok Sans
- Garantir `font-display: swap` em todas as declarações (já implementado)

**Todos os componentes**: Substituir `font-moneta` e `font-epika` por `font-tiktok`.

Componentes afetados: `CasesSection.tsx`, `DifferentialsSection.tsx`

---

### Fase 3: Atualização de Cores nos Componentes

**`HeroSection.tsx`**: `backgroundColor: '#F59E05'` → `'#d15e4a'`

**`VideoSection.tsx`**: `stroke="#CF8B46"` → `stroke="#d87e5f"`, `bg-gray-900` → estilo inline `#2b2b2b`

**`ContactForm.tsx`**:
- `bg-gray-50` → estilo `#eaeaea`
- `border-gray-300` → `border-[#cfcece]`
- `text-gray-700` → `text-[#515151]`
- `text-gray-600` → `text-[#888989]`
- `text-gray-500` → `text-[#888989]`
- `ring-amber-500` → `ring-[#d87e5f]`
- `style={{ color: '#CF8B46' }}` → `#d87e5f`

**`Footer.tsx`**: `bg-black` → `bg-[#2b2b2b]`

**`Index.tsx`**: `bg-white` → `bg-[#efe7da]`

**`CasesSection.tsx`**: `bg-white` → `bg-[#efe7da]`

**`DifferentialsSection.tsx`**: `bg-white` → `bg-[#efe7da]`

---

### Fase 4: Micro-interações e Performance Premium

**Todos os componentes interativos**:
- Adicionar `transition-all duration-300 ease-in-out` em botões, links, cards
- Cards: `hover:scale-[1.02] hover:shadow-xl transition-all duration-300`
- Botões de navegação do carrossel: aumentar área de toque para `min-w-[44px] min-h-[44px]`
- Radio buttons no form: `min-w-[44px] min-h-[44px]` para área de toque
- Dots do carrossel: `w-3 h-3` (mínimo 44px com padding)

**Safe Areas (iOS/Android)**:
- Adicionar `env(safe-area-inset-*)` no body/root via CSS
- `padding-top: env(safe-area-inset-top)` no hero
- `padding-bottom: env(safe-area-inset-bottom)` no footer

**Overflow prevention**:
- Adicionar `overflow-x: hidden` no root `<div>` e `<body>`

---

### Fase 5: Responsividade e Touch

**`src/index.css`** (global):
```css
html { -webkit-text-size-adjust: 100%; }
body { overflow-x: hidden; }
@supports (padding: env(safe-area-inset-top)) {
  body {
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
  }
}
```

**Todos os botões e links interativos**: Garantir `min-h-[44px] min-w-[44px]` (WCAG touch target).

**Carrossel arrows**: Aumentar de 32px para 44px.

---

### Resumo de Arquivos Modificados

| Arquivo | Mudanças |
|---------|----------|
| `src/index.css` | Cores, tipografia, safe areas, overflow, variáveis CSS |
| `src/pages/Index.tsx` | bg-white → bg creme |
| `src/components/HeroSection.tsx` | Cor fallback |
| `src/components/ServicesTicker.tsx` | Já usa classes semânticas (atualizam via CSS) |
| `src/components/ImageCarousel.tsx` | Touch targets, transition |
| `src/components/ValueProposition.tsx` | Já usa classes semânticas |
| `src/components/CasesSection.tsx` | bg-white → creme, font-moneta → font-tiktok, hover cards |
| `src/components/VideoSection.tsx` | Cores inline, bg-gray |
| `src/components/DifferentialsSection.tsx` | bg-white → creme, font-moneta → font-tiktok, hover cards |
| `src/components/CtaSection.tsx` | Já usa classes semânticas |
| `src/components/ContactForm.tsx` | Todas as cores gray → paleta Studio 131 |
| `src/components/Footer.tsx` | bg-black → preto técnico |

