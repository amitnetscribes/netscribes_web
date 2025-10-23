import React from 'react';

const Solutions = () => {
  const solutions = [
    { name: 'Fomotech.ai', description: 'AI-powered technology insights' },
    { name: 'CxOworld.ai', description: 'Executive intelligence platform' },
    { name: 'Thinkvisual.ai', description: 'Visual content automation' },
    { name: 'Zaplo', description: 'Streamlined workflow solutions' }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1181319/pexels-photo-1181319.jpeg"
              alt="Technology solutions"
              className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent rounded-2xl"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
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
                  className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                >
                  <div className="text-2xl font-bold text-gray-900 mb-2">{index + 1}.</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                    {solution.name}
                  </h3>
                  <p className="text-gray-600">{solution.description}</p>
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