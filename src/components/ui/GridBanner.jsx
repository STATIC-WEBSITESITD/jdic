export default function GridBanner({ title, subtitle, image, breadcrumb = true }) {
  return (
    <div className={`dsn-grid-color cstm_banner${breadcrumb ? ' cstm_brdcrmb' : ''}`}>
      <div className="dsn-grid-root dsn-grid-slider">
        <div className="dsn-progress" />
        <div className="dsn-grid-content">
          <div className="dsn-grid-wrapper">
            <div className="dsn-grid-info">
              <div className="dsn-grid-info-wrapper dsn-slider-active" data-id="1" data-url="#">
                <h6 className="slide-content__kicker">
                  <span>- JD International Courier</span>
                </h6>
                <div className="title">
                  <h2>{title}</h2>
                  {subtitle && <p className="text-white">{subtitle}</p>}
                </div>
              </div>
            </div>
            <div className="dsn-grid-current">
              <div className="dsn-grid-hover-label" />
              <div className="dsn-grid-hover-pic" />
              <div className="dsn-grid-slider-effect">
                <div
                  className="img cover-bg"
                  data-id="1"
                  data-image-src={image}
                  data-overlay="3"
                  style={{ backgroundImage: `url(${image})` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
