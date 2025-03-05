
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';

const Features = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Features</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center">
            Explore the comprehensive security features that make ThreatGuardia the leading cybersecurity solution.
          </p>
        </div>
        <FeaturesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Features;
