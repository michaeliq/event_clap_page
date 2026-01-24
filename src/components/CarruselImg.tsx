import { useEffect, useRef, useState } from "react";
import "../styles/CarruselImage.css"

interface ImageCarouselProps {
  images: string[];
  visibleCount?: number;
  step?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number; // ms
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  visibleCount = 1,
  step = 1,
  autoPlay = false,
  autoPlayInterval = 3000,
}) => {
  const total = images.length;

  const slides = [
    ...images.slice(total - visibleCount),
    ...images,
    ...images.slice(0, visibleCount),
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(visibleCount);
  const [withTransition, setWithTransition] = useState<boolean>(true);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  const next = () => {
    setWithTransition(true);
    setCurrentIndex((prev) => prev + step);
  };

  const prev = () => {
    setWithTransition(true);
    setCurrentIndex((prev) => prev - step);
  };

  /* 🔁 AUTOPLAY */
  useEffect(() => {
    if (!autoPlay || isPaused) return;

    intervalRef.current = window.setInterval(() => {
      next();
    }, autoPlayInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [autoPlay, autoPlayInterval, isPaused]);

  /* ♻ LOOP INFINITO */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onTransitionEnd = () => {
      if (currentIndex >= total + visibleCount) {
        setWithTransition(false);
        setCurrentIndex(visibleCount);
      }

      if (currentIndex < visibleCount) {
        setWithTransition(false);
        setCurrentIndex(total + visibleCount - step);
      }
    };

    track.addEventListener("transitionend", onTransitionEnd);
    return () => track.removeEventListener("transitionend", onTransitionEnd);
  }, [currentIndex, total, visibleCount, step]);

  return (
    <div
      className="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <button className="arrow left" onClick={prev}>
        ❮
      </button>

      <div className="carousel-window">
        <div
          ref={trackRef}
          className="carousel-track"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleCount}%)`,
            transition: withTransition ? "transform 0.5s ease" : "none",
          }}
        >
          {slides.map((src, index) => (
            <div
              key={index}
              className="carousel-slide"
              style={{ width: `${100 / visibleCount}%` }}
            >
              <img src={src} alt={`slide-${index}`} draggable={false} />
            </div>
          ))}
        </div>
      </div>

      <button className="arrow right" onClick={next}>
        ❯
      </button>
    </div>
  );
};

export default ImageCarousel;