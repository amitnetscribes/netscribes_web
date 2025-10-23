import React, { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive background elements that follow mouse */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[600px] h-[600px] bg-gradient-to-br from-gray-300/30 to-transparent rounded-full blur-3xl transition-all duration-300"
          style={{
            left: `${mousePosition.x - 300}px`,
            top: `${mousePosition.y - 300}px`,
          }}
        ></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-gray-300/20 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-gray-300/20 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Floating 3D elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-gray-400/20 rounded-2xl backdrop-blur-sm animate-float" style={{ transformStyle: 'preserve-3d' }}></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-gray-400/20 rounded-full backdrop-blur-sm animate-float-delayed" style={{ transformStyle: 'preserve-3d' }}></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-gradient-to-br from-gray-300/10 to-transparent rounded-3xl backdrop-blur-sm animate-float"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-4xl mx-auto text-center space-y-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Let's Build Tomorrow Together
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get in touch to explore how our data-driven insights and innovative solutions can prepare you for the future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg group transform hover:scale-110 hover:shadow-2xl transition-all duration-300"
              style={{
                transformStyle: 'preserve-3d'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1) rotateX(5deg) translateZ(20px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) rotateX(0) translateZ(0)';
              }}
            >
              Talk to our experts
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;