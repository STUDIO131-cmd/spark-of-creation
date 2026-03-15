import { ArrowUp } from "lucide-react";

const footerLinks = [
  {
    label: "Campanhas",
    href: "https://welcome-back-craft.lovable.app",
  },
  {
    label: "Fotografia",
    href: "https://redo-with-charm.lovable.app",
  },
  {
    label: "The Journey",
    subtitle: "FRENTE EDUCACIONAL",
    href: "#",
  },
  {
    label: "Voltar ao Topo",
    action: "scrollToTop" as const,
  },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  return (
    <footer className="bg-black py-8 md:py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="https://www.studio131.com.br/wp-content/uploads/2026/01/PlanoProfissional-Aguia-02.png"
            alt="O Plano Profissional"
            className="w-32 md:w-40 h-auto opacity-70"
          />
        </div>

        {/* Button grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto mb-10">
          {footerLinks.map((link, index) => {
            const isScrollTop = "action" in link && link.action === "scrollToTop";
            
            const buttonContent = (
              <div className="flex items-center justify-center gap-2">
                {isScrollTop && <ArrowUp size={16} />}
                <span className="font-ui text-sm font-medium">{link.label}</span>
              </div>
            );

            const subtitle = "subtitle" in link && link.subtitle ? (
              <span className="block font-ui text-[10px] tracking-widest mt-0.5 opacity-60">
                {link.subtitle}
              </span>
            ) : null;

            const classes = "block w-full py-3 px-4 rounded-lg border text-center transition-all duration-300 hover:-translate-y-0.5"
              + " border-white/15 hover:border-amber-500/50 text-white/80 hover:text-white";

            if (isScrollTop) {
              return (
                <button
                  key={index}
                  onClick={scrollToTop}
                  className={classes}
                >
                  {buttonContent}
                  {subtitle}
                </button>
              );
            }

            return (
              <a
                key={index}
                href={link.href}
                className={classes}
              >
                {buttonContent}
                {subtitle}
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6">
          <p className="font-ui text-xs text-center" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Studio 131 © Copyright 2026 — Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
