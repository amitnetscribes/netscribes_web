import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Industries = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);

  const industries = [
    {
      title: 'Automotive',
      description: 'Helping OEMs and mobility providers optimize fleets with data-driven insights and connected vehicle innovation.',
      image: 'https://images.pexels.com/photos/8482870/pexels-photo-8482870.jpeg'
    },
    {
      title: 'Technology',
      description: 'Empowering tech companies with market intelligence and innovation strategies for sustained growth.',
      image: 'https://images.unsplash.com/photo-1760346546767-95b89356a6bb'
    },
    {
      title: 'Banking & Insurance',
      description: 'Delivering financial services insights and risk management solutions for competitive advantage.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg'
    },
    {
      title: 'Life Sciences & Healthcare',
      description: 'Supporting healthcare organizations with research insights and patient-centered innovation.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef'
    },
    {
      title: 'FMCG',
      description: 'Providing consumer insights and market trends to drive product innovation and market success.',
      image: 'https://images.unsplash.com/photo-1709715357520-5e1047a2b691'
    },
    {
      title: 'Ecommerce',
      description: 'Enabling online retailers with analytics and optimization strategies for enhanced customer experiences.',
      image: 'https://images.unsplash.com/photo-1616587656977-ac36a5a430bc'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="industries" ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-gray-200/30 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-gray-200/30 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Delivering specialized expertise across diverse sectors with deep understanding of industry-specific challenges and opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform perspective-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0 rotate-0' 
                  : 'opacity-0 translate-y-20 rotate-3'
              }`}
              style={{ 
                transitionDelay: `${index * 150 + 200}ms`,
                transformStyle: 'preserve-3d'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image with parallax effect */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                  style={{
                    transform: hoveredIndex === index ? 'scale(1.25)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent group-hover:via-gray-900/40 transition-all duration-500"></div>
                
                {/* 3D floating overlay */}
                <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white/30 rounded-xl backdrop-blur-sm transform transition-all duration-500 group-hover:rotate-45 group-hover:scale-110"></div>
              </div>

              {/* Content with slide-up effect */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-500">
                <h3 className="text-2xl font-bold mb-2 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                  {industry.title}
                </h3>
                <p className="text-gray-200 text-sm mb-4 line-clamp-2 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  {industry.description}
                </p>
                <Button
                  variant="ghost"
                  className="text-white hover:text-gray-200 p-0 h-auto font-semibold group/btn transform transition-all duration-300 group-hover:translate-x-2"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* 3D depth shadow */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent blur-xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;