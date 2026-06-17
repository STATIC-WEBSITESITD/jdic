import { shipperLogos } from '../../data/home';

export default function Shippers() {
  return (
    <section className="about pt-100 light-v">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-12">
            <div className="cstm_title">
              <h4 className="text-center mb-30">
                Our <span style={{ color: 'var(--primary)' }}>Shippers</span>
              </h4>
              <p className="text-center mb-0">Trusted by businesses and individuals worldwide</p>
            </div>
            <div className="row brand_block justify-content-center">
              {shipperLogos.map((src) => (
                <div className="col-6 col-sm-3" key={src}>
                  <div className="brand_item">
                    <img src={src} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
