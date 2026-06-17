import { useEffect, useRef } from 'react';
import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/maps/world-merc.js';
import 'jsvectormap/dist/jsvectormap.min.css';
import { globalMapSection } from '../../data/home';

export default function GlobalMapSection() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const resizeObserverRef = useRef(null);

  useEffect(() => {
    const mapEl = mapRef.current;
    if (!mapEl) return undefined;

    let mapInstance = null;
    let resizeScheduled = false;

    try {
      mapInstance = new jsVectorMap({
        selector: mapEl,
        map: 'world_merc',
        zoomOnScroll: false,
        zoomButtons: false,
        regionStyle: {
          initial: {
            stroke: 'var(--primary)',
            strokeWidth: 0.25,
            fill: '#ffffff',
            fillOpacity: 1,
          },
        },
      });
      mapInstanceRef.current = mapInstance;
    } catch (error) {
      console.error('Failed to initialize global map:', error);
      return undefined;
    }

    const handleResize = () => {
      if (resizeScheduled || !mapInstance) return;
      resizeScheduled = true;
      requestAnimationFrame(() => {
        resizeScheduled = false;
        mapInstance?.updateSize?.();
      });
    };

    window.addEventListener('resize', handleResize);

    if (typeof ResizeObserver !== 'undefined') {
      resizeObserverRef.current = new ResizeObserver(handleResize);
      resizeObserverRef.current.observe(mapEl);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserverRef.current?.disconnect();
      resizeObserverRef.current = null;

      try {
        mapInstance?.destroy?.();
      } catch {
        // jsvectormap destroy can throw during React StrictMode cleanup
      }

      mapInstanceRef.current = null;
      if (mapEl.isConnected) {
        mapEl.innerHTML = '';
      }
    };
  }, []);

  return (
    <section className="about pt-100 pb-100">
      <div className="container-fluid p-0" data-aos="fade-up">
        <div className="cstm_title">
          <h4 className="text-center">
            {globalMapSection.title}{' '}
            <span style={{ color: 'var(--primary)' }}>{globalMapSection.titleAccent}</span>
          </h4>
        </div>
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6">
            <div id="global-map" ref={mapRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
