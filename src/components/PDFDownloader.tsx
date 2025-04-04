import React from 'react';
import { ArrowDown } from 'lucide-react';

interface PDFDownloaderProps {
  userName: string;
  userEmail: string;
}

const PDFDownloader: React.FC<PDFDownloaderProps> = ({ userName, userEmail }) => {
  return (
    <div className="text-center">
      <p className="text-lg text-gray-700 mb-6">
        Thank you, {userName}! Your guide is ready to download.
      </p>
      
      <a
        href="/pdfs/Finding_Your_North_Star_Guide.pdf"
        download="Finding_Your_North_Star_Guide.pdf"
        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
      >
        Download Your Guide <ArrowDown className="ml-2 h-5 w-5" />
      </a>
      
      <p className="mt-6 text-sm text-gray-500">
        We've also sent a copy to {userEmail} for your convenience.
      </p>
      
      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">What's Next?</h3>
        <p className="text-gray-700 mb-4">
          To get the most out of your guide, we recommend booking a free strategy call to discuss how to apply these concepts to your specific situation.
        </p>
        <a 
          href="https://calendly.com/ismaelfraser47/30min" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 text-blue-600 transition-colors"
        >
          Book Your Free Call
        </a>
      </div>
    </div>
  );
};

export default PDFDownloader; 