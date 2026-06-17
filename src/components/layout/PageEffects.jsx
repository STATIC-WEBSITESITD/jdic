import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { loadLegacyScripts, reinitializeLegacyPage } from '../../utils/legacyAssets';

export function applyPageImages() {
  document.querySelectorAll('[data-image-src]').forEach((el) => {
    const src = el.getAttribute('data-image-src');
    if (!src) return;
    el.style.backgroundImage = `url("${src}")`;
    el.style.backgroundSize = 'cover';
    el.style.backgroundPosition = 'center';
    el.style.backgroundRepeat = 'no-repeat';
  });

  document.querySelectorAll('.dsn-slider-active').forEach((el) => {
    el.style.opacity = '1';
    el.style.visibility = 'visible';
  });

  document.querySelectorAll('.dsn-grid-slider-effect .img.cover-bg').forEach((el) => {
    if (!el.style.minHeight) {
      el.style.minHeight = '100%';
    }
  });

  document.querySelectorAll('img[src^="/assets/"]').forEach((img) => {
    const src = img.getAttribute('src');
    if (!src) return;
    if (img.dataset.loadedSrc !== src) {
      img.dataset.loadedSrc = src;
      img.src = '';
      img.src = src;
    }
  });

  document.querySelectorAll('[data-aos]').forEach((el) => {
    el.classList.remove('aos-animate');
  });

  if (window.AOS) {
    window.AOS.refreshHard?.() || window.AOS.refresh();
  }
}

export default function PageEffects() {
  const location = useLocation();

  useLayoutEffect(() => {
    let cancelled = false;

    const run = async () => {
      await loadLegacyScripts();
      if (cancelled) return;
      applyPageImages();
      reinitializeLegacyPage();
    };

    run();
    const raf = requestAnimationFrame(() => {
      run();
    });
    const timers = [50, 150, 350, 700].map((ms) => setTimeout(run, ms));

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
    };
  }, [location.pathname, location.key]);

  return null;
}
