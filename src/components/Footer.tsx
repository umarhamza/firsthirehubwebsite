import { Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center mb-4">
            <Users className="h-8 w-8 text-blue-400" />
            <span className="ml-2 text-xl font-bold">First Hire Hub</span>
          </div>
          <p className="text-gray-400 mb-4">
            Helping coaches and entrepreneurs find clarity and grow their businesses.
          </p>
          
          <div className="flex space-x-4 mb-8 flex-wrap justify-center">
            <a 
              href="https://calendly.com/ismaelfraser47/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Book a Call
            </a>
            <a 
              href="https://www.skool.com/first-hire-hub-7163/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Join Community
            </a>
            <Link 
              to="/privacy-policy"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
          
          <div className="border-t border-gray-800 w-full pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} First Hire Hub. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}