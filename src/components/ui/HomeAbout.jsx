import { homeAbout } from '../../data/home';

export default function HomeAbout() {
  return (
    <section id="about" className="about pt-100 light-v">
      <div className="container" data-aos="fade-up">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-30">
            <div className="home-about-media">
              <img src={homeAbout.image} alt={homeAbout.imageAlt} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="home-about-content">
              <div className="cstm_title">
                <h4 className="mb-3">
                  {homeAbout.title}{' '}
                  <span style={{ color: 'var(--primary)' }}>{homeAbout.titleAccent}</span>
                </h4>
                <p className="mb-0">{homeAbout.intro}</p>
              </div>
              <ul className="home-about-features">
                {homeAbout.highlights.map((item) => (
                  <li className="home-about-feature" key={item.title}>
                    <span className="home-about-feature__icon" aria-hidden="true">
                      <i className={`fas ${item.icon}`} />
                    </span>
                    <div>
                      <h5 className="home-about-feature__title">{item.title}</h5>
                      <p className="home-about-feature__text">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
