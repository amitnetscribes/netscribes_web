import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Industries = () => {
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

  return (
    <section id="industries" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
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
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{industry.title}</h3>
                <p className="text-gray-200 text-sm mb-4 line-clamp-2">{industry.description}</p>
                <Button
                  variant="ghost"
                  className="text-white hover:text-gray-200 p-0 h-auto font-semibold group/btn"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;