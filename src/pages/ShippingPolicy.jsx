import AppLink from '../components/ui/AppLink';

export default function ShippingPolicy() {
  return (
    <>
      <div className="dsn-grid-color cstm_banner cstm_brdcrmb">
          <div className="dsn-grid-root dsn-grid-slider">
              <div className="dsn-progress"></div>
              <div className="dsn-grid-content">
                  <div className="dsn-grid-wrapper">
                      <div className="dsn-grid-info">
                          <div className="dsn-grid-info-wrapper dsn-slider-active" data-id="1" data-url="#">
                              <h6 className="slide-content__kicker">
                                  <span>- JD International Courier</span>
                              </h6>
                              <div className="title">
                                  <h2>Shipping Policy</h2>
                                  <p className="text-white">Transit times and how courier delivery works.</p>
                              </div>
                          </div>
                      </div>
                      <div className="dsn-grid-current">
                          <div className="dsn-grid-hover-label"></div>
                          <div className="dsn-grid-hover-pic"></div>
                          <div className="dsn-grid-slider-effect">
                              <div className="img cover-bg" data-id="1" data-image-src="/assets/img/policies.webp" data-overlay="3" style={{ backgroundImage: 'url(/assets/img/policies.webp)' }}>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <section className="about pt-100 pb-100 light-v">
          <div className="container" data-aos="fade-up">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="about-info">
                          <div className="cstm_title mb-4">
                              <h4>Shipping <span style={{"color":"var(--primary)"}}>Policy</span></h4>
                          </div>
                          <p className="p-intro p-intro-small mb-3">
                              Shipping policy cannot be defined since it is a courier service.
                          </p>
                          <p className="p-intro p-intro-small mb-3">
                              It will differ from location to location.
                          </p>
                          <p className="p-intro p-intro-small mb-3">
                              For Domestic shipping: The shipping duration will vary from a minimum of 1 to 7 working days.
                          </p>
                          <p className="p-intro p-intro-small mb-4">
                              For International: The shipping duration will vary from a minimum of 1 to 15 working days.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
