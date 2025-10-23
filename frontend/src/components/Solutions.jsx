import React, { useEffect, useRef, useState } from 'react';

const Solutions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const solutions = [
    { name: 'Fomotech.ai', description: 'AI-powered technology insights' },
    { name: 'CxOworld.ai', description: 'Executive intelligence platform' },
    { name: 'Thinkvisual.ai', description: 'Visual content automation' },
    { name: 'Zaplo', description: 'Streamlined workflow solutions' }
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
    <section id="solutions" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* 3D Background layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-gray-100/40 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-gray-100/40 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image with organic blob shape */}
          <div className={`relative group perspective-1000 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            <div 
              className="relative overflow-hidden shadow-2xl transform transition-all duration-700" 
              style={{ 
                transformStyle: 'preserve-3d',
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                animation: 'morph 10s ease-in-out infinite'
              }}
            >
              <img
                src="https://images.pexels.com/photos/1181319/pexels-photo-1181319.jpeg"
                alt="Technology solutions"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
            </div>

            {/* 3D shadow effect */}
            <div className="absolute -bottom-8 left-8 right-8 h-8 bg-gradient-to-b from-gray-900/20 to-transparent blur-2xl rounded-full"></div>
          </div>

          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Solutions
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              In addition to our core services, we offer purpose-built solutions that address specific challenges across research, content, and creative workflows.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className={`p-6 bg-gradient-to-br from-white to-gray-50 hover:border-gray-400 hover:shadow-2xl transition-all duration-500 group cursor-pointer transform perspective-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 100 + 400}ms`,
                    transformStyle: 'preserve-3d',
                    borderRadius: '25% 75% 75% 25% / 75% 25% 75% 25%',
                    border: '1px solid #e5e7eb'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px) rotateX(5deg) scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) rotateX(0) scale(1)';
                  }}
                >
                  <div className="text-2xl font-bold text-gray-400 mb-2 group-hover:text-gray-900 transition-colors duration-300">{index + 1}.</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                    {solution.name}
                  </h3>
                  <p className="text-gray-600">{solution.description}</p>
                  
                  {/* Decorative element */}
                  <div className="mt-4 w-12 h-1 bg-gradient-to-r from-gray-900 to-gray-400 rounded-full transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;