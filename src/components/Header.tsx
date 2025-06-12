
import React from 'react';
import { Menu, Phone, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-gray-800 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>0722418160</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span>info@jaimegroup.africa</span>
            </div>
          </div>
          <div className="text-sm">
            Professional Solar Solutions
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/bb2f354e-73bb-4290-957d-f5efe660fdc0.png" 
              alt="Jaime Group LTD" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-2xl font-bold text-[#000d2e]">Jaime Group LTD</h1>
              <p className="text-sm text-gray-600">Premium Solar Solutions</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-[#000d2e] hover:text-[#0b79fc] font-medium transition-colors">Home</a>
            <a href="#about" className="text-[#000d2e] hover:text-[#0b79fc] font-medium transition-colors">About</a>
            <a href="#products" className="text-[#000d2e] hover:text-[#0b79fc] font-medium transition-colors">Products</a>
            <a href="#services" className="text-[#000d2e] hover:text-[#0b79fc] font-medium transition-colors">Services</a>
            <a href="#contact" className="text-[#000d2e] hover:text-[#0b79fc] font-medium transition-colors">Contact</a>
          </nav>
          
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-[#000d2e]" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
