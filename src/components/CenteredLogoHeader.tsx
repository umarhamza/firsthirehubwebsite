import React from 'react';
import { Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const CenteredLogoHeader: React.FC = () => {
  return (
    <header className="bg-white py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <Link to="/">
            <div className="flex items-center hover:opacity-80 transition-opacity">
              <Users className="h-10 w-10 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">First Hire Hub</span>
            </div>
          </Link>
      </div>
    </header>
  );
};

export default CenteredLogoHeader;
