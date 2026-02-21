import { useEffect, useRef, useState } from "react";
import "../styles/CarruselImage.css"
import { useBreakpoint } from "src/hooks/useBreakpoint";

interface ImageCarouselProps {
  images: string[];
  width:string | false;
  height:string | false;
  visibleCount?: number;
  step?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  responsive?: {
    mobile?: { visibleCount: number; step?: number };
    tablet?: { visibleCount: number; step?: number };
    desktop?: { visibleCount: number; step?: number };
  };
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  width = "auto",
  height = "auto",
  visibleCount = 1,
  step = 1,
  autoPlay = false,
  autoPlayInterval = 3000,
  responsive
}) => {
  const total = images.length;
  const breakpoint = useBreakpoint();

  const responsiveConfig =
    responsive?.[breakpoint] ?? {
      visibleCount,
      step,
    };

  const effectiveVisibleCount = responsiveConfig.visibleCount;
  const effectiveStep = responsiveConfig.step ?? step;

  const slides = [
    ...images.slice(total - effectiveVisibleCount),
    ...images,
    ...images.slice(0, effectiveVisibleCount),
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(effectiveVisibleCount);
  const [withTransition, setWithTransition] = useState<boolean>(true);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  const next = () => {
    setWithTransition(true);
    setCurrentIndex((prev) => prev + effectiveStep);
  };

  const prev = () => {
    setWithTransition(true);
    setCurrentIndex((prev) => prev - effectiveStep);
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
      if (currentIndex >= total + effectiveVisibleCount) {
        setWithTransition(false);
        setCurrentIndex(effectiveVisibleCount);
      }

      if (currentIndex < effectiveVisibleCount) {
        setWithTransition(false);
        setCurrentIndex(total + effectiveVisibleCount - effectiveStep);
      }
    };

    track.addEventListener("transitionend", onTransitionEnd);
    return () => track.removeEventListener("transitionend", onTransitionEnd);
  }, [currentIndex, total, effectiveVisibleCount, effectiveStep]);

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
            transform: `translateX(-${(currentIndex * 100) / effectiveVisibleCount}%)`,
            transition: withTransition ? "transform 0.5s ease" : "none",
          }}
        >
          {slides.map((src, index) => (
            <div
              key={index}
              className="carousel-slide"
              style={{ width: `${100 / effectiveVisibleCount}%` }}
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