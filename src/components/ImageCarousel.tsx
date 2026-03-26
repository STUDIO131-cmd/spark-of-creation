import { useState, useEffect } from "react";

const images = [
  "/images/carousel/1.png",
  "/images/carousel/2.png",
  "/images/carousel/3.png",
  "/images/carousel/4.png",
  "/images/carousel/5.png",
  "/images/carousel/6.png",
  "/images/carousel/7.png",
  "/images/carousel/8.png",
  "/images/carousel/9.png",
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Preload next image
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    const img = new Image();
    img.src = images[nextIndex];
  }, [currentIndex]);

  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="py-8 bg-black">
      <div className="relative max-w-5xl mx-auto px-4 md:px-12">
        {/* Carousel with blur sides */}
        <div className="flex items-center justify-center gap-2 md:gap-4">
          {/* Previous slide (blur) - hidden on mobile */}
          <div className="hidden md:block w-1/4 shrink-0 opacity-40">
            <img
              src={images[prevIndex]}
              alt={`Slide ${prevIndex + 1}`}
              className="w-full rounded-lg object-contain"
              style={{ filter: 'blur(2px)' }}
              loading="lazy"
              decoding="async"
              width={300}
              height={250}
            />
          </div>

          {/* Current slide */}
          <div className="w-full md:w-1/2 shrink-0 transition-all duration-500">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full rounded-lg object-contain mx-auto"
              loading="lazy"
              decoding="async"
              width={500}
              height={400}
            />
          </div>

          {/* Next slide (blur) - hidden on mobile */}
          <div className="hidden md:block w-1/4 shrink-0 opacity-40">
            <img
              src={images[nextIndex]}
              alt={`Slide ${nextIndex + 1}`}
              className="w-full rounded-lg object-contain"
              style={{ filter: 'blur(2px)' }}
              loading="lazy"
              decoding="async"
              width={300}
              height={250}
            />
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-10 text-white/60 hover:text-white transition-colors"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-10 text-white/60 hover:text-white transition-colors"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
