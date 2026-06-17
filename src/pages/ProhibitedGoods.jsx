import AppLink from '../components/ui/AppLink';

export default function ProhibitedGoods() {
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
                                  <h2>Prohibited &amp; Restricted Goods</h2>
                                  <p className="text-white">Check restricted items before you ship.</p>
                              </div>
                          </div>
                      </div>
                      <div className="dsn-grid-current">
                          <div className="dsn-grid-hover-label"></div>
                          <div className="dsn-grid-hover-pic"></div>
                          <div className="dsn-grid-slider-effect">
                              <div className="img cover-bg" data-id="1" data-image-src="/assets/img/prohibited-goods.webp" data-overlay="3" style={{ backgroundImage: 'url(/assets/img/prohibited-goods.webp)' }}>
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
                          <div className="cstm_title mb-30">
                              <h4 className="text-center mb-30">
                                  Prohibited &amp; <span style={{ color: 'var(--primary)' }}>Restricted Goods</span>
                              </h4>
                              <p className="text-center mb-0">Although we can, generally, arrange to ship almost any commodity, many items are prohibited or restricted from our usual courier services (if your goods can be carried we can and will be quite happy to arrange for a carrier, on your behalf, through our list of Specialist Agents).</p>
                          </div>
                          <p className="p-intro p-intro-small mb-3">
                              The list below, though not exhaustive, shows the majority and type of goods that are not able to
                              be booked for carriage through our usual services. Please read this carefully and if, when you
                              are done, you remain unsure, please do not hesitate to contact our Customer Services Team to
                              inquire further.
                          </p>
                          <p className="p-intro p-intro-small mb-3">
                              It is far better to make sure that your goods are allowed to travel without special
                              considerations than to have to suffer possible delays, confiscation or, possibly, the
                              destruction of your shipment/s.
                          </p>
                                      <ul className="cstm_list_style_disc">
                                          <li><p className="p-intro p-intro-small mb-3">Animal products such as skins, furs, horns (including Ivory and Ivory products).</p></li>
                                          <li><p className="p-intro p-intro-small mb-3">Goods of exceptional value such as works of art, antiques, precious metals or stones.</p></li>
                                          <li><p className="p-intro p-intro-small mb-3">Money or any items considered as negotiable items, e.g. credit or bankcards, stocks, and bonds.</p></li>
                                          <li><p className="p-intro p-intro-small mb-3">Dangerous or hazardous materials. These include items considered to be inflammable, explosive, corrosive, toxic, magnetic, radioactive, biohazards, pressurised containers etc.</p></li>
                                          <li><p className="p-intro p-intro-small mb-3">Live animals, e.g. cattle, sheep, pigs, chinchillas, ocelots or the Reticulated Python of South East Asia.</p></li>
                                          <li><p className="p-intro p-intro-small mb-3">Perishable items.</p></li>
                                          <li><p className="p-intro p-intro-small mb-3">Counterfeit or pirated goods or materials.</p></li>
                                          <li><p className="p-intro p-intro-small mb-3">Narcotics; illegal drugs.</p></li>
                                          <li><p className="p-intro p-intro-small mb-3">Human remains.</p></li>
                                          <li><p className="p-intro p-intro-small mb-3">Pornography.</p></li>
                                          <li><p className="p-intro p-intro-small mb-3">Dry ice.</p></li>
                                          <li><p className="p-intro p-intro-small mb-3">Jewellery; including watches, rings, necklaces, pendants or brooches.</p></li>
                                          <li><p className="p-intro p-intro-small mb-3">Perfume and other, similar, alcohol based products.</p></li>
                                          <li><p className="p-intro p-intro-small mb-3">Passports (by special arrangement only).</p></li>
                                          <li><p className="p-intro p-intro-small mb-3">Weapons or items that may be construed as lethal. These include guns, knives, swords, daggers, replicas or otherwise.</p></li>
                                      </ul>
                                     
                          <p className="p-intro p-intro-small mb-3">
                              Added to this list, there may also be restrictions placed on many other goods, depending on
                              the destination country.
                              For example, it is not advised to send alcohol to the majority of Muslim countries or to the
                              U.S.A., as you will encounter problems.
                          </p>
                          <p className="p-intro p-intro-small mb-3">
                              If you have any questions regarding possible restrictions or prohibitions, we would advise
                              that you, either, contact our Customer Services Team or liaise with the proper Customs
                              Authorities in the relevant country to ensure that your goods will be allowed entry.
                          </p>
                          <p className="p-intro p-intro-small mb-0 w-100 mx-auto">
                              If you require further assistance or have any questions our customer service team will be
                              more than happy to help you.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
