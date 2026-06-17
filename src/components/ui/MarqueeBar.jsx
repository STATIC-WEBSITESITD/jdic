import { marqueeHighlights } from '../../data/home';

export default function MarqueeBar() {
  return (
    <section className="marquee-section" aria-label="Service highlights">
      <div className="marquee-section__wrapper">
        <div className="marquee-section__content">
          {marqueeHighlights.map((item) => (
            <span key={item}>{item}</span>
          ))}
          {marqueeHighlights.map((item) => (
            <span key={`${item}-dup`} aria-hidden="true">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
