import React from "react";
import Hero from "../components/Hero";
import { Users, Lightbulb, ChartPie, MonitorSmartphone, ArrowRight } from "lucide-react";
import ContactSection from "../components/ContactSection";
import SectionIntro from "../components/SectionIntro";
import Card from "../components/Card";
import MasonryReviews from "../components/MasonryReviews";

const Home: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Hero
        heading={`
          Empower Your Business Growth with 
          <span class='text-blue-600'>First Hire Hub!</span>
        `}
        description="From stunning websites and professional logos to impactful brochures and expert team-building consultancy, we deliver everything you need to scale and supercharge your business."
        buttonOneLabel="Get Started"
        buttonTwoLabel="Learn More"
        buttonOneClickHandler={() => scrollToSection("contact")}
        buttonTwoClickHandler={() => scrollToSection("services")}
        buttonOneArrow={ArrowRight}
      />
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            title="Our Services"
            description="Comprehensive solutions tailored to help your business thrive."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Creative Branding",
                description:
                  "Craft professional logos, brochures, and visuals that reflect your brand's essence.",
              },
              {
                icon: MonitorSmartphone,
                title: "Website Development",
                description:
                  "Build stunning, user-friendly websites that elevate your online presence.",
              },
              {
                icon: Users,
                title: "Talent Consultancy",
                description:
                  "Identify, onboard, and train the perfect team to accelerate your business growth.",
              },
              {
                icon: ChartPie,
                title: "Business Strategy Training",
                description:
                  "Equip yourself with impactful tools and strategies to scale your operations effectively.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
            Clear and actionable steps to drive your business forward.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Discovery",
                description:
                  "We work with you to uncover your goals, challenges, and growth opportunities.",
              },
              {
                number: "02",
                title: "Strategic Planning",
                description:
                  "Craft a tailored roadmap that aligns with your vision and business needs.",
              },
              {
                number: "03",
                title: "Creative Solutions",
                description:
                  "Deliver impactful designs, websites, and team-building strategies to achieve results.",
              },
              {
                number: "04",
                title: "Ongoing Support",
                description:
                  "Provide continuous support to ensure your business thrives long-term.",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-5xl font-bold text-blue-600/10 absolute -top-4 left-0">
                  {step.number}
                </div>
                <div className="pt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Read Our Client Success Stories</h2>
          <p className="text-gray-600 mb-8 text-center">Discover how we've helped businesses find their perfect first technical hire and transform their operations.</p>
          <MasonryReviews />
        </div>
      </section>
      <ContactSection dark={true} />
    </>
  );
};

export default Home;
