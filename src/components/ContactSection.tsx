import { Mail, Phone } from 'lucide-react';
import ContactForm from './ContactForm';
import SocialMedia from './SocialMedia';

type ContactSectionProps = {
  dark?: boolean
}

export default function ContactSection({ dark }: ContactSectionProps) {
  const backgroundClass = dark ? 'bg-gray-50' : 'bg-white'
  const formBackgroundClass = dark ? 'bg-white shadow-md' : 'bg-gray-50'
  const contactBgClass = dark ? 'p-8 rounded-xl bg-white shadow-md' : ''
  return (
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
            <SocialMedia />
          </div>
        </div>
      </div>
    </section>
  );
}