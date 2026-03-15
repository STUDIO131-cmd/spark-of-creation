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
  "https://www.studio131.com.br/wp-content/uploads/2026/02/2-3.png",
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < slidesToShow; i++) {
      const index = (currentIndex + i) % images.length;
      visible.push(images[index]);
    }
    return visible;
  };

  return (
    <section className="py-8 bg-black">
      <div className="relative max-w-6xl mx-auto px-12">
        {/* Setas */}
        <button
          onClick={goToPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-white hover:opacity-70 transition-opacity"
        >
          <ChevronLeft size={54} />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-white hover:opacity-70 transition-opacity"
        >
          <ChevronRight size={54} />
        </button>

        {/* Imagens */}
        <div className="flex gap-6 justify-center">
          {getVisibleImages().map((src, index) => (
            <div 
              key={index}
              className="flex-shrink-0 transition-transform duration-500"
              style={{ width: `calc(${100 / slidesToShow}% - 1rem)` }}
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto rounded-[10px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
