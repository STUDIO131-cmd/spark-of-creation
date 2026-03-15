import { useState } from "react";
import { Play } from "lucide-react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="conteudo" className="py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-ui text-2xl md:text-3xl font-semibold mb-2">
          Entenda se estamos prontos para o próximo passo:
        </h2>
        
        <p className="font-ui text-lg text-gray-600 mb-8">
          2 min | Assista a este conteúdo
        </p>

        <div className="relative rounded-xl overflow-hidden shadow-2xl">
          {!isPlaying ? (
            <div 
              className="relative cursor-pointer group"
              onClick={() => setIsPlaying(true)}
            >
              <img
                src="https://www.studio131.com.br/wp-content/uploads/2026/02/Capas-4.jpg"
                alt="Vídeo O Plano Profissional"
                className="w-full h-auto"
              />
              
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={36} className="text-black ml-1" fill="black" />
                </div>
              </div>
            </div>
          ) : (
            <video
              src="https://www.studio131.com.br/wp-content/uploads/2026/02/PP-VSL.mp4"
              controls
              autoPlay
              className="w-full h-auto"
            />
          )}
        </div>

        <a href="#orcamento" className="inline-block btn-gold text-lg mt-8">
          QUERO AVANÇAR
        </a>
      </div>
    </section>
  );
};

export default VideoSection;
