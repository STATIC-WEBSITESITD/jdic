import {
  contactAddress,
  contactEmail,
  customerServicePhones,
  mainPhone,
  salesPhones,
} from '../../data/contact';

function PhoneList({ phones }) {
  return (
    <ul className="contact-phone-list">
      {phones.map((phone) => (
        <li key={phone.href}>
          <a href={phone.href}>{phone.display}</a>
        </li>
      ))}
    </ul>
  );
}

const contactCards = [
  {
    icon: 'fa-map-marker-alt',
    title: 'Visit Us',
    content: (
      <p className="contact-info-text">{contactAddress}</p>
    ),
  },
  {
    icon: 'fa-envelope',
    title: 'Email & General',
    content: (
      <>
        <p className="contact-info-text mb-20">
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </p>
        <p className="contact-info-label mb-10">Main Line</p>
        <PhoneList phones={[mainPhone]} />
      </>
    ),
  },
  {
    icon: 'fa-phone-volume',
    title: 'Sales',
    content: <PhoneList phones={salesPhones} />,
  },
  {
    icon: 'fa-headphones',
    title: 'Customer Service',
    content: <PhoneList phones={customerServicePhones} />,
  },
];

export default function ContactInfo() {
  return (
    <section className="about contact-info-section pt-50 pb-100 light-v">
      <div className="container" data-aos="fade-up">
        <div className="cstm_title mb-50">
          <h4 className="text-center mb-30">
            Reach <span style={{ color: 'var(--primary)' }}>Us Directly</span>
          </h4>
          <p className="text-center mb-0">
            Call our sales or customer service teams, email us, or visit our Ahmedabad office.
          </p>
        </div>
        <div className="about-info">
          <div className="row">
            {contactCards.map((card) => (
              <div className="col-lg-3 col-md-6 contact-info-col" key={card.title}>
                <div className="benefit-card contact-info-card">
                  <i className={`benefit-badge-icon fas ${card.icon}`} />
                  <h4 className="mb-30">{card.title}</h4>
                  {card.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
