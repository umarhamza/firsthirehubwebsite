import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

interface Props {
  responsive?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
}

const CarouselReviews = ({ responsive }: Props) => {
  const { mobile = 1, tablet = 2, desktop = 3 } = responsive || {};
  const reviews = [
    "/images/reviews/first-hire-hub-review-1.png",
    "/images/reviews/first-hire-hub-review-2.png",
    "/images/reviews/first-hire-hub-review-3.png",
    "/images/reviews/first-hire-hub-review-4.png",
    "/images/reviews/first-hire-hub-review-5.png",
    "/images/reviews/first-hire-hub-review-6.png",
    "/images/reviews/first-hire-hub-review-7.png",
  ];

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
        {reviews.map((review, index) => (
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