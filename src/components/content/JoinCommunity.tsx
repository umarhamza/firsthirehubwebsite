import Card from "../Card";
import SectionIntro from "../SectionIntro";
import {
    Users,
    Clock,
    DollarSign,
    SquareArrowOutUpRight,
  } from "lucide-react";  

const JoinCommunity = () => {
  return (

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
      <div className="mt-12 text-center">
        <a
          href="https://www.skool.com/first-hire-hub-7163/about"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex gap-2 items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Join the Community <SquareArrowOutUpRight/>
        </a>
      </div>
    </div>
  </section>

  );
};

export default JoinCommunity;