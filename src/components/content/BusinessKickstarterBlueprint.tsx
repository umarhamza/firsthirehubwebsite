import { ArrowUpRight, BarChart, Calendar, Target } from "lucide-react";
import Card from "../Card";

const BusinessKickstarterBlueprint = () => {
  return (

    <section id="kickstart" className="bg-white py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          Struggling to get your business off the ground?
        </h2>
        <p className="text-lg font-bold">Join the Free 7-Day Business Kickstart and in just 7 days, we'll help you:</p>
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
      <div className="text-center mt-8">
        <a
          href="https://www.skool.com/first-hire-hub-7163/calendar?eid=1e7414ac7da1479b9bb74e97bdc771c9&eoid=1738434600"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Join the Free Kickstart Now! <ArrowUpRight />
        </a>
      </div>
    </div>
  </section>

  );
};

export default BusinessKickstarterBlueprint;