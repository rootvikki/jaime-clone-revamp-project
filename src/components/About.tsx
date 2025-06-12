
import React from 'react';
import { Award, Users, Zap, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: "Years Experience", value: "10+" },
    { icon: Users, label: "Happy Customers", value: "5000+" },
    { icon: Zap, label: "MW Installed", value: "500+" },
    { icon: Globe, label: "Countries Served", value: "15+" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#000d2e] mb-6">
              Leading Solar Innovation
              <span className="block text-[#39aa0b]">Across Africa</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6">
              Jaime Group LTD is at the forefront of renewable energy solutions in Africa. With over a decade of experience, we've been transforming communities and businesses through sustainable solar technology.
            </p>
            
            <p className="text-lg text-gray-600 mb-8">
              Our commitment to quality, innovation, and customer satisfaction has made us the trusted choice for solar installations across the continent. We provide end-to-end solutions from consultation to installation and maintenance.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-[#0b79fc]/5 rounded-lg">
                <div className="text-3xl font-bold text-[#0b79fc] mb-2">98%</div>
                <div className="text-sm text-gray-600">Customer Satisfaction</div>
              </div>
              <div className="text-center p-4 bg-[#39aa0b]/5 rounded-lg">
                <div className="text-3xl font-bold text-[#39aa0b] mb-2">25</div>
                <div className="text-sm text-gray-600">Year Warranty</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-[#0b79fc]/20 to-[#39aa0b]/20 rounded-3xl p-8">
              <img 
                src="/lovable-uploads/bb2f354e-73bb-4290-957d-f5efe660fdc0.png" 
                alt="Jaime Group" 
                className="w-32 h-32 mx-auto mb-8"
              />
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#000d2e] mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To accelerate Africa's transition to clean energy through innovative solar solutions that are accessible, reliable, and sustainable.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#39aa0b] rounded-full"></div>
                  <span className="text-gray-700">Premium Quality Products</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#0b79fc] rounded-full"></div>
                  <span className="text-gray-700">Professional Installation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#e2950c] rounded-full"></div>
                  <span className="text-gray-700">24/7 Customer Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-[#0b79fc] to-[#39aa0b] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-[#000d2e] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
