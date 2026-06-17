import { serviceAreasSection } from '../../data/home';

export default function ServiceAreas() {
  return (
    <section className="about pt-100 pb-100 light-v">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-12">
            <div className="cstm_title">
              <h4 className="text-center mb-30">
                {serviceAreasSection.title}{' '}
                <span style={{ color: 'var(--primary)' }}>{serviceAreasSection.titleAccent}</span>
              </h4>
              <p className="text-center mb-0">{serviceAreasSection.subtitle}</p>
            </div>
            <div className="about-info">
              <div className="row">
                {serviceAreasSection.regions.map((region) => (
                  <div className="col-md-6" key={region.title}>
                    <div className="benefit-card">
                      <i className={`benefit-badge-icon fas ${region.icon}`} />
                      <h4 className="mb-30">{region.title}</h4>
                      <p className="p-intro p-intro-small mb-30 service-area-desc">{region.description}</p>
                      <ul className="service-area-cities">
                        {region.cities.map((city) => (
                          <li key={city}>
                            <i className="fas fa-map-marker-alt" aria-hidden="true" />
                            {city}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
