import React from "react";
import Hero from "../components/Hero";
import { Users, Lightbulb, ChartPie, MonitorSmartphone, SquareArrowOutUpRight } from "lucide-react";
import ContactSection from "../components/ContactSection";
import { ArrowRight } from "lucide-react";
import SectionIntro from "../components/SectionIntro";
import Card from "../components/Card";
import CardSimpleWithButton from "../components/CardSimpleWithButton";

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
              A structured, results-driven approach to transform your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Initial Consultation",
                description:
                  "Understand your goals, challenges, and vision to craft a tailored growth strategy.",
              },
              {
                number: "02",
                title: "Brand & Needs Analysis",
                description:
                  "Analyze your brand identity and pinpoint areas of growth or improvement.",
              },
              {
                number: "03",
                title: "Creative & Talent Solutions",
                description:
                  "Deliver stunning visuals, engaging websites, and expert team-building consultancy.",
              },
              {
                number: "04",
                title: "Integration & Support",
                description:
                  "Provide ongoing support to ensure your business thrives with our solutions.",
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
          <CardSimpleWithButton
            background="bg-gradient-to-r from-blue-50 to-indigo-50"
            title="Read Our Reviews on Trustpilot"
            description="We're proud of our 4.8/5 rating from verified customers. See what makes our service stand out."
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
      </section>
      <ContactSection dark={true} />
    </>
  );
};

export default Home;
