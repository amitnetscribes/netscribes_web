import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Insights = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const insights = [
    {
      title: 'Case Studies',
      description: 'Real-world transformations and measurable impact stories',
      stat: 'Increased operational efficiency by 35%',
      image: 'https://images.unsplash.com/photo-1758691736433-4078b93abd72',
      cta: 'Explore Case Studies'
    },
    {
      title: 'Blogs',
      description: 'Cutting-edge insights and thought leadership content',
      stat: 'Generated 500% increase in qualified leads',
      image: 'https://images.unsplash.com/photo-1758519289074-9de36003622b',
      cta: 'Explore Blogs'
    },
    {
      title: 'Whitepapers',
      description: 'Comprehensive research and strategic frameworks',
      stat: 'Reduced compliance costs by 40%',
      image: 'https://images.unsplash.com/photo-1758691463193-9d2b21fdb3ba',
      cta: 'Explore Whitepapers'
    }
  ];

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

  return (
    <section id="insights" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Animated 3D background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-gradient-to-br from-gray-100/40 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-gradient-to-tl from-gray-100/40 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className={`text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          What We Deliver
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform perspective-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                transitionDelay: `${index * 200 + 200}ms`,
                transformStyle: 'preserve-3d'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px) rotateX(5deg) scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) rotateX(0) scale(1)';
              }}
            >
              {/* Image with zoom effect */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                
                {/* Floating decorative element */}
                <div className="absolute top-4 right-4 w-12 h-12 border-2 border-white/40 rounded-lg backdrop-blur-sm transform transition-all duration-500 group-hover:rotate-90"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 bg-gradient-to-b from-white to-gray-50">
                <h3 className="text-2xl font-bold text-gray-900 transform transition-transform duration-300 group-hover:translate-x-1">
                  {insight.title}
                </h3>
                <p className="text-gray-600">{insight.description}</p>
                <div className="py-3 px-4 bg-gradient-to-br from-gray-100 to-white rounded-lg shadow-inner border border-gray-200 transform transition-all duration-300 group-hover:shadow-md">
                  <p className="text-sm font-semibold text-gray-900">{insight.stat}</p>
                </div>
                <Button
                  variant="ghost"
                  className="text-gray-900 hover:text-gray-700 p-0 h-auto font-semibold group/btn w-full justify-start transform transition-all duration-300 group-hover:translate-x-2"
                >
                  {insight.cta}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* 3D shadow effect */}
              <div className="absolute -bottom-4 left-4 right-4 h-4 bg-gradient-to-b from-gray-900/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;