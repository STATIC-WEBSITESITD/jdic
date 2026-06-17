import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Loader from './Loader';
import Header from './Header';
import Footer from './Footer';
import Marquee from './Marquee';
import BackToTop from './BackToTop';
import StickyWhatsApp from './StickyWhatsApp';
import PageEffects from './PageEffects';
import { useLegacyAssets, useStickyHeader } from '../../hooks/useSiteEffects';
import useTracking from '../../hooks/useTracking';
import { pageTitles } from '../../data/navigation';

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  useLegacyAssets();
  useStickyHeader();
  useTracking();

  useEffect(() => {
    document.body.classList.add('render');
    document.body.classList.remove('dsn-loader-active');
    document.body.style.overflow = '';
    document.body.style.paddingTop = '';
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.paddingTop = '';
    const title = pageTitles[location.pathname] || 'JD International Courier';
    document.title = title;
  }, [location.pathname]);

  useEffect(() => {
    const onSubmit = (event) => {
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) return;

      if (form.querySelector('[name="tracking_no"]')) {
        event.preventDefault();
        const searchSelected = form.querySelector('[name="searchSelected"]')?.value || '1';
        const trackingNo = form.querySelector('[name="tracking_no"]')?.value?.trim();
        if (!trackingNo) return;
        navigate(`/tracking?searchSelected=${searchSelected}&tracking_no=${encodeURIComponent(trackingNo)}`);
      }
    };

    document.addEventListener('submit', onSubmit);
    return () => document.removeEventListener('submit', onSubmit);
  }, [navigate]);

  return (
    <>
      <Loader />
      <Header />
      <main className="root">
        <Outlet key={location.pathname} />
        <PageEffects />
        <Marquee />
      </main>
      <Footer />
      <StickyWhatsApp />
      <BackToTop />
    </>
  );
}
