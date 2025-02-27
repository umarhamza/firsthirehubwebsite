import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Play } from "lucide-react";
import Modal from "../components/Modal";
import MasonryReviews from "../components/MasonryReviews";
import VideoTextReviewCards from "../components/VideoTextReviewCards";
import EmailCaptureForm from "../components/EmailCaptureForm";

const LandingPage: React.FC = () => {
  // State for modals
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [isCommunityModalOpen, setIsCommunityModalOpen] = useState(false);
  
  // State for video player
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Add new state for video modal
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);




  // Video player controls
  const toggleVideo = () => {
    setIsVideoModalOpen(true);
    setIsVideoPlaying(true);
  };



  return (
    <>
      <Helmet>
        <title>Finding Your North Star: A Business Clarity Guide | First Hire Hub</title>
        <meta name="description" content="Download our free guide to find your business north star, define your target audience, and clarify your service offerings. Perfect for coaches and entrepreneurs." />
        <meta name="keywords" content="business clarity, north star, target audience, service offerings, business coach, entrepreneur guide" />
        <meta property="og:title" content="Finding Your North Star: A Business Clarity Guide | First Hire Hub" />
        <meta property="og:description" content="Download our free guide to find your business north star, define your target audience, and clarify your service offerings." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://firsthirehub.com" />
        <link rel="canonical" href="https://firsthirehub.com" />
      </Helmet>

      {/* Hero Section with Modal CTA */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get More Clients and <span className="text-blue-600 md:block">Grow Your Income</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover the proven framework that helps coaches and entrepreneurs find direction, attract ideal clients, and scale with confidence.
            </p>
            <button
              onClick={() => setIsPdfModalOpen(true)}
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center mx-auto"
            >
              Get Your Free Guide <ArrowRight className="ml-2" />
            </button>
          </div>
          
          {/* Video Section */}
          <div className="mt-12 max-w-3xl mx-auto">
            <h6 className="text-lg font-bold text-center text-gray-700 mb-2 italic">Watch Keiron's transformation story</h6>
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

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Business Clarity Matters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Without a clear direction, entrepreneurs struggle to attract clients and scale their business
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Find Your Direction",
                description: "Identify your unique strengths and position in the market to create a business that stands out from the competition"
              },
              {
                title: "Attract Ideal Clients",
                description: "Define your perfect audience and craft messaging that resonates deeply with their specific needs and challenges"
              },
              {
                title: "Scale With Confidence",
                description: "Create service packages and systems that deliver consistent results and allow you to grow without burnout"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-blue-50 p-8 rounded-lg border border-blue-100 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => setIsPdfModalOpen(true)}
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Get Your Free Guide <ArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Community Says</h2>
            <p className="text-gray-600">
              Join the list of successful business owners who transformed their
              businesses
            </p>
          </div>
          <VideoTextReviewCards sectionClass="mb-12 lg:mb-20" />
        </div>
      </section>

      {/* Call Booking Section with Modal */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 md:pr-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready for Personalized Guidance?</h2>
              <p className="text-xl text-gray-600 mb-6">
                Book a free 30-minute strategy call to discuss your specific business challenges and get expert advice tailored to your situation.
              </p>
              <button
                onClick={() => setIsCallModalOpen(true)}
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                Book Your Free Call <ArrowRight className="ml-2" />
              </button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">During Your Call, You'll:</h3>
                <ul className="space-y-3">
                  {[
                    "Identify your biggest business growth obstacles",
                    "Get clarity on your next strategic steps",
                    "Discover how our community can support your journey",
                    "Receive personalized recommendations for your situation"
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

      {/* Community Section with Modal */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Thriving Community</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with like-minded coaches and entrepreneurs who are committed to growth and success
            </p>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">The First Hire Hub Community</h3>
                <p className="text-gray-700 mb-6">
                  Get ongoing support, accountability, and expert guidance in our exclusive Skool community. Share challenges, celebrate wins, and grow alongside fellow entrepreneurs.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Weekly live coaching sessions",
                    "Exclusive resources and templates",
                    "Direct access to business experts",
                    "Supportive network of peers"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/3 text-center mt-8 md:mt-0">
                <button
                  onClick={() => setIsCommunityModalOpen(true)}
                  className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  Join Our Community <ArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">          
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-4">What Our Community Members Say</h2>
            <p className="text-gray-600">See what our clients have to say about working with us</p>
          </div>
          <MasonryReviews responsive={{ mobile: 1, tablet: 2, desktop: 3 }} showTrustpilotBtn={false} />
          <div className="text-center mt-12">
            <button
              onClick={() => setIsCommunityModalOpen(true)} 
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Join Our Community <ArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>      

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Clarity Journey Today</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Download your free "Finding Your North Star" guide and take the first step toward business clarity and confidence.
          </p>
          <button 
            onClick={() => setIsPdfModalOpen(true)}
            className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center font-medium"
          >
            Get Your Free Guide <ArrowRight className="ml-2" />
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

      {/* Add Video Modal */}
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
            src={`https://www.youtube.com/embed/wVMDTrVjm4w${isVideoPlaying ? '?autoplay=1' : ''}`}
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