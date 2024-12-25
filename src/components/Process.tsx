import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We start by understanding your business, goals, and current challenges.'
  },
  {
    number: '02',
    title: 'Need Analysis',
    description: 'Identify the specific roles and skills that will drive your growth.'
  },
  {
    number: '03',
    title: 'Candidate Search',
    description: 'We find and screen candidates that match your requirements.'
  },
  {
    number: '04',
    title: 'Integration & Training',
    description: 'Support the onboarding process with comprehensive training.'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A structured approach to finding and integrating your perfect first hire.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-5xl font-bold text-blue-600/10 absolute -top-4 left-0">
                {step.number}
              </div>
              <div className="pt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}