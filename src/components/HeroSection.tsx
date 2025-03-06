
import React from 'react';
import { Shield, Lock, AlertTriangle, Activity } from 'lucide-react';
import ParticlesAnimation from './hero/ParticlesAnimation';
import FeatureCard from './hero/FeatureCard';
import HeroButtons from './hero/HeroButtons';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-white to-gray-50 dark:from-cyber-gray-dark dark:to-black">
      <ParticlesAnimation />
      
      <div className="absolute inset-0 bg-cyber-radial z-[1]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-24 z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 rounded-full bg-blue-50 dark:bg-blue-900/30 text-cyber-blue border border-cyber-blue/20 animate-fade-in">
            <Shield className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">AI-Powered Protection</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 animate-fade-in-up">
            Intelligent Cybersecurity <br/> 
            <span className="cyber-gradient-text">Threat Detection</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 opacity-0 animate-fade-in-up delay-100">
            Advanced AI algorithms that continuously monitor, detect, and mitigate cyber threats in real-time. Keep your business protected with our cloud-based security solution.
          </p>
          
          <HeroButtons />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto opacity-0 animate-fade-in-up delay-300">
            <FeatureCard 
              icon={Activity}
              title="Real-Time Monitoring"
              description="Continuous surveillance of your network to detect threats as they emerge."
            />
            
            <FeatureCard 
              icon={AlertTriangle}
              title="Threat Intelligence"
              description="AI-driven analytics to identify and categorize potential security risks."
            />
            
            <FeatureCard 
              icon={Lock}
              title="Automated Response"
              description="Instant countermeasures triggered automatically when threats are detected."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
