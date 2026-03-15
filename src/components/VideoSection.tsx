import { useState } from "react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="conteudo" className="py-12 px-4 bg-black">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-tiktok text-2xl md:text-3xl font-semibold mb-2" style={{ color: '#F6FAFF' }}>Entenda se estamos prontos
para o próximo passo:
        </h2>
        
        <div className="flex items-center justify-center gap-2 mb-8">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#CF8B46" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <p className="font-tiktok text-base" style={{ color: '#E6B281' }}>
            2 min | Assista a este conteúdo
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-[320px] md:max-w-[360px]">
            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-gray-900 shadow-2xl">
              {!isPlaying ? (
                <div
                  className="relative cursor-pointer group w-full h-full"
                  onClick={() => setIsPlaying(true)}>
                  <img
                    src="https://www.studio131.com.br/wp-content/uploads/2026/02/Capas-4.jpg"
                    alt="Vídeo O Plano Profissional"
                    className="w-full h-full object-cover"
                    width={320}
                    height={569} />
                </div>
              ) : (
                <video
                  src="https://www.studio131.com.br/wp-content/uploads/2026/02/PP-VSL.mp4"
                  controls
                  autoPlay
                  className="w-full h-full"
                  style={{ objectFit: 'contain' }} />
              )}
            </div>
          </div>
        </div>

        <a
          href="#orcamento"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg font-tiktok font-medium text-lg text-white transition-all hover:-translate-y-0.5"
          style={{ backgroundColor: '#CF8B46' }}>
          
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
          QUERO AVANÇAR
        </a>
      </div>
    </section>);

};

export default VideoSection;