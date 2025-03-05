
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';

type Testimonial = {
  id: number;
  content: string;
  author: string;
  role: string;
  company: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "ThreatGuardia has completely transformed our cybersecurity approach. The AI-driven detection system has caught several potential breaches that our previous solution missed entirely.",
    author: "Alex Chen",
    role: "CTO",
    company: "FinTech Solutions",
  },
  {
    id: 2,
    content: "The automated response capabilities have reduced our security team's workload by 60%. We can now focus on strategic initiatives rather than constantly putting out fires.",
    author: "Sarah Johnson",
    role: "Head of IT Security",
    company: "Global Retail Inc.",
  },
  {
    id: 3,
    content: "As a healthcare provider handling sensitive patient data, compliance is critical for us. ThreatGuardia's comprehensive reporting has made our audit processes significantly easier.",
    author: "Dr. Michael Rivera",
    role: "CISO",
    company: "HealthFirst Systems",
  },
  {
    id: 4,
    content: "The user behavior analytics feature detected unusual access patterns that turned out to be an attempted data breach. ThreatGuardia paid for itself in that single incident.",
    author: "Emma Thompson",
    role: "Security Operations Manager",
    company: "TechNova",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-cyber-gray-dark dark:to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted by Security Professionals
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            See what our customers say about our cybersecurity solution.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-[320px] md:h-[240px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "absolute inset-0 glass-card p-8 transition-all duration-500 ease-in-out",
                  index === activeIndex 
                    ? "opacity-100 translate-y-0 z-10" 
                    : "opacity-0 translate-y-8 z-0"
                )}
              >
                <div className="flex flex-col h-full">
                  <Quote className="h-10 w-10 text-cyber-blue opacity-20 mb-4" />
                  
                  <p className="text-lg text-gray-700 dark:text-gray-200 italic mb-6">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="mt-auto">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === activeIndex 
                    ? "w-8 bg-cyber-blue" 
                    : "w-2 bg-gray-300 dark:bg-gray-700"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
