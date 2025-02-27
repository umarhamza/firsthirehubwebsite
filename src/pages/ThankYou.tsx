import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  CheckCircle,
  Download,
  Calendar,
  Users,
} from "lucide-react";
import Modal from "../components/Modal";
import EmailCaptureForm from "../components/EmailCaptureForm";

const ThankYou: React.FC = () => {
  const [hasEmail, setHasEmail] = useState(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get("email");
    if (email) {
      setHasEmail(true);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Thank You for Downloading Your Guide | First Hire Hub</title>
        <meta
          name="description"
          content="Thank you for downloading your Finding Your North Star guide. Access your PDF and explore next steps to grow your business."
        />
        <meta name="robots" content="noindex" />
      </Helmet>

      {/* Thank You Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-2 bg-green-100 rounded-full mb-6">
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Thank You for Downloading Your Guide!
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your "Finding Your North Star" guide is ready. Click the button
            below to download your PDF.
          </p>
          {hasEmail ? (
            <a
              href="/pdfs/finding-your-north-star-guide.pdf"
              download
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Download Your Guide <Download className="ml-2" />
            </a>
          ) : (
            <div>
              <h5 className="text-lg font-bold mb-3 text-red-700">Something went wrong. Please try again.</h5>
            <button
              onClick={() => setIsPdfModalOpen(true)}
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center mx-auto"
            >
                Download Your Free Guide Again <ArrowRight className="ml-2" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Next Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's how to get the most out of your guide and continue your
              business clarity journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Book a Strategy Call
              </h3>
              <p className="text-gray-600 mb-6">
                Get personalized guidance on implementing the strategies in your
                guide during a free 30-minute call.
              </p>
              <a
                href="https://calendly.com/ismaelfraser47/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center"
              >
                Schedule Your Call <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Join Our Community
              </h3>
              <p className="text-gray-600 mb-6">
                Connect with like-minded entrepreneurs and get ongoing support
                in our exclusive Skool community.
              </p>
              <a
                href="https://www.skool.com/first-hire-hub-7163/about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center"
              >
                Join Now <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Watch Free Training
              </h3>
              <p className="text-gray-600 mb-6">
                Access our YouTube channel for free training videos on business
                growth strategies.
              </p>
              <a
                href="https://www.youtube.com/@ismaelfraser47/playlists"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center"
              >
                Watch Now <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Email Confirmation Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Check Your Email
            </h2>
            <p className="text-gray-600 mb-6">
              We've also sent a copy of your guide to your email, along with
              some additional resources to help you on your business journey.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Tip:</strong> Add{" "}
                <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                  ismaelfraser47@gmail.com
                </span>{" "}
                to your contacts to ensure you receive all our emails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book your free strategy call today and get personalized guidance on
            implementing the strategies in your guide.
          </p>
          <a
            href="https://calendly.com/ismaelfraser47/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center font-medium"
          >
            Book Your Free Call <ArrowRight className="ml-2" />
          </a>
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
          setIsCallModalOpen={() => {}}
          setIsCommunityModalOpen={() => {}}
          type="pdf"
        />
      </Modal>
    </>
  );
};

export default ThankYou;
