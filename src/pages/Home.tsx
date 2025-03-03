import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import { ArrowRight } from "lucide-react";
import ContactSection from "../components/ContactSection";
import MasonryReviews from "../components/MasonryReviews";
import FreeBonusWhenYouJoin from "../components/content/FreeBonusWhenYouJoin";
import JoinCommunity from "../components/content/JoinCommunity";
import VideoTextReviewCards from "../components/VideoTextReviewCards";

const Home: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>First Hire Hub - Get Leads & Build Authority for Your Business</title>
        <meta name="description" content="Transform your business with expert guidance. Get leads, build authority & grow your business with proven strategies. Join our community of successful entrepreneurs." />
        <meta name="keywords" content="business growth, lead generation, authority building, business coaching, entrepreneurship" />
        <meta property="og:title" content="First Hire Hub - Get Leads & Build Authority for Your Business" />
        <meta property="og:description" content="Transform your business with expert guidance. Get leads, build authority & grow your business with proven strategies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://firsthirehub.com" />
        <link rel="canonical" href="https://firsthirehub.com" />
      </Helmet>
      <Hero
        heading={`Get <span class="text-blue-600">Leads</span>, Build <span class="text-blue-600">Authority</span> 
          <br className="hidden md:block" />& Grow your <span class="text-blue-600">Business</span>`}
        description="We'll help you define your target audience, craft compelling offers, grow your profile, attract leads, and build authority through testimonials and reviews."
        buttonOneLabel="Book Free Consultation"
        buttonOneClickHandler={() => scrollToSection("booking")}
        buttonOneArrow={ArrowRight}
      />
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
          
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-4">Trustpilot Reviews</h2>
            <p className="text-gray-600">See what our clients have to say about working with us</p>
          </div>
          <MasonryReviews responsive={{ mobile: 1, tablet: 2, desktop: 3 }} />
        </div>
      </section>
      <JoinCommunity />
      <FreeBonusWhenYouJoin />
      <ContactSection dark={true} />
    </>
  );
};

export default Home;
