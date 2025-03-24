import React, { useState } from 'react';
import { Loader2, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

/**
 * Contact Form Component
 * This form uses EmailJS for sending contact form submissions.
 */
const ContactForm: React.FC = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        message: ''
      });
      const [status, setStatus] = useState({
        loading: false,
        error: null as string | null,
        success: false
      });
    
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus({ loading: true, error: null as string | null, success: false });
        
        const templateParams = {
          from_name: values.name,
          reply_to: values.email,
          message: values.message,
        };
    
        emailjs
          .send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID!,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
            templateParams,
            {
              publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY!,
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
    
    <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" className="space-y-6">
    {status.loading && (
      <div className="text-blue-600 bg-blue-100 pt-2 pb-2.5 px-3 rounded-md">Sending message...</div>
    )}
    {status.error && (
      <div className="text-red-600 bg-red-100 pt-2 pb-2.5 px-3 rounded-md">{status.error}</div>
    )}
    {status.success && (
      <div className="text-green-600 bg-green-100 pt-2 pb-2.5 px-3 rounded-md flex items-center justify-between gap-2"><div>Message sent successfully!</div><CheckCircle className="h-5 w-5" /></div>
    )}
    
    <input type="hidden" name="form-name" value="contact" />
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-1.5 px-2"
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
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-1.5 px-2"
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
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-2 py-1.5"
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
      } text-white flex items-center justify-center gap-2`}
    >
      {status.loading && <Loader2 className="h-5 w-5 animate-spin" />}
      {status.loading ? 'Sending...' : 'Send Message'}
    </button>
  </form>
  );
};

export default ContactForm;
