import { ArrowUpRight, Calendar, Mail, Phone } from 'lucide-react';
import ContactForm from './ContactForm';
import SocialMedia from './SocialMedia';

type ContactSectionProps = {
  dark?: boolean
  showBooking?: boolean
  bookingBgClass?: string
}

export default function ContactSection({ dark, showBooking = true, bookingBgClass = 'bg-blue-50' }: ContactSectionProps) {
  const backgroundClass = dark ? 'bg-gray-50' : 'bg-white'
  const formBackgroundClass = dark ? 'bg-white shadow-md' : 'bg-gray-50'
  const contactBgClass = dark ? 'p-8 rounded-xl bg-white shadow-md' : ''
  return (
    <>
    {showBooking && (
    <section className={`py-10 md:py-20 ${bookingBgClass}`} id="booking">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Book a 1-to-1 30 Minute Meeting</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Are you ready to take the first step toward building your online business? Join me for a free 30-minute Q&A session where I'll share valuable insights, practical advice, and actionable strategies to help you launch and grow your online venture.
          </p>
          <a
            href="https://calendly.com/ismaelfraser47/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            📆 Book Your Free Session
          </a>
        </div>
      </div>
    </section>
    )}
    <section id="contact" className={`py-20 ${backgroundClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          Ready to elevate your business? Contact us to start your journey today!
          </p>
        </div>
        <div className="grid md:grid-cols-2">
          <div className={`p-8 rounded-xl ${formBackgroundClass}`}>
            <ContactForm />
          </div>
          <div className={`space-y-8 md:ml-8 ${contactBgClass}`}>
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h6 className="font-semibold text-gray-900">Email</h6>
                <p className="text-gray-600">ismaelfraser47@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h6 className="font-semibold text-gray-900">Phone</h6>
                <p className="text-gray-600">+44 7931 217860</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Calendar className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h6 className="font-semibold text-gray-900">Book a Meeting</h6>
                <a 
                  href="https://calendly.com/ismaelfraser47/30min"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 flex items-center"
                >
                  <span>Schedule on Calendly</span> <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <SocialMedia />
          </div>
        </div>
      </div>
    </section>
    </>

  );
}