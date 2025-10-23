import React from 'react';

const Partners = () => {
  const partners = [
    {
      name: 'Microsoft Azure',
      logo: 'https://logos-world.net/wp-content/uploads/2021/02/Microsoft-Azure-Logo.png'
    },
    {
      name: 'AWS',
      logo: 'https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo.png'
    },
    {
      name: 'Databricks',
      logo: 'https://www.databricks.com/sites/default/files/inline-images/databricks-logo-mobile.png'
    },
    {
      name: 'Neo4j',
      logo: 'https://go.neo4j.com/rs/710-RRC-335/images/neo4j_logo.png'
    },
    {
      name: 'Fivetran',
      logo: 'https://fivetran.com/static/images/fivetran-logo.svg'
    },
    {
      name: 'Snowflake',
      logo: 'https://logos-world.net/wp-content/uploads/2022/11/Snowflake-Logo.png'
    },
    {
      name: 'Power BI',
      logo: 'https://logoeps.com/wp-content/uploads/2013/03/power-bi-vector-logo.png'
    },
    {
      name: 'Google Cloud',
      logo: 'https://logos-world.net/wp-content/uploads/2021/02/Google-Cloud-Logo.png'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
          Our Partners
        </h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          We work with trusted partners to deliver solutions that keep businesses future-ready.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;