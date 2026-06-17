import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onScroll = () => setActive(window.scrollY > 200);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`back2top${active ? ' active' : ''}`}
      id="back2top"
      style={{ opacity: active ? 1 : 0 }}
      onClick={scrollToTop}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && scrollToTop(e)}
    >
      <i className="up-arrow" />
    </div>
  );
}
