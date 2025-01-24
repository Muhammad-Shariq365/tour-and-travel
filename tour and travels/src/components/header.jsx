import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';


const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Tours', path: '/tours' },
  { name: 'Hajj & Ummrah', path: '/hajj-umrah' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);

    // Prevent scrolling when mobile menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const stickyStyles = {
    position: 'sticky',
    top: '0',
    zIndex: '50', // Keep the navbar on top
    backgroundColor: 'white',
    borderBottom: '1px solid #e5e5e5',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  return (
    <nav style={stickyStyles} className="flex items-center justify-between px-4 py-4 md:px-8">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img  alt="Logo" className="h-10 sm:h-12 md:h-14" />
      </Link>

      {/* Nav Links for Large Screens */}
      <div className="hidden md:flex space-x-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="text-gray-800 hover:text-blue-600 transition duration-300"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-800 focus:outline-none"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? (
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>

      {/* Mobile Nav Links */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute top-full left-0 w-full bg-white shadow-md md:hidden"
            style={{ zIndex: '10' }} // Make sure the mobile menu is behind the navbar
          >
            <div className="flex flex-col items-center space-y-2 px-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-800 hover:text-orange-500 transition duration-300"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    document.body.style.overflow = 'auto'; // Restore scrolling when a link is clicked
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
