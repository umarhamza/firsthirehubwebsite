import { useState } from 'react';
import Modal from './Modal';
import { videoReviews } from '../data/reviews';

type Props = {
    sectionClass?: string
}

const VideoTextReviewCards = ({ sectionClass = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12' }:Props) => {
  const [selectedReview, setSelectedReview] = useState<typeof videoReviews[0] | null>(null);

  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
  };

  return (
    <>
      <div className={sectionClass}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoReviews.map((review, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              {/* YouTube Video Embed */}
              <div className="relative pt-[56.25%] bg-gray-100">
                <iframe
                  src={`https://www.youtube.com/embed/${review.youtubeVideoId}`}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              {/* Review Content Box */}
              <div className="p-6">
                {/* Star Rating */}
                <div className="flex mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Review Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {review.title}
                </h3>
                
                {/* Review Text */}
                <div className="text-gray-600 mb-4">
                  <p className="mb-2">{truncateText(review.review)}</p>
                  <button
                    onClick={() => setSelectedReview(review)}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read more
                  </button>
                </div>
                
                {/* Reviewer Info */}
                <div className="mt-4">
                  <p className="font-medium text-gray-900">{review.reviewerName}</p>
                  <p className="text-gray-500">{review.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Modal */}
      <Modal
        isOpen={!!selectedReview}
        onClose={() => setSelectedReview(null)}
        title={selectedReview?.title || ''}
      >
        <div className="space-y-6">
          {/* Video Embed in Modal */}
          <div className="relative pt-[56.25%] bg-gray-100 -mx-6 -mt-6">
            <iframe
              src={`https://www.youtube.com/embed/${selectedReview?.youtubeVideoId}`}
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Rating */}
          <div className="flex">
            {[...Array(selectedReview?.rating || 0)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Review Content */}
          <div className="space-y-4">
            {selectedReview?.review.split('\n').filter(para => para.trim()).map((paragraph, i) => (
              <p key={i} className="text-gray-600">
                {paragraph.trim()}
              </p>
            ))}
          </div>

          {/* Reviewer Info */}
          <div className="pt-4 border-t">
            <p className="font-medium text-gray-900">{selectedReview?.reviewerName}</p>
            {selectedReview?.company && (
              <p className="text-gray-500">{selectedReview.company}</p>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default VideoTextReviewCards;