
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-cyber-gray-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-cyber-blue" />
              <span className="font-bold text-xl">ThreatGuardia</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              Advanced SaaS-based cybersecurity threat detection platform powered by AI and machine learning to protect your business from evolving cyber threats.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-cyber-blue transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-cyber-blue transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-cyber-blue transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-cyber-blue transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/features" className="text-gray-600 dark:text-gray-300 hover:text-cyber-blue dark:hover:text-cyber-blue transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 dark:text-gray-300 hover:text-cyber-blue dark:hover:text-cyber-blue transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-gray-600 dark:text-gray-300 hover:text-cyber-blue dark:hover:text-cyber-blue transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link to="/integrations" className="text-gray-600 dark:text-gray-300 hover:text-cyber-blue dark:hover:text-cyber-blue transition-colors">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/blog" className="text-gray-600 dark:text-gray-300 hover:text-cyber-blue dark:hover:text-cyber-blue transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-gray-600 dark:text-gray-300 hover:text-cyber-blue dark:hover:text-cyber-blue transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-gray-600 dark:text-gray-300 hover:text-cyber-blue dark:hover:text-cyber-blue transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link to="/webinars" className="text-gray-600 dark:text-gray-300 hover:text-cyber-blue dark:hover:text-cyber-blue transition-colors">
                  Webinars
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-cyber-blue dark:hover:text-cyber-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-cyber-blue dark:hover:text-cyber-blue transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 dark:text-gray-300 hover:text-cyber-blue dark:hover:text-cyber-blue transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/legal" className="text-gray-600 dark:text-gray-300 hover:text-cyber-blue dark:hover:text-cyber-blue transition-colors">
                  Legal
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} ThreatGuardia. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-500 dark:text-gray-400 text-sm hover:text-cyber-blue dark:hover:text-cyber-blue transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 dark:text-gray-400 text-sm hover:text-cyber-blue dark:hover:text-cyber-blue transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-500 dark:text-gray-400 text-sm hover:text-cyber-blue dark:hover:text-cyber-blue transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
