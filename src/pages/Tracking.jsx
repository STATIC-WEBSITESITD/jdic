import AppLink from '../components/ui/AppLink';
import CustomBtn from '../components/ui/CustomBtn';

export default function Tracking() {
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
                                  <h2>Track Your Shipment</h2>
                                  <p className="text-white">Check real-time status updates using your tracking number.</p>
                              </div>
                          </div>
                      </div>
                      <div className="dsn-grid-current">
                          <div className="dsn-grid-hover-label"></div>
                          <div className="dsn-grid-hover-pic"></div>
                          <div className="dsn-grid-slider-effect">
                              <div className="img cover-bg" data-id="1" data-image-src="/assets/img/tracking.webp" data-overlay="3" style={{ backgroundImage: 'url(/assets/img/tracking.webp)' }}>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="light-v">
          <section className="contact-p pt-100 pb-100 cstm_form">
              <div className="container" data-aos="fade-up">
                  <div className="cstm_title">
                      <h4 className="text-center mb-30">Track Your <span style={{"color":"var(--primary)"}}>Shipment</span></h4>
                      <p className="text-center mb-0">Check real-time status updates using your tracking number.</p>
                  </div>
                  <div className="row">
                      <div className="col-lg-10 mx-auto">
                          <div className="form-box">
                              <form action="/tracking" method="get" className="form">
                                  <div className="row input__wrap controls">
                                      <div className="col-md-6">
                                          <div className="form-group">
                                              <select name="searchSelected" id="searchSelected" required defaultValue="1">
                                                  <option value="1">AWB No.</option>
                                                  <option value="6">Forwarding No.</option>
                                                  <option value="2">Reference No.</option>
                                              </select>
                                              <div className="help-block with-errors"></div>
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="form-group">
                                              <input type="text" name="tracking_no" placeholder="Enter your tracking number..." required />
                                              <div className="help-block with-errors"></div>
                                          </div>
                                      </div>
                                      <div className="col-md-12 text-center">
                                          <CustomBtn type="submit" label="Track Shipment" />
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                      <div className="col-lg-12 track-result track-block">
                          <div className="accordion tracking-data"></div>
                      </div>
                  </div>
              </div>
          </section>
      </div>
    </>
  );
}
