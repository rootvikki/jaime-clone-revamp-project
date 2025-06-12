
import React from 'react';
import { ArrowRight, Zap, Sun, Leaf } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#000d2e]/80 via-[#0b79fc]/60 to-[#39aa0b]/40 z-10"></div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#39aa0b] rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-[#e2950c] rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-[#0b79fc] rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-[#39aa0b] rounded-full animate-bounce delay-1000"></div>
      </div>

      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Power Your Future with
            <span className="block text-[#39aa0b]">Solar Energy</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Leading the renewable energy revolution with premium solar panels and professional installation services across Africa.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <button className="bg-[#39aa0b] hover:bg-[#2d8009] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
              <span>Explore Products</span>
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#000d2e] px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              Get Free Quote
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-[#0b79fc]/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="text-[#0b79fc]" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">High Efficiency</h3>
              <p className="text-gray-300">Premium solar panels with industry-leading efficiency rates</p>
            </div>
            <div className="text-center">
              <div className="bg-[#39aa0b]/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Sun className="text-[#39aa0b]" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">25 Year Warranty</h3>
              <p className="text-gray-300">Long-term protection and peace of mind</p>
            </div>
            <div className="text-center">
              <div className="bg-[#e2950c]/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-[#e2950c]" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-gray-300">Clean, renewable energy for a sustainable future</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
