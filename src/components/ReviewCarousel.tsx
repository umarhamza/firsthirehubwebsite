import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { trustpilotScreenshots } from '../data/trustpilot-screenshots';

interface Props {
  responsive?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
}

const CarouselReviews = ({ responsive }: Props) => {
  const { mobile = 1, tablet = 2, desktop = 3 } = responsive || {};
  return (
    <div className="review-carousel">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          350: {
            slidesPerView: mobile,
          },
          750: {
            slidesPerView: tablet,
          },
          1000: {
            slidesPerView: desktop,
          },
        }}
      >
        {trustpilotScreenshots.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={review}
                alt={`Client review ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselReviews;