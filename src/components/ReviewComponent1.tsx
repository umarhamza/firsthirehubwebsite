import React, { useState } from "react";
import { Star, Play, SquareArrowOutUpRight } from "lucide-react";
import CardSimpleWithButton from "../components/CardSimpleWithButton";

const ReviewComponent1: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const testimonials = [
    {
      name: "Adel Abdullah",
      title: "Supporting a New Start",
      role: null,
      text: `Our new charity organistation has gained much from the support and guidance by Ismail. Ismail provided us with a step by step guide and goals that we needed to allow us to be as effective as possible and succeed. Such as fundraising goals and steps required to attain these. He also understand our needs and the wants of our target audience. Designing and creating a website which allows us to represent ourselves and inform our target audience!`,
      rating: 5,
      youtubeVideoId: "2eHWDoktHII",
      reviewUrl: "https://www.trustpilot.com/reviews/67856ed4af9bc95cd556f915",
    },
    {
      name: "Bashir Vadia",
      title: "Ismael Fraser has pushed me and…",
      role: "Founder",
      text: `Ismael Fraser has pushed me and motivated me to improve in everything I do and also away from business. This has been empowering and inspiring so that his knowledge can be used as artillery for my business to grow. I will continue to learn and develop more as i grow`,
      rating: 5,
      youtubeVideoId: "6LKzJa9Tars",
      reviewUrl: "https://www.trustpilot.com/users/61cf4279149fa50012fb7c9e",
    },
    {
      name: "Harvey Williams",
      title: "Thank you Ismael Fraser",
      role: "Founder",
      text: `Hello everyone, I just want to give a big thank you to Mr Ismael Fraser through his consultation business he's helped me start my company he's given me pointers on every step of the way. I've started with him from the very beginning where he helped me choose a brand name for my company. He's helped me to find the domain that would rank high on Google whenever someone searches anything related to my niche. He helped me to edit my website and gave me a lot of pointers I'm very very happy with working with him my business which has improved a lot. Also the most important thing that he's helped me with is to set up a Google my business account through the information that he's given me. It's been a huge huge help to me and my business. I just want to say thank you very much Mr Ismael Fraser for helping me a lot during these times thank you very much.`,
      rating: 5,
      youtubeVideoId: "bP3eBTYeXj0",
      reviewUrl: null,
    },
    {
      name: "Sulayman",
      title: "Thank you for your good advices and…",
      role: "Founder",
      text: `Thank you for your good advices and strategy ideas for my business. It was very good insightful discussion. Many thanks! Sulayman`,
      rating: 5,
      youtubeVideoId: null,
      reviewUrl: "https://www.trustpilot.com/reviews/67898ce757695b3c37953caf",
    },
    {
      name: "Hameed",
      title: "Very focused and knowledgeable…",
      role: "Founder of Property Business",
      text: `I greatly benefitted from Ismael's consultation for my property business. Struggling to integrate modern digital technologies, especially AI, his expert guidance helped me identify and apply the missing components. The results have been incredible, and my business is now thriving. Highly recommend his services!`,
      rating: 5,
      youtubeVideoId: null,
      reviewUrl: "https://www.trustpilot.com/reviews/6783cf4c9ca8aaef6d1a4e7e",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                {testimonial.youtubeVideoId && (
                  <button
                    onClick={() => setSelectedVideo(testimonial.youtubeVideoId)}
                    className="flex items-center gap-2 px-3 py-1 text-sm text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50"
                  >
                    <Play className="w-4 h-4" />
                    Watch Video
                  </button>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {testimonial.title}
              </h3>
              <p className="text-gray-700 text-lg mb-4">"{testimonial.text}"</p>
              <div className="border-t pt-4 md:flex md:gap-2 md:justify-between">
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                  {testimonial.role && (
                    <span className="text-gray-600">
                      &nbsp;-&nbsp;{testimonial.role}
                    </span>
                  )}
                </p>
                {testimonial.reviewUrl && (
                  <a
                    href={testimonial.reviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-800 mt-2 inline-block"
                  >
                    Read full review on Trustpilot
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div
              className="fixed inset-0 bg-black bg-opacity-50 cursor-pointer z-0"
              onClick={() => setSelectedVideo(null)}
            ></div>
            <div className="bg-white rounded-lg p-4 w-full max-w-3xl relative z-10">
              <div className="relative pt-[56.25%]">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo}`}
                  className="absolute top-0 left-0 w-full h-full bg-bla ck z-10"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-28 w-28 border-4 border-gray-300 border-t-blue-600"></div>
                </div>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        )}

        <CardSimpleWithButton
          title="Read Our Reviews on Trustpilot"
          description="Leave us your feedback on Trustpilot and help others discover our services."
          buttons={[
            {
              label: "View Reviews",
              href: "https://www.trustpilot.com/review/firsthirehub.com",
              target: "_blank",
              icon: SquareArrowOutUpRight,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default ReviewComponent1;
