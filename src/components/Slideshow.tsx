import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

interface SlideshowProps {
  images: string[];
  alt?: string;
  intervalMs?: number;
  stageHeightClass?: string;
}

export const Slideshow: React.FC<SlideshowProps> = ({
  images,
  alt = 'DENKIS project page',
  intervalMs = 5500,
  stageHeightClass = 'h-[140px] sm:h-[160px] md:h-[175px]',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const total = images.length;

  const goToNext = useCallback(() => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goToPrev = useCallback(() => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
  };

  // Automatic slow fade-in/fade-out rotation
  useEffect(() => {
    if (total <= 1 || isPaused || isLightboxOpen) return;

    const timer = setInterval(() => {
      goToNext();
    }, intervalMs);

    return () => clearInterval(timer);
  }, [total, isPaused, isLightboxOpen, intervalMs, goToNext]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsLightboxOpen(false);
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, goToNext, goToPrev]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <>
      <div
        className="group relative w-full rounded border border-slate-200/90 bg-white shadow-xs overflow-hidden flex flex-col transition-all duration-300 hover:shadow-sm"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        aria-roledescription="carousel"
        aria-label="Project images slideshow"
      >
        {/* Compact Image Stage matching text height */}
        <div className={`relative w-full ${stageHeightClass} bg-slate-50 overflow-hidden flex items-center justify-center select-none`}>
          {images.map((src, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={src + index}
                className={`absolute inset-0 w-full h-full flex items-center justify-center p-2 transition-opacity duration-1000 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
                aria-hidden={!isActive}
              >
                <img
                  src={src}
                  alt={`${alt} — ${index + 1}`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  className="max-w-full max-h-full w-auto h-auto object-contain rounded-xs block mx-auto cursor-zoom-in"
                  onClick={() => setIsLightboxOpen(true)}
                  title="Click to view full size"
                />
              </div>
            );
          })}

          {/* Quick Expand Button on Top-Right */}
          <button
            onClick={() => setIsLightboxOpen(true)}
            className="absolute top-1.5 right-1.5 z-20 p-1 rounded bg-white/90 hover:bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 shadow-2xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 focus:opacity-100"
            title="Expand to full screen"
            aria-label="Expand image"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>

          {/* Previous / Next Arrow Controls */}
          {total > 1 && (
            <>
              <button
                onClick={goToPrev}
                className="absolute left-1.5 top-1/2 -translate-y-1/2 z-20 p-1 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-slate-950 border border-slate-200 shadow-2xs opacity-0 group-hover:opacity-100 transition-all duration-200 focus:opacity-100 active:scale-95"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-1.5 top-1/2 -translate-y-1/2 z-20 p-1 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-slate-950 border border-slate-200 shadow-2xs opacity-0 group-hover:opacity-100 transition-all duration-200 focus:opacity-100 active:scale-95"
                aria-label="Next image"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </>
          )}

          {/* Bottom Bar with Counter Badge and Dots */}
          {total > 1 && (
            <div className="absolute bottom-1.5 left-0 right-0 z-20 flex items-center justify-between px-2.5 pointer-events-none">
              {/* Dot Indicators */}
              <div className="flex items-center space-x-1 pointer-events-auto bg-black/40 backdrop-blur-xs px-1.5 py-0.5 rounded-full">
                {images.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => goToSlide(dotIdx)}
                    className={`transition-all duration-300 rounded-full ${
                      dotIdx === currentIndex
                        ? 'w-3 h-1 bg-amber-400'
                        : 'w-1 h-1 bg-white/70 hover:bg-white'
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>

              {/* Page Counter badge */}
              <div className="text-[10px] font-mono font-medium text-slate-600 bg-white/90 backdrop-blur-xs px-1.5 py-0.2 rounded border border-slate-200/90 shadow-2xs pointer-events-auto">
                {currentIndex + 1} / {total}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox / Full Size Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 select-none"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 z-50 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close full size view"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Next / Prev in Lightbox */}
          {total > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2.5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2.5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Full size image */}
          <div 
            className="max-w-6xl max-h-[88vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex]}
              alt={`${alt} — ${currentIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded bg-white shadow-2xl"
            />
          </div>

          {/* Lightbox slide counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs font-mono text-white/80 bg-black/50 px-3 py-1 rounded-full border border-white/20">
            {currentIndex + 1} / {total}
          </div>
        </div>
      )}
    </>
  );
};
