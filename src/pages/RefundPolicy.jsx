import AppLink from '../components/ui/AppLink';

export default function RefundPolicy() {
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
                                  <h2>Refund Policy</h2>
                                  <p className="text-white">How we handle refunds for fees and service charges.</p>
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
                              <h4>Refund <span style={{"color":"var(--primary)"}}>Policy</span></h4>
                          </div>
                          <p className="p-intro p-intro-small mb-3">
                              Refunds will not be entertained.
                          </p>
                          <p className="p-intro p-intro-small mb-3">
                              However, should the management feel that refund is imminent due to some unforeseen circumstances refund may be processed and that too within 10 days of subscribing to the service.
                          </p>
                          <p className="p-intro p-intro-small mb-4">
                              Refund amount however will vary from case to case basis.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
