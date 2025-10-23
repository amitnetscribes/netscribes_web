import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1758691736424-4b4273948341"
          alt="Business professional analyzing data"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlays for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-transparent to-gray-900/60"></div>
      </div>

      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-gray-600/10 to-gray-400/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-gray-600/10 to-gray-500/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Reinvent the Future.
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
              We help you turn today's data into tomorrow's advantage
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-6 text-lg group">
                Talk to Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg">
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