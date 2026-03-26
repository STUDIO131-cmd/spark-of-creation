import { useState } from "react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoSrc = "/videos/PP-2.mp4";

  return (
    <section id="conteudo" className="py-12 px-4 bg-studio-dark">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-tiktok text-2xl md:text-3xl font-semibold mb-2 text-card-title">
          Entenda se estamos prontos para o próximo passo:
        </h2>
        
        <div className="flex items-center justify-center gap-2 mb-8">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(16 62% 61%)" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <p className="font-tiktok text-base text-card-accent">
            2 min | Assista a este conteúdo
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-[320px] md:max-w-[360px]">
            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl" style={{ backgroundColor: 'hsl(0 0% 17%)' }}>
              {!isPlaying ? (
                <button
                  type="button"
                  className="relative group w-full h-full overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-card-accent focus-visible:ring-offset-2 focus-visible:ring-offset-studio-dark"
                  onClick={() => setIsPlaying(true)}
                  aria-label="Reproduzir vídeo Clique e analise"
                >
                  <video
                    src={videoSrc}
                    className="w-full h-full object-cover scale-[1.02]"
                    muted
                    playsInline
                    autoPlay
                    loop
                    preload="metadata"
                  />

                  <div className="absolute inset-0 bg-white/10 backdrop-blur-[6px] transition-all duration-300 group-hover:bg-white/5 group-hover:backdrop-blur-[3px]" />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="white" stroke="none">
                        <polygon points="6 3 20 12 6 21" />
                      </svg>
                    </div>
                    <span className="font-tiktok text-white text-sm font-medium tracking-wider uppercase opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      Clique e analise
                    </span>
                  </div>
                </button>
              ) : (
                <video
                  src={videoSrc}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full"
                  style={{ objectFit: 'contain' }}
                />
              )}
            </div>
          </div>
        </div>

        <a
          href="#orcamento"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg font-tiktok font-medium text-lg text-white transition-all duration-300 hover:-translate-y-0.5 bg-gold min-h-[44px]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
          QUERO AVANÇAR
        </a>
      </div>
    </section>
  );
};

export default VideoSection;
