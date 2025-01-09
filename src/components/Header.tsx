import { Users, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from './Button';
import Modal from './Modal';
import ContactForm from './ContactForm';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true)
    setIsMenuOpen(false)
  }

  return (
    <>
    <header className="bg-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Users className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">First Hire Hub</span>
            </Link>
          </div>
          <div className="hidden ml-auto mr-6 md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link to="/our-work" className="text-gray-700 hover:text-gray-900">
              Our Work
            </Link>
          </div>
          <button 
            onClick={openModal}
            className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
          >
            Get Started
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-2 py-2 space-y-2 text-center">
            <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Home
            </Link>
            <Link to="/our-work" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Our Work
            </Link>
            <Button onClick={openModal}>Get Started</Button>
          </div>
        )}
      </nav>
    </header>
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Get Started">
      <ContactForm />
    </Modal>
    </>
  );
}