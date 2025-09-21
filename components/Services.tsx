
import React from 'react';
import type { Service } from '../types';
import { servicesList } from './data'; // Import from the new central data file

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/30 transform hover:-translate-y-2 transition-all duration-300">
    <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-slate-700 mx-auto">
      <service.icon className="w-8 h-8 text-cyan-400" />
    </div>
    <h3 className="text-xl font-semibold text-center text-white mb-2">{service.title}</h3>
    <p className="text-gray-400 text-center text-sm">{service.description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">خدمات ما</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">ارائه راهکارهای کامل و یکپارچه برای تمام نیازهای دیجیتال شما.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {servicesList.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
