import { useLayoutEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import GridBanner from '../components/ui/GridBanner';
import { getService } from '../data/pages';
import { initAccordions } from '../utils/legacyAssets';

export default function ServicePage() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\//, '');
  const service = getService(slug);
  const Content = service?.Content;

  useLayoutEffect(() => {
    initAccordions();
    const timer = setTimeout(initAccordions, 100);
    return () => clearTimeout(timer);
  }, [slug]);

  if (!service || !Content) return <Navigate to="/" replace />;

  return (
    <>
      <GridBanner
        title={service.hero.title}
        subtitle={service.hero.subtitle}
        image={service.hero.image}
      />
      <Content />
    </>
  );
}
