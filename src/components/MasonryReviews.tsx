import { ResponsiveMasonry } from "react-responsive-masonry";
import Masonry from "react-responsive-masonry";

interface Props {
  responsive?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
}

const MasonryReviews = ({ responsive }: Props) => {
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
    <div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: mobile, 750: tablet, 1000: desktop }}>
        <Masonry gutter="20px">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img 
                src={review}
                alt={`Client review ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default MasonryReviews;

