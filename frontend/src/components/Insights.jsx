import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Insights = () => {
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

  return (
    <section id="insights" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16">
          What We Deliver
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">{insight.title}</h3>
                <p className="text-gray-600">{insight.description}</p>
                <div className="py-3 px-4 bg-white rounded-lg">
                  <p className="text-sm font-semibold text-gray-900">{insight.stat}</p>
                </div>
                <Button
                  variant="ghost"
                  className="text-gray-900 hover:text-gray-700 p-0 h-auto font-semibold group/btn w-full justify-start"
                >
                  {insight.cta}
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

export default Insights;