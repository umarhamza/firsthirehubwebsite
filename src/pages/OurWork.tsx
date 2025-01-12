import React from 'react';
import { ArrowRight, ArrowUpRight, SquareArrowOutUpRight } from 'lucide-react';
import ContactSection from '../components/ContactSection';
import Hero from '../components/Hero';
import CardSimpleWithButton from '../components/CardSimpleWithButton';

const OurWork: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
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
        />

        <div className="grid md:grid-cols-2 gap-8">
          <CardSimpleWithButton 
            title="Preview Our Work"
            description="Get PDF with links to companies we've worked with (opens in new tab)"
            buttons={[
              {
                label: "Preview Our Work",
                href: "https://drive.google.com/file/d/10-CJkC1uTX4fXbpxLvDOYU9O173DAHXd/view?usp=sharing",
                target: "_blank",
                icon: ArrowUpRight,
              }
            ]}
          />

          <CardSimpleWithButton
            title="Ready to Transform Your Business?"
            description="Join our success stories. Let's find the perfect first hire that will take your business to the next level."
            buttons={[
              {
                label: "Get Started",
                href: "#contact",
                onClick: scrollToContact,
                backgroundColor: "white",
                borderColor: "blue-600",
                textColor: "blue-600",
                icon: ArrowRight
              }
            ]}
          />
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden mt-8">
        <CardSimpleWithButton
            title="Read Our Reviews on Trustpilot"
            description="Leave us your feedback on Trustpilot and help others discover our services."
            buttons={[
              {
                label: "View Reviews",
                href: "https://www.trustpilot.com/review/firsthirehub.com",
                target: "_blank",
                icon: SquareArrowOutUpRight
              }
            ]}
          />
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden mt-8">
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default OurWork;
