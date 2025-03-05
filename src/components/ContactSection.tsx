
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare, PhoneCall, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Contact our security experts to learn how ThreatGuardia can protect your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-cyber-gray focus:outline-none focus:ring-2 focus:ring-cyber-blue dark:focus:ring-cyber-blue-light"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-cyber-gray focus:outline-none focus:ring-2 focus:ring-cyber-blue dark:focus:ring-cyber-blue-light"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-cyber-gray focus:outline-none focus:ring-2 focus:ring-cyber-blue dark:focus:ring-cyber-blue-light"
                  placeholder="Your company"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-cyber-gray focus:outline-none focus:ring-2 focus:ring-cyber-blue dark:focus:ring-cyber-blue-light"
                  placeholder="How can we help you?"
                />
              </div>
              
              <Button className="w-full bg-cyber-blue hover:bg-cyber-blue-dark text-white">
                Send Message <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="glass-card p-8 mb-6">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                    <PhoneCall className="h-5 w-5 text-cyber-blue" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-cyber-blue" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Email</h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">contact@threatguardia.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-cyber-blue" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Office</h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">
                      123 Security Ave<br />
                      San Francisco, CA 94103<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6">Customer Support</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our support team is available 24/7 to help you with any questions about our cybersecurity solutions.
              </p>
              <Button variant="outline" className="w-full border-cyber-blue text-cyber-blue hover:bg-cyber-blue/5">
                <MessageSquare className="mr-2 h-4 w-4" /> Chat with Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
