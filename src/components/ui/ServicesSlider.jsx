import { Autoplay, Parallax } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import AppLink from './AppLink';
import { SwiperArrowControls, useSwiperNavigation } from './ThemeSwiper';
import { homeServiceSlides } from '../../data/home';

export default function ServicesSlider() {
  const { onSwiper, slidePrev, slideNext } = useSwiperNavigation();

  return (
    <section className="about pt-100 light-v industries_area">
      <div className="container" data-aos="fade-up">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="cstm_title">
              <h4 className="text-center text-md-left">
                Logistics <span style={{ color: 'var(--primary)' }}>Services</span>
              </h4>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block mb-30">
            <SwiperArrowControls onPrev={slidePrev} onNext={slideNext} />
          </div>
        </div>
      </div>
      <div className="container" data-aos="fade-up">
        <Swiper
          className="services_slider"
          modules={[Autoplay, Parallax]}
          speed={1000}
          parallax
          loop
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
            1400: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSwiper={onSwiper}
          onMouseEnter={(swiper) => swiper.autoplay?.stop()}
          onMouseLeave={(swiper) => swiper.autoplay?.start()}
        >
          {homeServiceSlides.map((item) => (
            <SwiperSlide key={item.slug}>
              <div className="item-box">
                <div className="rad_card">
                  <img className="rad_card_full-image" src={item.image} alt={item.title} />
                  <div className="rad_card_label">
                    <i className={item.icon} />
                  </div>
                  <div className="rad_card_title">{item.title}</div>
                  <div className="rad_card_sliding_content">
                    <div className="rad_card_content">
                      <p>{item.text}</p>
                    </div>
                    <AppLink href={`/${item.slug}`} className="rad_card_button rad_card_button_ghost">
                      <div className="rad_card_button_text">
                        View More <i className="fa fa-angle-right" />
                      </div>
                    </AppLink>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="row d-block d-md-none">
          <div className="col-md-12">
            <SwiperArrowControls onPrev={slidePrev} onNext={slideNext} />
          </div>
        </div>
      </div>
    </section>
  );
}
