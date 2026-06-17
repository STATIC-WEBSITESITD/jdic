import CustomBtn from './CustomBtn';
import { joinTeamCta } from '../../data/home';

export default function JoinTeamCTA() {
  return (
    <div className="light-v">
      <section className="contact-section pt-100 pb-100">
        <div className="bg-layer">
          <span className="project-ctrl" />
          <span className="line line-1" />
          <span className="line line-2" />
          <span className="line line-3" />
          <span className="line line-4" />
          <span className="project-ctrl" />
        </div>
        <div className="container" data-aos="fade-up">
          <div className="contact-box">
            <div className="box">
              <div
                className="bg cover-bg"
                data-image-src={joinTeamCta.image}
                style={{ backgroundImage: `url(${joinTeamCta.image})` }}
              />
              <h6 className="slide-content__kicker mb-20">
                <span>{joinTeamCta.kicker}</span>
              </h6>
              <h2>
                {joinTeamCta.title}{' '}
                <span style={{ color: 'var(--primary)' }}>{joinTeamCta.titleAccent}</span>
              </h2>
              <p className="p-intro p-intro-small mb-30">{joinTeamCta.description}</p>
              <CustomBtn href={joinTeamCta.href} label={joinTeamCta.label} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
