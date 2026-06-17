import { howItWorksSteps } from '../../data/home';

export default function HowItWorks() {
  return (
    <section className="about pt-100 light-v">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-12">
            <div className="cstm_title">
              <h4 className="text-center mb-30">
                How It Works &mdash; <span style={{ color: 'var(--primary)' }}>Simple Process, Complete Peace Of Mind</span>
              </h4>
              <p className="text-center mb-0">
                From quote to delivery &mdash; clear steps, reliable handling, and updates at every stage.
              </p>
            </div>
            <div className="about-info">
              <div className="row">
                {howItWorksSteps.map((item) => (
                  <div className="col-md-4" key={item.title}>
                    <div className="benefit-card">
                      <i className={`benefit-badge-icon fas ${item.icon}`} />
                      <h4 className="mb-30">{item.title}</h4>
                      <p className="p-intro p-intro-small">{item.text}</p>
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
