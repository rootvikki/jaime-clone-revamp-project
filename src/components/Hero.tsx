
import React from 'react';
import { ArrowRight, Zap, Sun, Leaf } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback background image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 13, 46, 0.7), rgba(11, 121, 252, 0.5), rgba(57, 170, 11, 0.3)), url('https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#000d2e]/90 via-[#0b79fc]/70 to-[#39aa0b]/50 z-10"></div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-15">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#39aa0b] rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-[#e2950c] rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-[#0b79fc] rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-[#39aa0b] rounded-full animate-bounce delay-1000"></div>
      </div>

      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Power Your Future with
            <span className="block text-[#39aa0b] drop-shadow-lg">Solar Energy</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto drop-shadow-md">
            Leading the renewable energy revolution with premium solar panels and professional installation services across Africa.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => {
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#39aa0b] hover:bg-[#2d8009] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-xl"
            >
              <span>Explore Products</span>
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#000d2e] px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
              Get Free Quote
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-6 border border-white/20">
              <div className="bg-[#0b79fc]/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">High Efficiency</h3>
              <p className="text-gray-200">Premium solar panels with industry-leading efficiency rates</p>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-6 border border-white/20">
              <div className="bg-[#39aa0b]/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Sun className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">25 Year Warranty</h3>
              <p className="text-gray-200">Long-term protection and peace of mind</p>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-6 border border-white/20">
              <div className="bg-[#e2950c]/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Leaf className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-gray-200">Clean, renewable energy for a sustainable future</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
