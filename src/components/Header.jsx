import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/membership', name: 'Membership' },
    { path: '/events', name: 'Events' },
    { path: '/holiday-home', name: 'HolidayHome' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:shadow-lg transition">
              R
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-900">RAFOA</h1>
              <p className="text-xs text-gray-500 hidden sm:block">Retired Air Force Officers Association</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition relative group ${
                  isActive(link.path)
                    ? 'text-blue-900'
                    : 'text-gray-600 hover:text-blue-900'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-900 rounded-full"></span>
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-900 rounded-full group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-2 rounded-lg transition ${
                  isActive(link.path)
                    ? 'text-blue-900 bg-blue-50 font-semibold'
                    : 'text-gray-600 hover:text-blue-900 hover:bg-blue-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;