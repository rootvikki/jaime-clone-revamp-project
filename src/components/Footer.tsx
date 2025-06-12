
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/bb2f354e-73bb-4290-957d-f5efe660fdc0.png" 
                alt="Jaime Group LTD" 
                className="h-10 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">Jaime Group LTD</h3>
                <p className="text-sm text-gray-400">Solar Excellence</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Leading provider of premium solar solutions across Africa. Committed to sustainable energy and exceptional customer service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-[#0b79fc] p-2 rounded-lg hover:bg-[#0962d4] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-[#39aa0b] p-2 rounded-lg hover:bg-[#2d8009] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-[#e2950c] p-2 rounded-lg hover:bg-[#c7820a] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-[#0b79fc] p-2 rounded-lg hover:bg-[#0962d4] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-[#39aa0b] transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-[#39aa0b] transition-colors">About Us</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-[#39aa0b] transition-colors">Products</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-[#39aa0b] transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-[#39aa0b] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-[#39aa0b] transition-colors">Residential Solar</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#39aa0b] transition-colors">Commercial Solar</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#39aa0b] transition-colors">Solar Installation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#39aa0b] transition-colors">Maintenance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#39aa0b] transition-colors">Consultation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="text-[#39aa0b]" size={20} />
                <span className="text-gray-300">0722418160</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-[#39aa0b]" size={20} />
                <span className="text-gray-300">info@jaimegroup.africa</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-[#39aa0b]" size={20} />
                <span className="text-gray-300">Serving Africa Wide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 Jaime Group LTD. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#39aa0b] transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#39aa0b] transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-[#39aa0b] transition-colors">Warranty</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
