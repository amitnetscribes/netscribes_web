import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { BarChart3, Lightbulb, Cog } from 'lucide-react';

const Services = () => {
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

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16">
          Our Services
        </h2>

        <Tabs defaultValue="insights" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12 h-auto bg-gray-100 p-2 rounded-xl">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="data-[state=active]:bg-white data-[state=active]:text-gray-900 py-4 rounded-lg transition-all"
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
                <div className="order-2 lg:order-1">
                  <img
                    src={service.image}
                    alt={service.label}
                    className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
                  />
                </div>
                <div className="order-1 lg:order-2 space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
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