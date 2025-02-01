import { SquareArrowOutUpRight, Calendar, Mail, Phone } from 'lucide-react';
import ContactForm from './ContactForm';
import SocialMedia from './SocialMedia';
import BookOneOnOne from './content/BookOneOnOne';

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
<BookOneOnOne sectionClass={bookingBgClass} />
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
                <a 
                  href="https://calendly.com/ismaelfraser47/30min"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='block'
                  >
                <h6 className="font-semibold text-gray-900" style={{fontSize: 16}}>Book a Meeting</h6>

                  <span
                  className="text-gray-600 hover:text-blue-600 flex items-center"
                  >Schedule on Calendly<SquareArrowOutUpRight className="h-4 w-4" /></span> 
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