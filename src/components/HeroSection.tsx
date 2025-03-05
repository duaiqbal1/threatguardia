
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Lock, AlertTriangle, Activity } from 'lucide-react';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let connections: Connection[] = [];
    
    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.min(800, window.innerHeight * 0.9);
      initParticles();
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      type: string;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.type = Math.random() > 0.8 ? 'threat' : 'normal';
        this.color = this.type === 'threat' ? '#FF453A' : '#0A84FF';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    class Connection {
      from: Particle;
      to: Particle;
      age: number;
      maxAge: number;
      width: number;

      constructor(from: Particle, to: Particle) {
        this.from = from;
        this.to = to;
        this.age = 0;
        this.maxAge = 100 + Math.random() * 100;
        this.width = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.age++;
        return this.age < this.maxAge;
      }

      draw() {
        if (!ctx) return;
        const opacity = 1 - this.age / this.maxAge;
        ctx.beginPath();
        ctx.moveTo(this.from.x, this.from.y);
        ctx.lineTo(this.to.x, this.to.y);
        ctx.strokeStyle = this.from.type === 'threat' || this.to.type === 'threat' 
          ? `rgba(255, 69, 58, ${opacity * 0.5})` 
          : `rgba(10, 132, 255, ${opacity * 0.2})`;
        ctx.lineWidth = this.width;
        ctx.stroke();
      }
    }

    function initParticles() {
      particles = [];
      connections = [];
      
      const particleCount = Math.max(30, Math.min(100, Math.floor(canvas.width * canvas.height / 15000)));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function connectParticles() {
      const connectionLimit = 2;
      
      for (let i = 0; i < particles.length; i++) {
        let connectCount = 0;
        
        for (let j = i + 1; j < particles.length; j++) {
          if (connectCount >= connectionLimit) break;
          
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Connect particles within a certain distance
          if (distance < canvas.width * 0.15) {
            if (Math.random() > 0.985) {
              connections.push(new Connection(particles[i], particles[j]));
              connectCount++;
            }
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Connect particles occasionally
      if (Math.random() > 0.95) {
        connectParticles();
      }
      
      // Update and draw connections
      connections = connections.filter(connection => {
        const isActive = connection.update();
        if (isActive) {
          connection.draw();
        }
        return isActive;
      });
      
      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-white to-gray-50 dark:from-cyber-gray-dark dark:to-black">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-0 opacity-70"
      />
      
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto opacity-0 animate-fade-in-up delay-300">
            <div className="glass-card p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-cyber-blue" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Real-Time Monitoring</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Continuous surveillance of your network to detect threats as they emerge.</p>
            </div>
            
            <div className="glass-card p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-cyber-blue" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Threat Intelligence</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">AI-driven analytics to identify and categorize potential security risks.</p>
            </div>
            
            <div className="glass-card p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <Lock className="h-6 w-6 text-cyber-blue" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Automated Response</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Instant countermeasures triggered automatically when threats are detected.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
