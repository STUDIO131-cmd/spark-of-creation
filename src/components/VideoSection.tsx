import { useState } from "react";
import { Play } from "lucide-react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="conteudo" className="bg-black py-10 md:py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-ui text-xl sm:text-2xl md:text-3xl font-semibold mb-2 text-white">
          Entenda se estamos prontos para o próximo passo:
        </h2>
        
        <p className="font-ui text-base md:text-lg mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
          2 min | Assista a este conteúdo
        </p>

        <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-video max-h-[450px]">
          {!isPlaying ? (
            <div 
              className="relative cursor-pointer group w-full h-full"
              onClick={() => setIsPlaying(true)}
            >
              <img
                src="https://www.studio131.com.br/wp-content/uploads/2026/02/Capas-4.jpg"
                alt="Vídeo O Plano Profissional"
                width={800}
                height={450}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={32} className="ml-1" style={{ color: '#000' }} fill="#000" />
                </div>
              </div>
            </div>
          ) : (
            <video
              src="https://www.studio131.com.br/wp-content/uploads/2026/02/PP-VSL.mp4"
              controls
              autoPlay
              className="w-full h-full object-cover"
              poster="https://www.studio131.com.br/wp-content/uploads/2026/02/Capas-4.jpg"
            />
          )}
        </div>

        <a href="#orcamento" className="inline-block btn-gold text-base md:text-lg mt-8">
          QUERO AVANÇAR
        </a>
      </div>
    </section>
  );
};

export default VideoSection;
