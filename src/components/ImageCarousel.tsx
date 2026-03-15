import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://www.studio131.com.br/wp-content/uploads/2026/02/1.png",
  "https://www.studio131.com.br/wp-content/uploads/2026/02/2.png",
  "https://www.studio131.com.br/wp-content/uploads/2026/02/3.png",
  "https://www.studio131.com.br/wp-content/uploads/2026/02/4.png",
  "https://www.studio131.com.br/wp-content/uploads/2026/02/5.png",
  "https://www.studio131.com.br/wp-content/uploads/2026/02/6.png",
  "https://www.studio131.com.br/wp-content/uploads/2026/02/7.png",
  "https://www.studio131.com.br/wp-content/uploads/2026/02/8.png",
  "https://www.studio131.com.br/wp-content/uploads/2026/02/9.png",
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Preload next image
  useEffect(() => {
    const nextIdx = (currentIndex + 1) % images.length;
    const img = new Image();
    img.src = images[nextIdx];
  }, [currentIndex]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="py-8 bg-black">
      <div className="relative max-w-4xl mx-auto px-12">
        <button
          onClick={goToPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white transition-colors"
          aria-label="Anterior"
        >
          <ChevronLeft size={48} />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white transition-colors"
          aria-label="Próximo"
        >
          <ChevronRight size={48} />
        </button>

        <div className="flex justify-center items-center min-h-[300px] md:min-h-[400px]">
          <div className="relative">
            {!loaded[currentIndex] && (
              <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-lg animate-pulse" />
            )}
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              width={600}
              height={400}
              loading={currentIndex === 0 ? "eager" : "lazy"}
              onLoad={() => setLoaded(prev => ({ ...prev, [currentIndex]: true }))}
              className="max-h-[300px] md:max-h-[400px] rounded-lg object-contain transition-opacity duration-500"
              style={{ opacity: loaded[currentIndex] ? 1 : 0 }}
            />
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentIndex ? 'bg-amber-500 w-4' : 'bg-white/30'
              }`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
