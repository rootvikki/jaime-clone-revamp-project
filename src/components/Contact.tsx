
import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#000d2e]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your solar journey? Contact our experts for a free consultation and personalized quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#0b79fc] p-3 rounded-lg">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Phone</h4>
                  <p className="text-gray-300">0722418160</p>
                  <p className="text-sm text-gray-400">Available 24/7 for emergencies</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#39aa0b] p-3 rounded-lg">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Email</h4>
                  <p className="text-gray-300">info@jaimegroup.africa</p>
                  <p className="text-sm text-gray-400">We respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#e2950c] p-3 rounded-lg">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Service Areas</h4>
                  <p className="text-gray-300">Across Africa</p>
                  <p className="text-sm text-gray-400">Serving 15+ countries</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-[#0b79fc] p-3 rounded-lg">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Business Hours</h4>
                  <p className="text-gray-300">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Sat: 9:00 AM - 4:00 PM</p>
                  <p className="text-sm text-gray-400">Emergency support available 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-[#000d2e] mb-6">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b79fc] focus:border-transparent transition-all"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b79fc] focus:border-transparent transition-all"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b79fc] focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b79fc] focus:border-transparent transition-all"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b79fc] focus:border-transparent transition-all">
                  <option>Residential Solar Installation</option>
                  <option>Commercial Solar Installation</option>
                  <option>Solar Panel Purchase</option>
                  <option>Maintenance Services</option>
                  <option>Consultation</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0b79fc] focus:border-transparent transition-all"
                  placeholder="Tell us about your solar energy needs..."
                ></textarea>
              </div>
              
              <button className="w-full bg-gradient-to-r from-[#0b79fc] to-[#39aa0b] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
