const LEGACY_SCRIPTS = [
  '/assets/js/jquery-3.1.1.min.js',
  '/assets/js/plugins.js',
  '/assets/js/dsn-grid.js',
  '/assets/js/custom.js',
  '/assets/js/swiper-bundle.min.js',
  '/assets/js/main.js',
  '/assets/js/track.js',
];

let scriptsPromise = null;

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

export function loadLegacyScripts() {
  if (!scriptsPromise) {
    scriptsPromise = LEGACY_SCRIPTS.reduce(
      (chain, src) => chain.then(() => loadScript(src)),
      Promise.resolve(),
    );
  }
  return scriptsPromise;
}

function applyBackgroundImages() {
  document.querySelectorAll('[data-image-src]').forEach((el) => {
    const src = el.getAttribute('data-image-src');
    if (src) {
      el.style.backgroundImage = `url("${src}")`;
      el.style.backgroundSize = 'cover';
      el.style.backgroundPosition = 'center';
      el.style.backgroundRepeat = 'no-repeat';
    }
  });
}

function initNavigation() {
  if (!window.jQuery) return;

  const $ = window.jQuery;

  $('.nav__list-item:not(.nav__list-dropdown) a')
    .off('click.navClose')
    .on('click.navClose', () => {
      $('body').removeClass('nav-active');
    });

  // Mobile dropdown toggles are handled in React (Header.jsx)
  $('.nav__list-dropdown > a').off('click');

  $('.accent-menu .custom-drop-down > a')
    .off('click.desktopDrop')
    .on('click.desktopDrop', (e) => {
      e.preventDefault();
    });
}

function initServicesSlider() {
  if (!window.Swiper) return;

  document.querySelectorAll('.services_slider:not(.swiper-initialized)').forEach((sliderEl) => {
    if (sliderEl.swiper) {
      sliderEl.swiper.destroy(true, true);
    }

    const area = sliderEl.closest('.industries_area');
    const swiper = new window.Swiper(sliderEl, {
      speed: 1000,
      parallax: true,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      breakpoints: {
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
        1400: { slidesPerView: 3 },
      },
      navigation: {
        nextEl: area?.querySelector('.swiper-button-next'),
        prevEl: area?.querySelector('.swiper-button-prev'),
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });

    sliderEl.addEventListener('mouseenter', () => swiper.autoplay?.stop());
    sliderEl.addEventListener('mouseleave', () => swiper.autoplay?.start());
  });
}

function initTestimonialsSlider() {
  if (!window.Swiper) return;

  document.querySelectorAll('.testimonials_slider:not(.swiper-initialized)').forEach((sliderEl) => {
    if (sliderEl.swiper) {
      sliderEl.swiper.destroy(true, true);
    }

    const area = sliderEl.closest('.industries_area');
    const swiper = new window.Swiper(sliderEl, {
      speed: 800,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      breakpoints: {
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
      },
      navigation: {
        nextEl: area?.querySelector('.swiper-button-next'),
        prevEl: area?.querySelector('.swiper-button-prev'),
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });

    sliderEl.addEventListener('mouseenter', () => swiper.autoplay?.stop());
    sliderEl.addEventListener('mouseleave', () => swiper.autoplay?.start());
  });
}

function setAccordionIcon(header, open) {
  const icon = header.querySelector('.fa_icon');
  if (!icon) return;
  icon.classList.toggle('fa-minus', open);
  icon.classList.toggle('fa-plus', !open);
}

function setAccordionOpen(header, open) {
  const body = header.nextElementSibling;
  header.classList.toggle('active', open);
  if (body?.classList.contains('acc_body')) {
    body.classList.toggle('active', open);
  }
  setAccordionIcon(header, open);
}

function bindFaqAccordionClicks() {
  if (document.body.dataset.faqAccordionBound === 'true') return;
  document.body.dataset.faqAccordionBound = 'true';

  document.addEventListener('click', (event) => {
    const header = event.target.closest('.acc_hdr');
    if (!header) return;

    const block = header.closest('.acc_block');
    const headers = block
      ? Array.from(block.querySelectorAll('.acc_hdr'))
      : [header];
    const isActive = header.classList.contains('active');

    headers.forEach((item) => setAccordionOpen(item, false));

    if (!isActive) {
      setAccordionOpen(header, true);
    }
  });
}

export function initAccordions() {
  bindFaqAccordionClicks();

  document.querySelectorAll('.acc_block').forEach((block) => {
    if (block.dataset.accordionInit === 'true') return;
    block.dataset.accordionInit = 'true';

    const headers = Array.from(block.querySelectorAll('.acc_hdr'));
    if (!headers.length) return;

    headers.forEach((header, index) => setAccordionOpen(header, index === 0));
  });
}

export function reinitializeLegacyPage() {
  const $ = window.jQuery;

  if (typeof window.background === 'function') {
    window.background();
  }

  if (typeof window.data_overlay === 'function') {
    window.data_overlay();
  }

  applyBackgroundImages();
  initNavigation();

  if (window.AOS) {
    window.AOS.init({ duration: 1000, once: false });
    window.AOS.refreshHard?.() || window.AOS.refresh();
  }

  document.body.classList.add('render');

  document.querySelectorAll('.dsn-slider-active').forEach((el) => {
    el.style.opacity = '1';
  });

  initAccordions();

  if ($) {
  $(document).trigger('legacy:page-ready');
  }
}
