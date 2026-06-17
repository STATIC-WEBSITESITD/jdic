import { useEffect } from 'react';
import { loadLegacyScripts } from '../utils/legacyAssets';

export function useLegacyAssets() {
  useEffect(() => {
    loadLegacyScripts().catch(console.error);
  }, []);
}

export function useStickyHeader() {
  useEffect(() => {
    const onScroll = () => {
      const bodyScroll = window.scrollY;
      const headerSmall = document.querySelectorAll('.site-header, .header-top');

      headerSmall.forEach((header) => {
        header.classList.toggle('header-stickytop', bodyScroll > 250);
      });

      document.querySelectorAll('.sections').forEach((section) => {
        section.classList.toggle('body-pt', bodyScroll > 250);
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}
