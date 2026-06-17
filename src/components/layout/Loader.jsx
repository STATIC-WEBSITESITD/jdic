import { useEffect, useState } from 'react';
import { ScaleLoader } from 'react-spinners';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hide = () => setLoading(false);

    if (document.readyState === 'complete') {
      const timer = setTimeout(hide, 500);
      return () => clearTimeout(timer);
    }

    const onLoad = () => setTimeout(hide, 500);
    window.addEventListener('load', onLoad, { once: true });
    return () => window.removeEventListener('load', onLoad);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

  if (!loading) return null;

  return (
    <div className="page-loader" aria-label="Loading">
      <ScaleLoader color="#a60723" height={40} width={4} radius={2} margin={4} />
    </div>
  );
}
