
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 h-20 z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-white/80 dark:bg-cyber-gray-dark/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container h-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-cyber-blue animate-pulse-slow" />
          <span className="font-bold text-xl">ThreatGuardia</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/"
            className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-cyber-blue dark:hover:text-cyber-blue-light transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/features"
            className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-cyber-blue dark:hover:text-cyber-blue-light transition-colors"
          >
            Features
          </Link>
          <Link 
            to="/pricing"
            className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-cyber-blue dark:hover:text-cyber-blue-light transition-colors"
          >
            Pricing
          </Link>
          <Link 
            to="/contact"
            className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-cyber-blue dark:hover:text-cyber-blue-light transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="ghost"
            className="text-sm font-medium"
          >
            Log In
          </Button>
          <Button
            className="bg-cyber-blue hover:bg-cyber-blue-dark text-white transition-colors shadow-md hover:shadow-lg"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-cyber-blue hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <X className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="block h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden absolute inset-x-0 top-20 transform transition-transform ease-in-out duration-300 bg-white dark:bg-cyber-gray-dark shadow-lg',
          mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="block px-3 py-4 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-cyber-blue hover:bg-gray-50 dark:hover:bg-gray-800"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/features"
            className="block px-3 py-4 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-cyber-blue hover:bg-gray-50 dark:hover:bg-gray-800"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className="block px-3 py-4 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-cyber-blue hover:bg-gray-50 dark:hover:bg-gray-800"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-4 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-cyber-blue hover:bg-gray-50 dark:hover:bg-gray-800"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center px-5">
            <Button
              className="w-full bg-cyber-blue hover:bg-cyber-blue-dark text-white transition-colors shadow-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
