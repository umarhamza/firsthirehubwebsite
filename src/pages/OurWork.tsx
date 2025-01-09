import React from 'react';
import { ArrowRight, Briefcase, Users, Target } from 'lucide-react';

const caseStudies = [
  {
    title: "Tech Startup Growth",
    industry: "Technology",
    description: "Helped a growing tech startup hire their first marketing manager, resulting in 150% increase in lead generation.",
    icon: Target,
    outcome: "150% increase in leads",
    timeline: "3 months",
    challenge: "Needed to scale marketing efforts while maintaining startup culture"
  },
  {
    title: "E-commerce Expansion",
    industry: "Retail",
    description: "Assisted an e-commerce business in hiring their first operations manager, streamlining processes and reducing costs.",
    icon: Briefcase,
    outcome: "30% cost reduction",
    timeline: "6 months",
    challenge: "Needed to improve operational efficiency"
  },
  {
    title: "Agency First Hire",
    industry: "Creative Services",
    description: "Supported a design agency in hiring their first project manager, improving client satisfaction and project delivery.",
    icon: Users,
    outcome: "95% client satisfaction",
    timeline: "4 months",
    challenge: "Needed to manage project timelines and client expectations"
  }
];

const OurWork: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transforming Businesses Through Strategic First Hires
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how we've helped businesses across different industries make crucial first hires that drove significant growth.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <study.icon className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{study.title}</h3>
              <p className="text-sm text-blue-600 mb-4">{study.industry}</p>
              <div className="text-sm text-gray-500 mb-4">Timeline: {study.timeline}</div>
              <p className="text-gray-600 mb-4"><span className="font-medium">Challenge:</span> {study.challenge}</p>
              <p className="text-gray-600 mb-6">{study.description}</p>
              <div className="flex items-center text-blue-600 font-semibold">
                <span className="mr-2">Outcome:</span>
                <span>{study.outcome}</span>
              </div>
            </div>
          ))}
        </div>

                {/* Portfolio Downloads Section */}
                <div className="text-center bg-white p-12 rounded-xl shadow-sm mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Download Our Portfolio
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get detailed case studies and success stories from our portfolio of first hires.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/portfolio/case-studies-2023.pdf" 
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 rounded-full text-blue-600 hover:bg-blue-50 transition-colors"
              download
            >
              Case Studies 2023
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="/portfolio/success-metrics.pdf"
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 rounded-full text-blue-600 hover:bg-blue-50 transition-colors"
              download
            >
              Success Metrics
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white p-12 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our success stories. Let's find the perfect first hire that will take your business to the next level.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center mx-auto"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
