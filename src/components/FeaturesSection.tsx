
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { 
  Shield, Database, Eye, Activity, 
  BarChartHorizontal, UserCheck, Zap, AlertTriangle, 
  Lock, FileText, Code, MessageSquare 
} from 'lucide-react';

// Feature card component 
const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description,
  delay = 0,
  className
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  delay?: number;
  className?: string;
}) => {
  return (
    <div 
      className={cn(
        "glass-card p-6 opacity-0",
        `animate-fade-in-up delay-${delay}`,
        className
      )}
    >
      <div className="h-12 w-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-cyber-blue" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

// Main features component
const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = sectionRef.current?.querySelectorAll('.glass-card');
            elements?.forEach((el, i) => {
              setTimeout(() => {
                el.classList.remove('opacity-0');
              }, i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="features" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-cyber-gray-dark"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto mb-16 text-center">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 rounded-full bg-blue-50 dark:bg-blue-900/30 text-cyber-blue border border-cyber-blue/20">
            <Zap className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Powerful Features</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comprehensive Protection for Your Digital Assets
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our SaaS platform combines advanced technology with intuitive design to provide enterprise-grade security for businesses of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={Shield} 
            title="Proactive Threat Detection" 
            description="AI-powered algorithms continuously analyze network activity to identify potential security breaches before they happen."
            delay={100}
          />
          
          <FeatureCard 
            icon={Activity} 
            title="Real-time Monitoring" 
            description="Monitor network traffic, system logs, and user activities around the clock to maintain complete visibility."
            delay={200}
          />
          
          <FeatureCard 
            icon={AlertTriangle} 
            title="Automated Response" 
            description="Trigger automated security measures when threats are detected, minimizing the need for manual intervention."
            delay={300}
          />
          
          <FeatureCard 
            icon={UserCheck} 
            title="User Behavior Analytics" 
            description="Detect anomalies in login patterns and access permissions to prevent unauthorized access and data theft."
            delay={400}
          />
          
          <FeatureCard 
            icon={BarChartHorizontal} 
            title="Advanced Analytics" 
            description="Visualize security data through intuitive dashboards to gain actionable insights and strengthen your security posture."
            delay={500}
          />
          
          <FeatureCard 
            icon={Database} 
            title="Secure Data Storage" 
            description="Protect sensitive information with enterprise-grade encryption and secure access controls."
            delay={600}
          />
          
          <FeatureCard 
            icon={Eye} 
            title="Vulnerability Scanning" 
            description="Regularly scan your systems for vulnerabilities and receive prioritized remediation recommendations."
            delay={700}
          />
          
          <FeatureCard 
            icon={FileText} 
            title="Compliance Reporting" 
            description="Generate detailed audit trails and security reports to meet regulatory requirements and demonstrate due diligence."
            delay={800}
          />
          
          <FeatureCard 
            icon={Lock} 
            title="Seamless Integration" 
            description="Integrate with your existing security framework and business applications through our flexible API."
            delay={900}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
