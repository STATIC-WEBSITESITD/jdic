import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperArrowControls, useSwiperNavigation } from './ThemeSwiper';
import { testimonials } from '../../data/home';

export default function Testimonials() {
  const { onSwiper, slidePrev, slideNext } = useSwiperNavigation();

  return (
    <section className="about pt-100 light-v industries_area">
      <div className="container" data-aos="fade-up">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="cstm_title">
              <h4 className="text-center text-md-left">
                Testimonials <span style={{ color: 'var(--primary)' }}>What Our Clients Say</span>
              </h4>
              <p className="text-center text-md-left mb-0 p-intro p-intro-small">
                Trusted by customers for reliable, fast, and professional shipping services.
              </p>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block mb-30">
            <SwiperArrowControls onPrev={slidePrev} onNext={slideNext} />
          </div>
        </div>
      </div>
      <div className="container" data-aos="fade-up">
        <div className="about-info">
          <Swiper
            className="testimonials_slider"
            modules={[Autoplay]}
            speed={800}
            loop
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            onSwiper={onSwiper}
            onMouseEnter={(swiper) => swiper.autoplay?.stop()}
            onMouseLeave={(swiper) => swiper.autoplay?.start()}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.name}>
                <div className="benefit-card">
                  <i className="benefit-badge-icon fas fa-quote-left" />
                  <h4 className="mb-30">{item.name}</h4>
                  <p className="p-intro p-intro-small">{item.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="row d-block d-md-none">
          <div className="col-md-12">
            <SwiperArrowControls onPrev={slidePrev} onNext={slideNext} />
          </div>
        </div>
      </div>
    </section>
  );
}
