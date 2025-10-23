import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px) scale(${1 + scrollY * 0.0002})`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1758691736424-4b4273948341"
          alt="Business professional analyzing data"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlays for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-transparent to-gray-900/60"></div>
      </div>

      {/* Floating Geometric Elements with 3D effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 right-10 w-32 h-32 border border-white/10 rounded-3xl backdrop-blur-sm"
          style={{
            transform: `translateY(${scrollY * 0.3}px) rotateZ(${scrollY * 0.05}deg)`,
            transformStyle: 'preserve-3d'
          }}
        ></div>
        <div 
          className="absolute bottom-40 left-20 w-24 h-24 border border-white/10 rounded-full backdrop-blur-sm"
          style={{
            transform: `translateY(${scrollY * -0.2}px) scale(${1 - scrollY * 0.0005})`,
            transformStyle: 'preserve-3d'
          }}
        ></div>
        <div 
          className="absolute top-1/2 right-1/4 w-40 h-40 bg-gradient-to-br from-white/5 to-transparent rounded-2xl backdrop-blur-sm"
          style={{
            transform: `translateY(${scrollY * 0.4}px) rotateX(${scrollY * 0.03}deg)`,
            transformStyle: 'preserve-3d'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl">
          {/* Content with staggered animation */}
          <div className="space-y-8">
            <h1 
              className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              Reinvent the Future.
            </h1>
            <p 
              className="text-xl lg:text-2xl text-gray-200 leading-relaxed opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              We help you turn today's data into tomorrow's advantage
            </p>
            <div 
              className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
            >
              <Button size="lg" className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-6 text-lg group transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
                Talk to Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;