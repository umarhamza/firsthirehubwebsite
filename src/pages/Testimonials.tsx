import React from "react";
import {  SquareArrowOutUpRight } from "lucide-react";
import ContactSection from "../components/ContactSection";
import Hero from "../components/Hero";
import CardSimpleWithButton from "../components/CardSimpleWithButton";
import MasonryReviews from "../components/MasonryReviews";

const Testimonials: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Hero
          heading="What Our Clients Say About Us <span class='block text-blue-600'>Success Stories</span>"
          headingStyle2
          description="Discover how we help businesses define their target audience, craft compelling offers, and build their authority."
        />

        <div className="mt-12">
          <MasonryReviews responsive={{ mobile: 1, tablet: 2, desktop: 3 }} />
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
