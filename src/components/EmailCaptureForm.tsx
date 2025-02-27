import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { CheckCircle, Loader2 } from "lucide-react";

type Props = {
    type: 'pdf' | 'call' | 'community'
    setIsPdfModalOpen: (open: boolean) => void
    setIsCallModalOpen: (open: boolean) => void
    setIsCommunityModalOpen: (open: boolean) => void
}

export default function EmailCaptureForm ({ type, setIsPdfModalOpen, setIsCallModalOpen, setIsCommunityModalOpen }: Props) {


      // State for form values and submission status
  const [values, setValues] = useState({
    name: '',
    email: '',
  });
  
  const [status, setStatus] = useState({
    loading: false,
    error: null as string | null,
    success: false
  });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues(prev => ({
          ...prev,
          [e.target.name]: e.target.value
        }));
      };

        // Form submission handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, type: 'pdf' | 'call' | 'community') => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });
    
    let message = "";
    let redirectUrl = "";
    
    switch(type) {
      case 'pdf':
        message = "PDF Download Request: Finding Your North Star";
        redirectUrl = `/thank-you?email=${values.email}`;
        break;
      case 'call':
        message = "Call Booking Request";
        redirectUrl = "https://calendly.com/ismaelfraser47/30min";
        break;
      case 'community':
        message = "Community Join Request";
        redirectUrl = "https://www.skool.com/first-hire-hub-7163/about";
        break;
    }

    const templateParams = {
      from_name: values.name,
      reply_to: values.email,
      message: message,
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
          
          // Close modals and redirect after a short delay
          setTimeout(() => {
            setIsPdfModalOpen(false);
            setIsCallModalOpen(false);
            setIsCommunityModalOpen(false);
            
            window.location.href = redirectUrl;
          }, 1500);
          
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          setStatus({ 
            loading: false, 
            error: 'Failed to process your request. Please try again later.', 
            success: false 
          });
          console.log('FAILED...', error);
        }
      );
  };

    return (
    <form onSubmit={(e) => handleSubmit(e, type)} className="space-y-4">
      {status.loading && (
        <div className="text-blue-600 bg-blue-100 pt-2 pb-2.5 px-3 rounded-md flex items-center">
          <Loader2 className="h-5 w-5 animate-spin mr-2" /> Processing your request...
        </div>
      )}
      {status.error && (
        <div className="text-red-600 bg-red-100 pt-2 pb-2.5 px-3 rounded-md">{status.error}</div>
      )}
      {status.success && (
        <div className="text-green-600 bg-green-100 pt-2 pb-2.5 px-3 rounded-md flex items-center">
          <CheckCircle className="h-5 w-5 mr-2" /> Success! Redirecting you...
        </div>
      )}
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3"
          required
          value={values.name}
          onChange={handleChange}
          placeholder="John Smith"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2 px-3"
          required
          value={values.email}
          onChange={handleChange}
          placeholder="john@example.com"
        />
      </div>
      <button
        type="submit"
        disabled={status.loading}
        className={`w-full px-6 py-3 rounded-full transition-colors ${
          status.loading 
            ? 'bg-blue-400 cursor-not-allowed' 
            : 'bg-blue-600 hover:bg-blue-700'
        } text-white flex items-center justify-center gap-2 font-medium`}
      >
        {status.loading && <Loader2 className="h-5 w-5 animate-spin" />}
        {status.loading ? 'Processing...' : type === 'pdf' ? 'Download Free Guide' : type === 'call' ? 'Book Your Call' : 'Join Our Community'}
      </button>
      <p className="text-xs text-gray-500 text-center mt-2">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </form>
  )
}