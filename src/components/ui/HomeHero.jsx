import CustomBtn from './CustomBtn';
import useTypewriter from '../../hooks/useTypewriter';
import { homeHero, homeHeroStats } from '../../data/home';

export default function HomeHero() {
  const typedText = useTypewriter(homeHero.typewriterPhrases);

  return (
    <div className="dsn-grid-color cstm_banner">
      <div className="dsn-grid-root dsn-grid-slider">
        <div className="dsn-progress" />
        <div className="dsn-grid-content">
          <div className="dsn-grid-wrapper">
            <div className="dsn-grid-info">
              <div className="dsn-grid-info-wrapper dsn-slider-active" data-id="1" data-url="#">
                <h6 className="slide-content__kicker">
                  <span>- {homeHero.kicker}</span>
                </h6>
                <div className="title mb-30">
                  <h2>
                    {homeHero.titleLine}
                    <br /> for{' '}
                    <span className="typed" style={{ color: 'var(--primary)' }}>
                      {typedText}
                    </span>
                  </h2>
                  <h2 className="sub_heading">{homeHero.subtitle}</h2>
                </div>
                <ul className="slide-meta mb-20">
                  {homeHeroStats.map((item) => (
                    <li className="slide-meta__item" key={item.label}>
                      <span className="slide-meta__title">{item.value}</span>
                      <span className="slide-meta__value">{item.label}</span>
                    </li>
                  ))}
                </ul>
                <div className="cstm_banner-cta">
                  <CustomBtn href={homeHero.cta.href} label={homeHero.cta.label} />
                  <CustomBtn href={homeHero.secondaryCta.href} label={homeHero.secondaryCta.label} />
                </div>
              </div>
            </div>
            <div className="dsn-grid-current">
              <div className="dsn-grid-hover-label" />
              <div className="dsn-grid-hover-pic" />
              <div className="dsn-grid-slider-effect">
                <div className="img cover-bg cstm_banner-video" data-id="1" data-overlay="5">
                  <video
                    className="img cover-bg"
                    poster={homeHero.video.poster}
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={homeHero.video.src} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
