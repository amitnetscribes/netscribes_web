import React, { useState, useEffect, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { BarChart3, Lightbulb, Cog } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const services = [
    {
      id: 'insights',
      label: 'Insights',
      icon: BarChart3,
      image: 'https://images.unsplash.com/photo-1758691736483-5f600b509962',
      description: 'We provide business, market, and consumer insights that help organizations make informed decisions, strengthen competitiveness, and support growth.',
      features: ['Data Analytics', 'Market Intelligence']
    },
    {
      id: 'engineering',
      label: 'Engineering',
      icon: Cog,
      image: 'https://images.unsplash.com/photo-1760346546767-95b89356a6bb',
      description: 'Build scalable solutions with cutting-edge technology and engineering excellence that drives digital transformation.',
      features: ['Cloud Solutions', 'AI/ML Integration']
    },
    {
      id: 'innovation',
      label: 'Innovation',
      icon: Lightbulb,
      image: 'https://images.unsplash.com/photo-1758519289074-9de36003622b',
      description: 'Transform your business with innovative approaches and creative solutions that keep you ahead of the competition.',
      features: ['Digital Strategy', 'Process Optimization']
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
    <section id="services" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Floating 3D Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-gray-200/30 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tl from-gray-200/30 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className={`text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Our Services
        </h2>

        <Tabs defaultValue="insights" className="w-full">
          <TabsList className={`grid w-full max-w-2xl mx-auto grid-cols-3 mb-12 h-auto bg-white/80 backdrop-blur-md p-2 rounded-xl shadow-lg border border-gray-200 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-gray-900 data-[state=active]:to-gray-700 data-[state=active]:text-white py-4 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {service.label}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="mt-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 group perspective-1000">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-105 hover:rotate-1" style={{ transformStyle: 'preserve-3d' }}>
                    <img
                      src={service.image}
                      alt={service.label}
                      className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
                  </div>
                </div>
                <div className="order-1 lg:order-2 space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed animate-fade-in">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-start p-4 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3"></div>
                        <h3 className="text-xl font-semibold text-gray-900">{feature}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Services;