import { liveOfferLabel, liveOffers } from '../../data/home';

function LiveOfferItem({ offer }) {
  if (offer.id === 'business') {
    return (
      <>
        <i className={offer.icon} /> <strong>{offer.title}</strong> &nbsp;|&nbsp;{' '}
        {offer.subtitle} &nbsp;|&nbsp;{' '}
        {offer.benefits.join(' · ')} &nbsp;—&nbsp; {offer.cta}
      </>
    );
  }

  return (
    <>
      <i className={offer.icon} /> <strong>{offer.title}</strong> &nbsp;|&nbsp;{' '}
      {offer.subtitle} &nbsp;|&nbsp;{' '}
      <strong>{offer.highlight}</strong>
      {offer.note && <> &nbsp;— {offer.note}</>}
    </>
  );
}

function renderOffers(keySuffix = '') {
  return liveOffers.map((offer) => (
    <span key={`${offer.id}${keySuffix}`} className="marquee-item">
      <LiveOfferItem offer={offer} />
      <span className="marquee-sep">▶</span>
    </span>
  ));
}

export default function Marquee() {
  return (
    <div className="marquee-ticker" aria-label="Live offers">
      <div className="marquee-label">
        <i className="fas fa-star" /> {liveOfferLabel}
      </div>
      <div className="marquee-track">
        <div className="marquee-section__wrapper">
          <div className="marquee-content">
            {renderOffers()}
            {renderOffers('-dup')}
          </div>
        </div>
      </div>
    </div>
  );
}
