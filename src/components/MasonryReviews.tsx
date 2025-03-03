import { SquareArrowOutUpRight } from "lucide-react";
import { ResponsiveMasonry } from "react-responsive-masonry";
import Masonry from "react-responsive-masonry";
import { trustpilotScreenshots } from "../data/trustpilot-screenshots"

interface Props {
  showTrustpilotBtn?: boolean
  responsive?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
}

const MasonryReviews = ({showTrustpilotBtn = true, responsive }: Props) => {
  const { mobile = 1, tablet = 2, desktop = 3 } = responsive || {};
  return (
    <div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: mobile, 750: tablet, 1000: desktop }}>
        <Masonry gutter="20px">
          {trustpilotScreenshots.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img 
                src={review}
                alt={`First Hire Hub Trustpilot review - Client success story ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      {showTrustpilotBtn && (
        <div className="mt-8 text-center">
          <a
            href="https://www.trustpilot.com/review/firsthirehub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex gap-2 items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            View Reviews on Trustpilot <SquareArrowOutUpRight />
          </a>
        </div>
      )}
    </div>
  );
};

export default MasonryReviews;

