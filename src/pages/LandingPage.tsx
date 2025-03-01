import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Play } from "lucide-react";
import Modal from "../components/Modal";
import MasonryReviews from "../components/MasonryReviews";
import VideoTextReviewCards from "../components/VideoTextReviewCards";
import EmailCaptureForm from "../components/EmailCaptureForm";

// A/B testing version - either 'guide' or 'call'
const AB_TEST_VERSION = "guide";

const LandingPage: React.FC = () => {
  // State for modals
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [isCommunityModalOpen, setIsCommunityModalOpen] = useState(false);

  // State for video player
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // State for A/B testing
  const [abTestVersion, setAbTestVersion] = useState<"guide" | "call">(
    AB_TEST_VERSION as "guide" | "call"
  );

  // Set up A/B testing on component mount
  useEffect(() => {
    // You can implement more sophisticated A/B testing logic here
    // For now, we're using the constant defined above
    setAbTestVersion(AB_TEST_VERSION);

    // Track page view for analytics
    if (typeof window !== "undefined") {
      console.log(`A/B Test Version: ${AB_TEST_VERSION}`);
      // Add your analytics tracking code here
    }
  }, []);

  // Video player controls
  const toggleVideo = () => {
    setIsVideoModalOpen(true);
    setIsVideoPlaying(true);
  };

  // Primary CTA handler based on A/B test version
  const handlePrimaryCTA = () => {
    if (abTestVersion === "guide") {
      setIsPdfModalOpen(true);
    } else {
      setIsCallModalOpen(true);
    }
  };

  // Get primary CTA text based on A/B test version
  const getPrimaryCTAText = () => {
    return abTestVersion === "guide"
      ? "Get Your Free Guide"
      : "Book Your Free Call";
  };

  const showSecondaryContent = false;

  return (
    <>
      <Helmet>
        <title>
          Finding Your North Star: A Business Clarity Guide | First Hire Hub
        </title>
        <meta
          name="description"
          content="Download our free guide to find your business north star, define your target audience, and clarify your service offerings. Perfect for coaches and entrepreneurs."
        />
        <meta
          name="keywords"
          content="business clarity, north star, target audience, service offerings, business coach, entrepreneur guide"
        />
        <meta
          property="og:title"
          content="Finding Your North Star: A Business Clarity Guide | First Hire Hub"
        />
        <meta
          property="og:description"
          content="Download our free guide to find your business north star, define your target audience, and clarify your service offerings."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://firsthirehub.com" />
        <link rel="canonical" href="https://firsthirehub.com" />
      </Helmet>

      {/* Hero Section with Primary CTA */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold leading-tight mb-6">
              <span className="text-blue-600 mb-1">Gain Clarity, Attract Clients</span> {' '}
              <span className="lg:text-[0.89em] lg:block text-gray-700">and Scale with Confidence!</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover the proven framework that helps coaches and entrepreneurs
              find direction, attract ideal clients, and scale with confidence.
            </p>
            <button
              onClick={handlePrimaryCTA}
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center mx-auto"
            >
              {getPrimaryCTAText()} <ArrowRight className="ml-2" />
            </button>
          </div>

          {/* Video Section */}
          <div className="mt-12 max-w-3xl mx-auto">
            <h6 className="text-lg font-bold text-center text-gray-700 mb-2 italic">
              Watch Keiron's transformation story
            </h6>
            <div
              className="relative rounded-xl overflow-hidden shadow-xl cursor-pointer"
              onClick={toggleVideo}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <Play className="h-8 w-8 text-blue-600 ml-1" />
                </div>
              </div>
              <img
                src="/images/Keiron Mohamed.png"
                alt="Video thumbnail"
                className="w-full h-96 md:h-[500px] object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Guide Preview Section - 50/50 Split */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:space-x-12">
            {/* Text Content - Left Side */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What's Inside Your North Star Guide
              </h2>
              <p className="text-gray-700 mb-6">
                Just like navigating through a desert requires knowing your location first, 
                building a successful business starts with understanding where you are now.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Find Your Business Location</h3>
                    <p className="text-gray-600">Identify exactly where you are in your business journey to determine your next steps</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Define Your Ideal Client</h3>
                    <p className="text-gray-600">Create a clear client avatar to attract the right people who value your services</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Refine Your Offerings</h3>
                    <p className="text-gray-600">Structure your services into a value ladder that converts and retains clients</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Scale With Confidence</h3>
                    <p className="text-gray-600">Learn practical steps to automate, delegate, and grow without burnout</p>
                  </div>
                </div>
              </div>
              
              <button
                onClick={handlePrimaryCTA}
                className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                {getPrimaryCTAText()} <ArrowRight className="ml-2" />
              </button>
            </div>
            
            {/* Image - Right Side */}
            <div className="md:w-1/2">
              <div className="relative">
                <img
                  src="/images/first-hire-hub-north-star-guide.webp"
                  alt="Business Clarity Guide Preview"
                  className="rounded-lg shadow-xl w-full object-cover"
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg">
                  <span className="font-bold">Free Download</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Social Proof */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Real Results from Real Entrepreneurs</h2>
            <p className="text-gray-600">
              See how coaches and business owners found clarity and achieved 
              breakthrough growth
            </p>
          </div>
          <VideoTextReviewCards sectionClass="mb-12 lg:mb-20" />

          {/* Add CTA after testimonials */}
          <div className="text-center mt-8">
            <button
              onClick={handlePrimaryCTA}
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              {getPrimaryCTAText()} <ArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>

            {/* Benefits Section */}
            <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Business Clarity Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Without a clear direction, entrepreneurs struggle to attract
              clients and scale their business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Find Your Direction",
                description:
                  "Identify your unique strengths and position in the market to create a business that stands out from the competition",
              },
              {
                title: "Attract Ideal Clients",
                description:
                  "Define your perfect audience and craft messaging that resonates deeply with their specific needs and challenges",
              },
              {
                title: "Scale With Confidence",
                description:
                  "Create service packages and systems that deliver consistent results and allow you to grow without burnout",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-blue-50 p-8 rounded-lg border border-blue-100 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={handlePrimaryCTA}
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              {getPrimaryCTAText()} <ArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {showSecondaryContent && (
        <>
          {/* Secondary Content Section - Only shown in appropriate A/B test version */}
          {abTestVersion === "guide" && (
            <section className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="md:flex md:items-center md:justify-between">
                  <div className="md:w-1/2 md:pr-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Ready for Personalized Guidance?
                    </h2>
                    <p className="text-xl text-gray-600 mb-6">
                      After downloading your free guide, book a free 30-minute
                      strategy call to discuss your specific business
                      challenges.
                    </p>
                    <button
                      onClick={() => setIsCallModalOpen(true)}
                      className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-colors inline-flex items-center"
                    >
                      Book Your Free Call <ArrowRight className="ml-2" />
                    </button>
                  </div>
                  <div className="md:w-1/2 mt-8 md:mt-0">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        During Your Call, You'll:
                      </h3>
                      <ul className="space-y-3">
                        {[
                          "Identify your biggest business growth obstacles",
                          "Get clarity on your next strategic steps",
                          "Discover how our community can support your journey",
                          "Receive personalized recommendations for your situation",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Secondary Content Section - Only shown in appropriate A/B test version */}
          {abTestVersion === "call" && (
            <section className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="md:flex md:items-center md:justify-between">
                  <div className="md:w-1/2 md:pr-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Want More Business Resources?
                    </h2>
                    <p className="text-xl text-gray-600 mb-6">
                      After booking your call, download our free "Finding Your
                      North Star" guide to start your clarity journey.
                    </p>
                    <button
                      onClick={() => setIsPdfModalOpen(true)}
                      className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-colors inline-flex items-center"
                    >
                      Get Your Free Guide <ArrowRight className="ml-2" />
                    </button>
                  </div>
                  <div className="md:w-1/2 mt-8 md:mt-0">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        In This Guide, You'll Learn:
                      </h3>
                      <ul className="space-y-3">
                        {[
                          "How to identify your unique business North Star",
                          "Strategies to define your perfect target audience",
                          "Frameworks for creating compelling service offerings",
                          "Methods to stand out in a crowded marketplace",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      )}
      










      {/* More Testimonials Section */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-4">
              What Our Community Members Say
            </h2>
            <p className="text-gray-600">
              See what our clients have to say about working with us
            </p>
          </div>
          <MasonryReviews
            responsive={{ mobile: 1, tablet: 2, desktop: 3 }}
            showTrustpilotBtn={false}
          />

          {/* Add CTA after testimonials */}
          <div className="text-center mt-12">
            <button
              onClick={handlePrimaryCTA}
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              {getPrimaryCTAText()} <ArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Start Your Clarity Journey Today
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {abTestVersion === "guide"
              ? 'Download your free "Finding Your North Star" guide and take the first step toward business clarity and confidence.'
              : "Book your free strategy call and take the first step toward business clarity and confidence."}
          </p>
          <button
            onClick={handlePrimaryCTA}
            className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center font-medium"
          >
            {getPrimaryCTAText()} <ArrowRight className="ml-2" />
          </button>
        </div>
      </section>

      {/* Modals */}
      <Modal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        title="Get Your Free Business Clarity Guide"
      >
        <EmailCaptureForm
          setIsPdfModalOpen={setIsPdfModalOpen}
          setIsCallModalOpen={setIsCallModalOpen}
          setIsCommunityModalOpen={setIsCommunityModalOpen}
          type="pdf"
        />
      </Modal>

      <Modal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
        title="Book Your Free Strategy Call"
      >
        <EmailCaptureForm
          setIsPdfModalOpen={setIsPdfModalOpen}
          setIsCallModalOpen={setIsCallModalOpen}
          setIsCommunityModalOpen={setIsCommunityModalOpen}
          type="call"
        />
      </Modal>

      <Modal
        isOpen={isCommunityModalOpen}
        onClose={() => setIsCommunityModalOpen(false)}
        title="Join Our Community"
      >
        <EmailCaptureForm
          setIsPdfModalOpen={setIsPdfModalOpen}
          setIsCallModalOpen={setIsCallModalOpen}
          setIsCommunityModalOpen={setIsCommunityModalOpen}
          type="community"
        />
      </Modal>

      {/* Video Modal */}
      <Modal
        isOpen={isVideoModalOpen}
        onClose={() => {
          setIsVideoModalOpen(false);
          setIsVideoPlaying(false);
        }}
        title="Keiron's transformation story"
        maxWidth="max-w-4xl"
      >
        <div className="aspect-video">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/wVMDTrVjm4w${
              isVideoPlaying ? "?autoplay=1" : ""
            }`}
            title="Testimonial Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </>
  );
};

export default LandingPage;
