import { useCallback, useRef, useState } from 'react';

export function SwiperArrowControls({ onPrev, onNext, className = '' }) {
  const classes = ['swiper-arrow-control', className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div
        className="swiper-button-prev"
        role="button"
        tabIndex={0}
        aria-label="Previous slide"
        onClick={onPrev}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onPrev?.();
          }
        }}
      >
        <i className="fa fa-angle-left" aria-hidden="true" />
      </div>
      <div
        className="swiper-button-next"
        role="button"
        tabIndex={0}
        aria-label="Next slide"
        onClick={onNext}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onNext?.();
          }
        }}
      >
        <i className="fa fa-angle-right" aria-hidden="true" />
      </div>
    </div>
  );
}

export function useSwiperNavigation() {
  const [swiper, setSwiper] = useState(null);

  const slidePrev = useCallback(() => {
    swiper?.slidePrev();
  }, [swiper]);

  const slideNext = useCallback(() => {
    swiper?.slideNext();
  }, [swiper]);

  return {
    onSwiper: setSwiper,
    slidePrev,
    slideNext,
  };
}
