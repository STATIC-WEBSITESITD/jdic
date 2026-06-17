import { useLayoutEffect } from 'react';
import AppLink from '../components/ui/AppLink';
import { initAccordions } from '../utils/legacyAssets';

export default function About() {
    useLayoutEffect(() => {
        initAccordions();
        const timer = setTimeout(initAccordions, 100);
        return () => clearTimeout(timer);
    }, []);

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
                                        <h2>About Us</h2>
                                        <p className="text-white">Trusted logistics partner for international shipping from India.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="dsn-grid-current">
                                <div className="dsn-grid-hover-label"></div>
                                <div className="dsn-grid-hover-pic"></div>
                                <div className="dsn-grid-slider-effect">
                                    <div className="img cover-bg" data-id="1" data-image-src="/assets/img/about.webp" data-overlay="3" style={{ backgroundImage: 'url(/assets/img/about.webp)' }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="about pt-100 light-v">
                <div className="container" data-aos="fade-up">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-30">
                            <div className="home-about-media">
                                <img src="/assets/img/about-1.webp" alt="JD International Courier" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="home-about-content">
                                <div className="cstm_title">
                                    <h4 className="mb-3">
                                        JD International Courier &mdash;{' '}
                                        <span style={{ color: 'var(--primary)' }}>Your Global Shipping Partner</span>
                                    </h4>
                                    <p className="mb-0">The founder of JD International brings strong experience in the logistics and international courier industry and is actively building the business with a clear vision.</p>
                                </div>
                                <div className="about-info">
                                    <p className="p-intro p-intro-small mb-30">
                                        The founder of JD International brings strong experience in the logistics and international
                                        courier industry and is actively building the business with a clear vision. The company's
                                        primary focus is to provide clients with reliable, fast, and cost-effective international
                                        shipping solutions.
                                    </p>
                                    <p className="p-intro p-intro-small mb-30">
                                        JD International supports exporters, businesses, and e-commerce sellers by offering end-to-end
                                        logistics services, helping them expand their reach in global markets. Customer satisfaction,
                                        transparency, and a strong commitment to growth are the core principles that drive the company
                                        forward.
                                    </p>
                                    <h5 className="mb-30"><em>&mdash; Jitendra D. Raval</em></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about pt-100 light-v">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cstm_title">
                                <h4 className="text-center mb-30">Our Purpose &mdash; <span style={{ "color": "var(--primary)" }}>Vision, Mission &amp; Values</span></h4>
                                <p className="text-center mb-0">
                                    We focus on reliable global delivery, clear documentation guidance, and long-term partnerships
                                    for exporters, SMEs, startups, and e-commerce brands.
                                </p>
                            </div>
                            <div className="about-info">
                                <div className="row">
                                    <div className="col-md-6 col-lg-4">
                                        <div className="benefit-card">
                                            <i className="benefit-badge-icon fas fa-eye"></i>
                                            <h4 className="mb-30">Our Vision</h4>
                                            <p className="p-intro p-intro-small">
                                                To be the most trusted international courier partner from Ahmedabad helping Indian
                                                businesses reach every global market with confidence.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4">
                                        <div className="benefit-card">
                                            <i className="benefit-badge-icon fas fa-bullseye"></i>
                                            <h4 className="mb-30">Our Mission</h4>
                                            <p className="p-intro p-intro-small">
                                                To deliver fast, compliant, and cost-effective shipping through expert
                                                pickup-to-delivery support, strong carrier partnerships, and proactive customer
                                                communication.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4">
                                        <div className="benefit-card">
                                            <i className="benefit-badge-icon fas fa-handshake"></i>
                                            <h4 className="mb-30">Our Values</h4>
                                            <p className="p-intro p-intro-small">
                                                Reliability, transparency, speed, and customer-first service supported by careful
                                                documentation, responsible handling, and consistent updates.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about pt-100 pb-100 light-v">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cstm_title">
                                <h4 className="text-center mb-30">
                                    FAQs <span style={{ color: 'var(--primary)' }}>— Quick Answers</span>
                                </h4>
                                <p className="text-center mb-0">Quick answers about shipping, documentation, tracking, and service options.</p>
                            </div>
                            <div className="acc_block cstm-list-section">
                                <div className="acc_hdr">
                                    <h2><span> 01. Which
                                        countries do you ship to?</span></h2>
                                    <i className="fa fa-plus fa_icon"></i>
                                </div>
                                <div className="acc_body">
                                    <div className="about-info">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p>We deliver to 220+ countries and territories worldwide,
                                                    including the USA, UK, UAE, Canada, Australia, Germany, Singapore, Saudi
                                                    Arabia, and all major international destinations.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="acc_hdr">
                                    <h2><span> 02. How do I
                                        book a pickup from Ahmedabad?</span></h2>
                                    <i className="fa fa-plus fa_icon"></i>
                                </div>
                                <div className="acc_body">
                                    <div className="about-info">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p>Contact us via phone or WhatsApp at +91 95862 26000. We’ll
                                                    confirm pickup, review shipment details, guide documentation, and share a clear
                                                    quote.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="acc_hdr">
                                    <h2><span> 03. What
                                        items can I send through your international courier service?</span></h2>
                                    <i className="fa fa-plus fa_icon"></i>
                                </div>
                                <div className="acc_body">
                                    <div className="about-info">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p>You can typically ship documents, parcels, samples, garments,
                                                    and many commercial goods (subject to destination and carrier rules). Hazardous
                                                    items, currency, and prohibited goods are not allowed. If you’re unsure, share
                                                    the item details with us before pickup.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="acc_hdr">
                                    <h2><span> 04. How
                                        long does international courier delivery take from India?</span></h2>
                                    <i className="fa fa-plus fa_icon"></i>
                                </div>
                                <div className="acc_body">
                                    <div className="about-info">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p>Delivery time depends on destination and service. Express
                                                    typically delivers in 2–5 working days, while economy options can take longer
                                                    based on routing and clearance.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="acc_hdr">
                                    <h2><span> 05. Do you
                                        provide a tracking number?</span></h2>
                                    <i className="fa fa-plus fa_icon"></i>
                                </div>
                                <div className="acc_body">
                                    <div className="about-info">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p>Yes. Every shipment is assigned a tracking number, allowing
                                                    you and your recipient to monitor the parcel's status in real time through our
                                                    carrier's tracking portal.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="acc_hdr">
                                    <h2><span> 06. What
                                        documents are required?</span></h2>
                                    <i className="fa fa-plus fa_icon"></i>
                                </div>
                                <div className="acc_body">
                                    <div className="about-info">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p>Most shipments require KYC plus an invoice/packing details.
                                                    Commercial shipments may need additional paperwork depending on the goods and
                                                    destination. We guide you on the exact checklist before dispatch.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="acc_hdr">
                                    <h2><span> 07. Are
                                        there weight or size limits?</span></h2>
                                    <i className="fa fa-plus fa_icon"></i>
                                </div>
                                <div className="acc_body">
                                    <div className="about-info">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p>Weight and size limits vary by destination and carrier.
                                                    Contact us with your shipment details and we will provide the most suitable
                                                    and cost-effective shipping option.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="acc_hdr">
                                    <h2><span> 08. Do you
                                        offer business rates?</span></h2>
                                    <i className="fa fa-plus fa_icon"></i>
                                </div>
                                <div className="acc_body">
                                    <div className="about-info">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p>Yes. We offer special pricing for businesses with regular or
                                                    bulk international shipping requirements. Please reach out to discuss a
                                                    customized shipping plan.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="acc_hdr">
                                    <h2><span> 09. Is
                                        insurance available?</span></h2>
                                    <i className="fa fa-plus fa_icon"></i>
                                </div>
                                <div className="acc_body">
                                    <div className="about-info">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p>Shipment insurance options are available. We recommend
                                                    insuring high-value items for added protection. Our team can guide you on
                                                    available coverage options at the time of booking.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="acc_hdr">
                                    <h2><span> 10. What if
                                        there’s a delay?</span></h2>
                                    <i className="fa fa-plus fa_icon"></i>
                                </div>
                                <div className="acc_body">
                                    <div className="about-info">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p>If a shipment is delayed, our team coordinates with the carrier
                                                    and shares updates until it’s resolved. We stay available throughout the
                                                    shipment journey.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
