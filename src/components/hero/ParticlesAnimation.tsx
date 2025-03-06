
import React, { useEffect, useRef } from 'react';
import { Particle, Connection } from '@/utils/particles/particleClasses';

const ParticlesAnimation = () => {
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

    function initParticles() {
      particles = [];
      connections = [];
      
      const particleCount = Math.max(30, Math.min(100, Math.floor(canvas.width * canvas.height / 15000)));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
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
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      });
      
      // Connect particles occasionally
      if (Math.random() > 0.95) {
        connectParticles();
      }
      
      // Update and draw connections
      connections = connections.filter(connection => {
        const isActive = connection.update();
        if (isActive) {
          connection.draw(ctx);
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
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full z-0 opacity-70"
    />
  );
};

export default ParticlesAnimation;
