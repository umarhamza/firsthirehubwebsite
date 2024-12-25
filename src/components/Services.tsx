import React from 'react';
import { Users, Target, BookOpen, Briefcase } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Gap Analysis',
    description: 'We help identify the key roles and skills your business needs to grow effectively.'
  },
  {
    icon: Briefcase,
    title: 'Role Creation',
    description: 'Craft tailored job descriptions and roles that align with your business goals.'
  },
  {
    icon: Users,
    title: 'Talent Matching',
    description: 'Find and connect with pre-vetted candidates that match your specific needs.'
  },
  {
    icon: BookOpen,
    title: 'Business Training',
    description: 'Comprehensive training in design, marketing, and business operations.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to help your business find and integrate the perfect first hire.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}