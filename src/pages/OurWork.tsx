import React from 'react';
import { ArrowDown, SquareArrowOutUpRight } from 'lucide-react';
import ContactSection from '../components/ContactSection';
import Hero from '../components/Hero';
import CardSimpleWithButton from '../components/CardSimpleWithButton';
import MasonryReviews from '../components/MasonryReviews';

const OurWork: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Hero
          heading="Building Memorable Brand Identities <span class='block text-blue-600'>That Stand Out</span>"
          headingStyle2
          description="See how we've helped companies develop distinctive logos and brand websites that capture their unique value and connect with their target audience."
          buttonOneLabel="Get Started"
          buttonOneClickHandler={scrollToContact}
          buttonOneArrow={ArrowDown}
        />

        <div className="bg-white rounded-xl shadow-md overflow-hidden mt-8 p-6 lg:px-8 lg:pt-12 lg:pb-14">
          <h2 className="text-3xl font-bold mb-4 text-center">Read Our Client Reviews</h2>
          <p className="text-gray-600 mb-8 text-center">See what our clients have to say about working with us and the results we've helped them achieve.</p>
          <MasonryReviews />
        </div>

        <CardSimpleWithButton 
          title="Preview Our Work"
          description="Get PDF with links to companies we've worked with (opens in new tab)"
          buttons={[
            {
              label: "Preview Our Work",
              href: "https://drive.google.com/file/d/10-CJkC1uTX4fXbpxLvDOYU9O173DAHXd/view?usp=sharing",
              target: "_blank",
              icon: SquareArrowOutUpRight,
            }
          ]}
        />

        <div className="bg-white rounded-xl shadow-md overflow-hidden mt-8">
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default OurWork;
