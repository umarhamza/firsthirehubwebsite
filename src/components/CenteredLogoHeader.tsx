import React from 'react';
import { Users } from 'lucide-react';

const CenteredLogoHeader: React.FC = () => {
  return (
    <header className="bg-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="flex items-center">
          <Users className="h-10 w-10 text-blue-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">First Hire Hub</span>
        </div>
      </div>
    </header>
  );
};

export default CenteredLogoHeader;
