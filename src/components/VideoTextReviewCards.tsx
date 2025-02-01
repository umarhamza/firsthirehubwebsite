import { useState } from 'react';
import Modal from './Modal';

type Props = {
    sectionClass?: string
}

type VideoReview = {
    youtubeVideoId: string
    rating: number
    title: string
    review: string
    reviewerName: string
    company?: string | null
}

const videoReviews: VideoReview[] = [
  {
    youtubeVideoId: "_mJnfJ1DI0g",
    rating: 5,
    title: "Completely Blown Away !!!",
    review: `
    Good afternoon, folks! My name is Greg Dahl, and I want to give a big shout-out and testimonial to my friend Ismael from First Hire Hub.

I can't recommend him enough! He recently helped me prepare for launching a community for men who are in toxic, narcissistic relationships—a subject I'm passionate about because of my personal experiences.

What stood out to me was how Ismael went the extra mile. He didn't just listen; he challenged me. He wanted to truly understand my level of knowledge on the topic. His approach—honest, straightforward, and constructive—was exactly what I needed. Steel sharpens steel, and that's precisely what he brought to the table.

We even did some role-playing during a simple Q&A call, which helped me refine my vision. And after the session, Ismael went above and beyond by sending me resources and documents to support the launch of my community.

This man genuinely cares and will go that extra mile for you. I highly recommend working with him. Thanks again, Ismael!

Have a great day!


Gregory Dahl
    `,
    reviewerName: "Greg Dahl",
    company: "Personal Development Coach"
  },
  {
    youtubeVideoId: "wVMDTrVjm4w",
    rating: 5,
    title: "He has truly been a game-changer!",
    review: `
Ismael Fraser has been coaching me daily, and his insights have been a complete game-changer.
I've worked with three different coaches and have been part of two other paid communities in the past. I thought I had my offer dialed in until we started this one-on-one coaching.

He helped me realise that I was targeting the wrong audience, guided me in narrowing it down, and helped me get laser-focused. Now, we're working on refining my offer. His approach is honest, strategic, and genuinely impactful.

The value he provides is incredible I know I should be paying much more for it. However, because of his integrity and honesty, he doesn't just raise his prices based on the immense value he's delivering.

If you're a business coach looking to level up, I highly recommend working with Ismael and First Hire Hub.

I cannot recommend him enough he has truly been a game-changer.
    `,
    reviewerName: "Keiron Mohamed",
    company: "Business Coach"
  },
  {
    youtubeVideoId: "TQSz46xFTOU",
    rating: 5,
    title: "Ismael Fraser's mentorship",
    review: `
Before Ismael Fraser's mentorship, I was stuck working for others, unsure how to break free and pursue my aspirations. I lacked confidence, clarity, and direction to start something of my own. But with Ismael's guidance, everything changed.

Over three transformative years, he taught me how to create a clear roadmap, stay focused, and take consistent action. His support helped me overcome challenges, unlock my potential, and, by Allah's grace, transition from an employee to a successful educational entrepreneur.

Today, I run a thriving business with momentum, a solid foundation, and a system that attracts paying students and 5-star reviews. What once felt like a distant dream is now a reality.

I can't recommend Ismael enough—his mentorship is invaluable for anyone ready to transform their life and achieve their goals.
    `,
    reviewerName: "Wayne Rowe",
    company: "CEO of Motiformance"
  },
  {
    youtubeVideoId: 'TQSz46xFTOU',
    company: null,
    rating: 5,
    reviewerName: "Bashir Vadia",
    title: "Ismael Fraser has pushed me and…",
    review: `Ismael Fraser has pushed me and motivated me to improve in everything I do and also away from business. This has been empowering and inspiring so that his knowledge can be used as artillery for my business to grow. I will continue to learn and develop more as i grow`,

  }
];

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
        <div className="space-y-4">
          <div className="flex mb-2">
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
          {selectedReview?.review.split('\n').filter(para => para.trim()).map((paragraph, i) => (
            <p key={i} className="text-gray-600">
              {paragraph.trim()}
            </p>
          ))}
          <div className="mt-4 pt-4 border-t">
            <p className="font-medium text-gray-900">{selectedReview?.reviewerName}</p>
            <p className="text-gray-500">{selectedReview?.company}</p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default VideoTextReviewCards;