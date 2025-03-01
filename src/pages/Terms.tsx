import { Helmet } from 'react-helmet-async';

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | First Hire Hub</title>
        <meta 
          name="description" 
          content="First Hire Hub's terms of service outline the rules and guidelines for using our services and website."
        />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>

        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using First Hire Hub's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services</h2>
            <p>
              First Hire Hub provides business coaching, consulting, and educational resources. Our services include but are not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>One-on-one coaching sessions</li>
              <li>Digital guides and resources</li>
              <li>Community membership</li>
              <li>Educational content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Intellectual Property</h2>
            <p>
              All content, materials, and resources provided by First Hire Hub are protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Responsibilities</h2>
            <p>
              When using our services, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate and complete information</li>
              <li>Use the services in a lawful manner</li>
              <li>Respect the intellectual property rights of First Hire Hub</li>
              <li>Maintain the confidentiality of any login credentials</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Limitation of Liability</h2>
            <p>
              First Hire Hub provides services on an "as is" basis. We make no warranties, expressed or implied, and shall not be liable for any damages arising from the use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:{' '}
              <a href="mailto:ismaelfraser47@gmail.com" className="text-blue-600 hover:text-blue-800">
                ismaelfraser47@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
