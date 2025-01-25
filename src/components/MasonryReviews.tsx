import { ResponsiveMasonry } from "react-responsive-masonry";
import Masonry from "react-responsive-masonry";

interface Review {
  id: string;
  imagePath: string;
}

const Review = () => {
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
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1000: 3 }}>
        <Masonry gutter="20px">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img 
                src={review}
                alt={`First Hire Hub review ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Review;

