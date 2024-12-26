import React from 'react';
import { Mail, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = React.useState({
    loading: false,
    error: null,
    success: false
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });
    
    const templateParams = {
      from_name: values.name,
      reply_to: values.email,
      message: values.message,
    };

    console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        templateParams,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY!,
        }
      )
      .then(
        (response) => {
          setStatus({ loading: false, error: null, success: true });
          setValues({ name: '', email: '', message: '' }); // Reset form
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          setStatus({ 
            loading: false, 
            error: 'Failed to send message. Please try again later.', 
            success: false 
          });
          console.log('FAILED...', error);
        }
      );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to find your perfect first hire? Contact us today to start your journey.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-xl">
            <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" className="space-y-6">
              {status.loading && (
                <div className="text-blue-600">Sending message...</div>
              )}
              {status.error && (
                <div className="text-red-600">{status.error}</div>
              )}
              {status.success && (
                <div className="text-green-600">Message sent successfully!</div>
              )}
              
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                  value={values.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                  value={values.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status.loading}
                className={`w-full px-6 py-3 rounded-full transition-colors ${
                  status.loading 
                    ? 'bg-blue-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700'
                } text-white`}
              >
                {status.loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">ismaelfraser47@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">+44 7931 217860</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}