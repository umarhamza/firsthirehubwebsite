import React from 'react';

type CaseStudy = {
    title: string;
    industry: string;
    description: string;
    // NOTE:
    // icon from lucide-react
    icon: React.ElementType; 
    outcome: string;
    timeline: string;
    challenge: string;
}

const CaseStudies = ({ caseStudies }: { caseStudies: CaseStudy[] }) => {
  return (
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
);
};

export default CaseStudies;
