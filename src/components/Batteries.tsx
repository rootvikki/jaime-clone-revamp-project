
import React from 'react';
import { ShoppingCart, Eye, Star, Battery } from 'lucide-react';

const Batteries = () => {
  const batteries = [
    {
      id: 1,
      name: "XD12-40 12V 40Ah AGM Battery",
      voltage: "12V",
      capacity: "40Ah",
      type: "AGM",
      warranty: "2 Years",
      price: "From $189",
      image: "/lovable-uploads/e4601bc3-bde1-4af5-8ab1-0e9fdee07951.png",
      rating: 4.6,
      features: ["Maintenance Free", "Deep Cycle", "Leak Proof"]
    },
    {
      id: 2,
      name: "SPARK MF Automotive Battery",
      voltage: "12V",
      capacity: "70Ah",
      type: "Maintenance Free",
      warranty: "3 Years",
      price: "From $249",
      image: "/lovable-uploads/e7264465-d524-4478-b9b9-7a2a6957332f.png",
      rating: 4.7,
      features: ["High Performance", "Automotive Grade", "Quick Start"]
    },
    {
      id: 3,
      name: "LiFePO4 Lithium Battery 12.8V 300Ah",
      voltage: "12.8V",
      capacity: "300Ah",
      type: "LiFePO4",
      warranty: "10 Years",
      price: "From $1,299",
      image: "/lovable-uploads/e82cdbf2-64a5-4f2f-a91f-dcbddb4aa62d.png",
      rating: 4.9,
      features: ["Long Life Cycle", "Fast Charging", "Lightweight"]
    },
    {
      id: 4,
      name: "Solar MF Battery 12V 100Ah",
      voltage: "12V",
      capacity: "100Ah",
      type: "Solar MF",
      warranty: "3 Years",
      price: "From $299",
      image: "/lovable-uploads/43d00e3c-329b-4f46-8037-def8bfdac3c7.png",
      rating: 4.5,
      features: ["Solar Optimized", "Deep Cycle", "Durable"]
    },
    {
      id: 5,
      name: "LiFePO4 Battery 12V 100Ah",
      voltage: "12V",
      capacity: "100Ah",
      type: "LiFePO4",
      warranty: "8 Years",
      price: "From $899",
      image: "/lovable-uploads/89d60e69-6c07-4279-98b3-dba53b3005ef.png",
      rating: 4.8,
      features: ["Eco Friendly", "High Efficiency", "Safety Certified"]
    }
  ];

  return (
    <section id="batteries" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Battery className="text-[#0b79fc] mr-3" size={48} />
            <h2 className="text-4xl md:text-5xl font-bold text-[#000d2e]">
              Premium Batteries
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            High-quality batteries for all your energy storage needs. From automotive to solar applications, we have the perfect battery solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {batteries.map((battery) => (
            <div key={battery.id} className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={battery.image} 
                  alt={battery.name}
                  className="w-full h-64 object-cover bg-white"
                />
                <div className="absolute top-4 right-4 bg-[#e2950c] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {battery.voltage}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex text-[#e2950c] mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill={i < Math.floor(battery.rating) ? "currentColor" : "none"} />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({battery.rating})</span>
                </div>
                
                <h3 className="text-xl font-bold text-[#000d2e] mb-3">{battery.name}</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="text-gray-600">
                    <span className="font-semibold">Capacity:</span> {battery.capacity}
                  </div>
                  <div className="text-gray-600">
                    <span className="font-semibold">Type:</span> {battery.type}
                  </div>
                  <div className="text-gray-600 col-span-2">
                    <span className="font-semibold">Warranty:</span> {battery.warranty}
                  </div>
                </div>
                
                <div className="mb-4">
                  {battery.features.map((feature, index) => (
                    <span key={index} className="inline-block bg-[#39aa0b]/10 text-[#39aa0b] text-xs px-2 py-1 rounded-full mr-2 mb-2">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-[#0b79fc]">{battery.price}</div>
                  <div className="flex space-x-2">
                    <button className="bg-[#39aa0b] hover:bg-[#2d8009] text-white p-2 rounded-lg transition-colors">
                      <ShoppingCart size={20} />
                    </button>
                    <button className="bg-[#0b79fc] hover:bg-[#0962d4] text-white p-2 rounded-lg transition-colors">
                      <Eye size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#0b79fc] hover:bg-[#0962d4] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            View All Batteries
          </button>
        </div>
      </div>
    </section>
  );
};

export default Batteries;
