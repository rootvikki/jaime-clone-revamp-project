
import React from 'react';
import { Settings, Home, Building, Wrench, Shield, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Solar",
      description: "Complete solar solutions for homes, from design to installation and monitoring.",
      features: ["Free Site Assessment", "Custom Design", "Professional Installation", "Performance Monitoring"]
    },
    {
      icon: Building,
      title: "Commercial Solar",
      description: "Large-scale solar installations for businesses and industrial facilities.",
      features: ["Energy Audits", "ROI Analysis", "Scalable Solutions", "Maintenance Plans"]
    },
    {
      icon: Settings,
      title: "System Design",
      description: "Expert solar system design tailored to your specific energy requirements.",
      features: ["Load Analysis", "Optimal Placement", "Component Selection", "Performance Optimization"]
    },
    {
      icon: Wrench,
      title: "Installation",
      description: "Professional installation by certified technicians ensuring safety and efficiency.",
      features: ["Certified Installers", "Safety Protocols", "Quality Assurance", "Code Compliance"]
    },
    {
      icon: Shield,
      title: "Maintenance",
      description: "Comprehensive maintenance services to ensure peak performance of your solar system.",
      features: ["Regular Inspections", "Cleaning Services", "Performance Monitoring", "Repair Services"]
    },
    {
      icon: Headphones,
      title: "Support",
      description: "24/7 customer support and technical assistance for all your solar needs.",
      features: ["24/7 Availability", "Technical Support", "Remote Monitoring", "Emergency Response"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#000d2e] mb-4">
            Comprehensive Solar Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to ongoing maintenance, we provide complete solar solutions tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-[#0b79fc] to-[#39aa0b] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <service.icon className="text-white" size={24} />
              </div>
              
              <h3 className="text-2xl font-bold text-[#000d2e] mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#39aa0b] rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#0b79fc] to-[#39aa0b] rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Go Solar?</h3>
            <p className="text-xl mb-6">Get a free consultation and customized solar solution for your property.</p>
            <button className="bg-white text-[#0b79fc] hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
