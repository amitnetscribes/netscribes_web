import React from 'react';
import { ArrowRight } from 'lucide-react';

const Stats = () => {
  const stats = [
    { number: '20+', label: 'Years of leadership in Market Insights and Innovation' },
    { number: '544+', label: 'Brands and Organizations catered to' },
    { number: '3561+', label: 'Projects delivered successfully' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            A trusted partner for global enterprises
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Netscribes serves a diverse clientele, from Fortune 500 companies to emerging startups, across industries and stages of growth.
          </p>
          <button className="text-gray-900 font-semibold hover:text-gray-700 inline-flex items-center group">
            Know More
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">{stat.number}</div>
              <p className="text-gray-600 leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;