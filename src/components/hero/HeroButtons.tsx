
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0 animate-fade-in-up delay-200">
      <Button
        size="lg"
        className="bg-cyber-blue hover:bg-cyber-blue-dark text-white w-full sm:w-auto px-8 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all"
      >
        Start Free Trial
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue/5 w-full sm:w-auto px-8 transition-all"
      >
        Schedule Demo
      </Button>
    </div>
  );
};

export default HeroButtons;
