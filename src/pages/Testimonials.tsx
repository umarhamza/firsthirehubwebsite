import React from "react";
import { Helmet } from "react-helmet-async";
import { SquareArrowOutUpRight } from "lucide-react";
import ContactSection from "../components/ContactSection";
import Hero from "../components/Hero";
import CardSimpleWithButton from "../components/CardSimpleWithButton";
import MasonryReviews from "../components/MasonryReviews";

const Testimonials: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50">
      <Helmet>
        <title>Client Testimonials - First Hire Hub | Success Stories</title>
        <meta name="description" content="Read real success stories from our clients. Discover how businesses have transformed their growth, increased leads, and built authority with First Hire Hub." />
        <meta name="keywords" content="client testimonials, business success stories, customer reviews, business coaching testimonials" />
        <meta property="og:title" content="Client Testimonials - First Hire Hub | Success Stories" />
        <meta property="og:description" content="Read real success stories from our clients. Discover how businesses have transformed their growth with First Hire Hub." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://firsthirehub.com/testimonials" />
        <link rel="canonical" href="https://firsthirehub.com/testimonials" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Hero
          heading="What Our Clients Say About Us <span class='block text-blue-600'>Success Stories</span>"
          headingStyle2
          description="Discover how we help businesses define their target audience, craft compelling offers, and build their authority."
        />

        <div className="mt-12">
          <MasonryReviews responsive={{ mobile: 1, tablet: 2, desktop: 3 }} showTrustpilotBtn={false} />
        </div>

        <CardSimpleWithButton
          className="my-8"
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

        <div className="bg-white rounded-xl shadow-md overflow-hidden mt-8">
          <ContactSection bookingBgClass="bg-gray-50" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
