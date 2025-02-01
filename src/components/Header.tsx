import { Users, Menu, X, SquareArrowOutUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from './Button';
import Modal from './Modal';
import ContactForm from './ContactForm';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigationItems = [
    { path: '/', label: 'Home', ariaLabel: 'Go to homepage' },
    { path: '/our-work', label: 'Our Work', ariaLabel: 'View our client success stories and portfolio' },
    { path: '/testimonials', label: 'Testimonials', ariaLabel: 'Read client testimonials and reviews' },
    { 
      path: 'https://www.youtube.com/@ismaelfraser47', 
      label: 'YouTube',
      isExternal: true,
      ariaLabel: 'Visit our YouTube channel for business growth tips'
    },
  ];

  const openModal = () => {
    setIsModalOpen(true)
    setIsMenuOpen(false)
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

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
            {navigationItems.map((item) => (
              item.isExternal ? (
                <a 
                  key={item.path}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.ariaLabel}
                  className="text-gray-700 hover:text-blue-600 flex items-center justify-between gap-2"
                >
                  {item.label}
                  <SquareArrowOutUpRight className="h-4 w-4" />
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  aria-label={item.ariaLabel}
                  className="text-gray-700 hover:text-blue-600"
                >
                  {item.label}
                </Link>
              )
            ))}
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
            {isMenuOpen ? (
              <X className="h-8 w-8" />
            ) : (
              <Menu className="h-8 w-8" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-2 py-2 space-y-2 text-center">
            {navigationItems.map((item) => (
              item.isExternal ? (
                <a 
                  key={item.path}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.ariaLabel}
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 flex items-center justify-between gap-2"
                >
                  {item.label} <SquareArrowOutUpRight className="h-4 w-4" />
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  aria-label={item.ariaLabel}
                  className="block px-4 py-2 text-gray-700 hover:text-blue-600"
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              )
            ))}
            <Button className='!mt-4' onClick={openModal}>Get Started</Button>
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