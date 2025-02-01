import { SquareArrowOutUpRight } from "lucide-react";

const FreeBonusWhenYouJoin = () => {
  const content = [
    {
      title: "Growth Strategy Roadmap",
      description: "Step-by-step guide to growing your business",
    },
    {
      title: "1-on-1 Onboarding Call",
      description: "Personal business growth session",
    },
    {
      title: "Business Growth Blueprint",
      description: "Proven growth framework",
    },
    {
      title: "Weekly Strategy Coaching",
      description: "Exclusive guidance & expert insights",
    },
  ]
  
    return (
    <section className="bg-gray-50 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          FREE Bonuses When You Join
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {content.map((bonus, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
          >
            <h3 className="text-xl font-semibold mb-2">{bonus.title}</h3>
            <p className="text-gray-600">{bonus.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-gray-600">Ready to get started? <a
          href="https://www.skool.com/first-hire-hub-7163/about"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 inline-flex items-center"
        >
          Join our community for free <SquareArrowOutUpRight className="ml-1 h-4 w-4"/>
        </a></p>
      </div>
    </div>
  </section>
  );
};

export default FreeBonusWhenYouJoin;