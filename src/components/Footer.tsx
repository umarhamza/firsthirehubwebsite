import { Users } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center mb-4">
            <Users className="h-8 w-8 text-blue-400" />
            <span className="ml-2 text-xl font-bold">First Hire Hub</span>
          </div>
          <p className="text-gray-400 mb-8">
            Helping businesses grow through strategic marketing and proven systems.
          </p>
          <div className="border-t border-gray-800 w-full pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} First Hire Hub. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}