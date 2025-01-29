import React from "react";
import Hero from "../components/Hero";
import {
  Calendar,
  Users,
  Target,
  ArrowRight,
  Clock,
  DollarSign,
  BarChart,
} from "lucide-react";
import ContactSection from "../components/ContactSection";
import SectionIntro from "../components/SectionIntro";
import Card from "../components/Card";
import ReviewCarousel from "../components/ReviewCarousel";

const Home: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Hero
        heading={`Get <span class="text-blue-600">Leads</span>, Build <span class="text-blue-600">Authority</span> 
          <br className="hidden md:block" />& Grow your <span class="text-blue-600">Business</span>`}
        description="Helping business coaches & entrepreneurs attract leads, build authority, and grow their business through strategic hiring and proven systems."
        buttonOneLabel="Book Free Consultation"
        buttonTwoLabel="Join Free Kickstart"
        buttonOneClickHandler={() => scrollToSection("booking")}
        buttonTwoClickHandler={() => scrollToSection("kickstart")}
        buttonOneArrow={ArrowRight}
      />

      <section id="kickstart" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Free 7-Day Business Kickstart
            </h2>
            <p className="text-gray-600 mb-8">
              Daily Live Q&A at 1:30 PM EST | 6:30 PM London Time
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: "Expert Q&A Sessions",
                description:
                  "30-minute sessions with actionable insights tailored to your business",
              },
              {
                icon: Target,
                title: "Proven Strategies",
                description:
                  "Learn how to grow your profile and attract quality leads consistently",
              },
              {
                icon: BarChart,
                title: "Action Plan",
                description:
                  "Get a step-by-step plan to scale your business with confidence",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Community Says</h2>
            <p className="text-gray-600">
              Join hundreds of successful business owners who transformed their
              businesses
            </p>
          </div>
          <ReviewCarousel />
        </div>
      </section>

      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            title="Join a Community That Helps You Succeed"
            description="Transform your business with expert guidance and proven frameworks"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Double Your Income",
                description:
                  "Implement strategies that significantly boost your revenue",
              },
              {
                icon: Clock,
                title: "Reclaim Your Time",
                description:
                  "Build systems and teams that give you back your freedom",
              },
              {
                icon: Users,
                title: "Scale With Confidence",
                description:
                  "Get the support and guidance needed to grow sustainably",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              FREE Bonuses When You Join
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "First Hire Roadmap",
                description: "Step-by-step guide to making your first hire",
              },
              {
                title: "1-on-1 Onboarding Call",
                description: "Personal business growth session",
              },
              {
                title: "First Hire Blueprint",
                description: "Proven hiring framework",
              },
              {
                title: "Weekly Hiring Coaching",
                description: "Exclusive guidance & expert insights",
              },
            ].map((bonus, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              >
                <h3 className="text-xl font-semibold mb-2">{bonus.title}</h3>
                <p className="text-gray-600">{bonus.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection dark={true} />
    </>
  );
};

export default Home;
