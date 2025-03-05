
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type PlanFeature = {
  title: string;
  included: boolean;
};

type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  cta: string;
  popular?: boolean;
};

const pricingPlans: PricingPlan[] = [
  {
    name: 'Basic',
    price: '$19',
    description: 'Essential protection for small businesses',
    features: [
      { title: 'Essential threat monitoring', included: true },
      { title: 'Security alerts and notifications', included: true },
      { title: 'Basic reporting', included: true },
      { title: 'Email support', included: true },
      { title: 'AI-driven threat detection', included: false },
      { title: 'Real-time analytics', included: false },
      { title: 'API integration', included: false },
      { title: '24/7 dedicated support', included: false },
    ],
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    price: '$49',
    description: 'Advanced protection for growing businesses',
    features: [
      { title: 'Essential threat monitoring', included: true },
      { title: 'Security alerts and notifications', included: true },
      { title: 'Basic reporting', included: true },
      { title: 'Email support', included: true },
      { title: 'AI-driven threat detection', included: true },
      { title: 'Real-time analytics', included: true },
      { title: 'API integration', included: true },
      { title: '24/7 dedicated support', included: false },
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Comprehensive security for large organizations',
    features: [
      { title: 'Essential threat monitoring', included: true },
      { title: 'Security alerts and notifications', included: true },
      { title: 'Basic reporting', included: true },
      { title: 'Email support', included: true },
      { title: 'AI-driven threat detection', included: true },
      { title: 'Real-time analytics', included: true },
      { title: 'API integration', included: true },
      { title: '24/7 dedicated support', included: true },
    ],
    cta: 'Contact Sales',
  },
];

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="pricing" className="py-24 bg-cyber-radial">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Flexible Pricing for Every Business
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            Choose the plan that suits your security needs and scale as your business grows.
          </p>
          
          <div className="inline-flex items-center justify-center p-1 mb-10 rounded-full bg-gray-100 dark:bg-cyber-gray">
            <button
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                billingCycle === 'monthly'
                  ? "bg-white dark:bg-cyber-blue text-gray-900 dark:text-white shadow"
                  : "text-gray-700 dark:text-gray-300 hover:text-cyber-blue"
              )}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                billingCycle === 'annual'
                  ? "bg-white dark:bg-cyber-blue text-gray-900 dark:text-white shadow"
                  : "text-gray-700 dark:text-gray-300 hover:text-cyber-blue"
              )}
              onClick={() => setBillingCycle('annual')}
            >
              Annual <span className="text-xs py-0.5 px-2 ml-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "glass-card relative p-8 transition-all duration-300 hover:shadow-xl",
                plan.popular ? "ring-2 ring-cyber-blue transform scale-105 md:scale-110" : ""
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cyber-blue text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== 'Custom' && (
                  <span className="text-gray-500 dark:text-gray-400 ml-1">
                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
                )}
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {plan.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <div className={cn(
                      "flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center mt-0.5",
                      feature.included ? "bg-green-100 dark:bg-green-900" : "bg-gray-100 dark:bg-gray-800"
                    )}>
                      {feature.included ? (
                        <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
                      ) : (
                        <span className="h-1 w-1 bg-gray-400 dark:bg-gray-600 rounded-full"></span>
                      )}
                    </div>
                    <span 
                      className={cn(
                        "ml-3 text-sm",
                        feature.included 
                          ? "text-gray-700 dark:text-gray-200" 
                          : "text-gray-500 dark:text-gray-400"
                      )}
                    >
                      {feature.title}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button
                className={cn(
                  "w-full", 
                  plan.popular 
                    ? "bg-cyber-blue hover:bg-cyber-blue-dark text-white" 
                    : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                )}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
