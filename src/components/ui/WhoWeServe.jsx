import CustomBtn from './CustomBtn';
import { whoWeServeItems } from '../../data/home';

export default function WhoWeServe() {
  return (
    <section className="about pt-100 light-v blogs_area">
      <div className="container" data-aos="fade-up">
        <div className="col-lg-12">
          <div className="cstm_title">
            <h4 className="text-center mb-30">
              Who We <span style={{ color: 'var(--primary)' }}>Serve</span>
            </h4>
            <p className="text-center mb-0">Solutions for every kind of journey</p>
          </div>
          <div className="about-info">
            <div className="row">
              {whoWeServeItems.map((item) => (
                <div className="col-md-6 col-lg-4" key={item.title}>
                  <div className="blog-item">
                    <div className="box-image mb-30">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <h5 className="mb-30">
                      <em>{item.subtitle}</em>
                    </h5>
                    <h4 className="mb-30">
                      <small>{item.title}</small>
                    </h4>
                    <p className="p-intro p-intro-small">{item.text}</p>
                    <CustomBtn href={item.link} label="Know More" />
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
