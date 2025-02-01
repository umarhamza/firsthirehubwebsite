import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowDown, SquareArrowOutUpRight } from 'lucide-react';
import ContactSection from '../components/ContactSection';
import Hero from '../components/Hero';
import CardSimpleWithButton from '../components/CardSimpleWithButton';
import MasonryReviews from '../components/MasonryReviews';

const OurWork: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("booking");
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50">
      <Helmet>
        <title>Our Work - First Hire Hub | Business Growth Success Stories</title>
        <meta name="description" content="Discover how we've helped business coaches and entrepreneurs build authority and attract quality leads. View our portfolio of successful digital transformations." />
        <meta name="keywords" content="business success stories, digital transformation, business coaching results, lead generation case studies" />
        <meta property="og:title" content="Our Work - First Hire Hub | Business Growth Success Stories" />
        <meta property="og:description" content="Discover how we've helped business coaches and entrepreneurs build authority and attract quality leads." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://firsthirehub.com/our-work" />
        <link rel="canonical" href="https://firsthirehub.com/our-work" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Hero
          heading="Transform Your Brand's Digital Presence <span class='block text-blue-600'>With Proven Systems</span>"
          headingStyle2
          description="See how we've helped business coaches and entrepreneurs build authority and attract quality leads through strategic branding and memorable digital experiences."
          buttonOneLabel="Book Free Consultation"
          buttonOneClickHandler={scrollToContact}
          buttonOneArrow={ArrowDown}
        />

        <div className="bg-white rounded-xl shadow-md overflow-hidden mt-8 p-6 lg:px-8 lg:pt-12 lg:pb-14">
          <h2 className="text-3xl font-bold mb-4 text-center">Success Stories from Our Community</h2>
          <p className="text-gray-600 mb-8 text-center">Join the list of successful business owners who have transformed their digital presence and scaled their impact.</p>
          <MasonryReviews />
        </div>

        <CardSimpleWithButton 
          className='mt-8'
          title="See Our Client Success Stories"
          description="Download our portfolio showcasing how we've helped coaches and entrepreneurs double their impact (opens in new tab)"
          buttons={[
            {
              label: "View Success Stories",
              href: "https://drive.google.com/file/d/10-CJkC1uTX4fXbpxLvDOYU9O173DAHXd/view?usp=sharing",
              target: "_blank",
              icon: SquareArrowOutUpRight,
            }
          ]}
        />

        <div className="bg-white rounded-xl shadow-md overflow-hidden mt-8">
          <ContactSection bookingBgClass="bg-gray-50" />
        </div>
      </div>
    </div>
  );
};

export default OurWork;
