import { Helmet } from 'react-helmet-async';

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | First Hire Hub</title>
        <meta 
          name="description" 
          content="First Hire Hub's privacy policy outlines how we collect, use, and protect your personal information."
        />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Fill out contact forms</li>
              <li>Sign up for our newsletter</li>
              <li>Book consultation calls</li>
              <li>Download our guides and resources</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Communicate with you about our services</li>
              <li>Send you requested materials and resources</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Protection</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:{' '}
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
